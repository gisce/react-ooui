import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Form as FormOoui, parseDomain } from "ooui";
import {
  Form as AntForm,
  Button,
  Divider,
  Space,
  Row,
  Alert,
  Spin,
  Modal,
} from "antd";
import useDimensions from "react-cool-dimensions";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import debounce from "lodash/debounce";

import Container from "@/widgets/containers/Container";
import {
  processValues,
  getTouchedValues,
  checkFieldsType,
  mergeFieldsDomain,
  getValuesForDomain,
} from "@/helpers/formHelper";
import { CreateReportRequest, FormView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import formErrorsDialog from "@/ui/FormErrorsDialog";
import showErrorDialog from "@/ui/ActionErrorDialog";
import showWarningDialog from "@/ui/WarningDialog";
import FormProvider, {
  FormContext,
  FormContextType,
} from "@/context/FormContext";
import { FormModal } from "@/index";
import {
  FormModalContext,
  FormModalContextType,
} from "@/context/FormModalContext";

import { openBase64InNewTab, getMimeType } from "@/helpers/filesHelper";

import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";

export type FormProps = {
  model: string;
  readOnly?: boolean;
  id?: number;
  arch?: string;
  fields?: any;
  values?: any;
  showFooter?: boolean;
  getDataFromAction?: boolean;
  mustClearAfterSave?: boolean;
  submitMode?: "api" | "values";
  onSubmitSucceed?: (event: any) => void;
  onSubmitError?: (error: any) => void;
  onCancel?: () => void;
  onFieldsChange?: (values: any) => void;
  postSaveAction?: (event: any) => Promise<void>;
  insideButtonModal?: boolean;
  parentContext?: any;
  actionDomain?: any;
  visible?: boolean;
  rootForm?: boolean;
};

const WIDTH_BREAKPOINT = 1000;

function Form(props: FormProps, ref: any) {
  const {
    model,
    id,
    onCancel: propsOnCancel,
    onSubmitSucceed: propsOnSubmitSucceed,
    showFooter = false,
    getDataFromAction = false,
    onFieldsChange,
    onSubmitError: propsOnSubmitError,
    readOnly = false,
    mustClearAfterSave = false,
    submitMode = "api",
    values: valuesProps,
    arch: archProps,
    fields: fieldsProps,
    postSaveAction,
    insideButtonModal = false,
    parentContext = {},
    actionDomain,
    visible = true,
    rootForm = false,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [formOoui, setFormOoui] = useState<FormOoui>();
  const [antForm] = AntForm.useForm();
  const [arch, setArch] = useState<string>();
  const [fields, setFields] = useState<any>();
  const [buttonActionModalVisible, setButtonActionModalVisible] = useState<
    boolean
  >(false);
  const [buttonActionModalArch, setButtonActionModalArch] = useState<string>();
  const [buttonActionModalModel, setButtonActionModalModel] = useState<
    string
  >();
  const [buttonActionModalFields, setButtonActionModalFields] = useState<any>();
  const formModalContext = useContext(FormModalContext) as FormModalContextType;
  const [buttonContext, setButtonContext] = useState<any>({});
  const [actionDomainModal, setActionDomainModal] = useState<any>();

  const createdId = useRef<number>();

  const reportInProgressInterval = useRef<any>();
  const [reportGenerating, setReportGenerating] = useState<boolean>(false);
  const warningIsShwon = useRef<boolean>(false);

  const { width, ref: containerRef } = useDimensions<HTMLDivElement>({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
    updateOnBreakpointChange: true,
  });
  const responsiveBehaviour = width < WIDTH_BREAKPOINT;

  const formContext = useContext(FormContext) as FormContextType;
  const { activeId: parentId, activeModel: parentModel } = formContext || {};

  const actionViewContext = useContext(
    ActionViewContext
  ) as ActionViewContextType;
  const {
    setFormIsSaving = undefined,
    setFormHasChanges = undefined,
    setCurrentId = undefined,
    setFormIsLoading = undefined,
    setAttachments = undefined,
  } = (rootForm ? actionViewContext : {}) || {};

  const onSubmitSucceed = (payload: any) => {
    setFormHasChanges?.(false);
    setFormIsSaving?.(false);
    propsOnSubmitSucceed?.(payload);
    setCurrentId?.(payload);
  };

  const onCancel = () => {
    setFormIsSaving?.(false);
    propsOnCancel?.();
  };

  const onSubmitError = (error: any) => {
    setFormIsSaving?.(false);
    propsOnSubmitError?.(error);
  };

  useImperativeHandle(ref, () => ({
    submitForm,
    generateReport,
  }));

  useEffect(() => {
    if (!model && !archProps && !fieldsProps) {
      return;
    }

    fetchData();
  }, [id, model, valuesProps, archProps, fieldsProps]);

  const fetchData = async () => {
    setLoading(true);
    setError(undefined);

    let view;

    try {
      if (archProps && fieldsProps) {
        view = { arch: archProps, fields: fieldsProps };
      } else {
        view = await getFormView();
      }

      const { fields, arch } = view;
      setFields(fields);
      setArch(arch);

      fetchValues({
        fields,
        arch,
      });
    } catch (err) {
      setError(err);
      setFormIsLoading?.(false);
    } finally {
      setFormHasChanges?.(false);
      setLoading(false);
    }
  };

  type FetchValuesOptions = {
    fields?: any;
    arch?: string;
  };

  const fetchValues = async (options?: FetchValuesOptions) => {
    let values;
    let _fields;
    let _arch;

    setFormIsLoading?.(true);

    if (options) {
      _fields = options.fields;
      _arch = options.arch;
    } else {
      _fields = fields;
      _arch = arch;
    }

    if (valuesProps) {
      values = valuesProps;
    } else {
      values = await fetchValuesFromApi({
        fields: _fields,
        arch: _arch!,
      });
    }

    if (actionDomain) {
      values = { ...values, ...getValuesForDomain(actionDomain) };
    }

    assignNewValuesToForm({ values, fields: _fields, reset: true });
    parseForm({ fields: _fields, arch: _arch!, values });
    setFormIsLoading?.(false);
  };

  const cancelUnsavedChanges = () => {
    if (formHasChanges()) {
      showUnsavedChangesDialog({
        onOk: () => {
          onCancel?.();
        },
      });
      return;
    }

    onCancel?.();
  };

  const getFormView = async (): Promise<FormView> => {
    if (getDataFromAction) {
      const action = await ConnectionProvider.getHandler().getAction(model);
      const viewsForAction = await ConnectionProvider.getHandler().getViewsForAction(
        {
          action,
        }
      );
      return viewsForAction.views.get("form");
    }

    return (await ConnectionProvider.getHandler().getView(
      model,
      "form"
    )) as FormView;
  };

  const assignNewValuesToForm = ({
    values: newValues,
    fields,
    reset,
  }: {
    values: any;
    fields: any;
    reset: boolean;
  }) => {
    const currentValues = reset ? {} : antForm.getFieldsValue(true);
    const mergedValues = { ...currentValues, ...newValues };
    const valuesProcessed = processValues(mergedValues, fields);
    const fieldsToUpdate = Object.keys(fields).map((fieldName) => {
      return {
        name: fieldName,
        touched: false,
        value: valuesProcessed[fieldName] || undefined,
      };
    });

    antForm.setFields(fieldsToUpdate);
  };

  const fetchValuesFromApi = async ({
    fields,
    arch,
  }: {
    fields: any;
    arch: string;
  }) => {
    let values = {};
    if (id) {
      values = (
        await ConnectionProvider.getHandler().readObjects({
          arch,
          model,
          ids: [id],
          fields,
        })
      )[0];

      const { results } = await ConnectionProvider.getHandler().search({
        params: [
          ["res_model", "=", model],
          ["res_id", "=", id],
        ],
        model: "ir.attachment",
      });
      setAttachments?.(results);
    } else {
      values = await getDefaultValues(fields);
    }
    return values;
  };

  const getDefaultValues = async (fields: any) => {
    return await ConnectionProvider.getHandler().execute({
      model,
      action: "default_get",
      payload: Object.keys(fields),
      context: { ...parentContext, ...formOoui?.context },
    });
  };

  const formHasChanges = () => {
    return Object.keys(getTouchedValues(antForm, fields)).length !== 0;
  };

  const submitApi = async () => {
    if (id) {
      const touchedValues = getTouchedValues(antForm, fields);

      await ConnectionProvider.getHandler().update({
        model,
        id,
        values: touchedValues,
        fields,
        context: {
          ...parentContext,
          ...formOoui?.context,
        },
      });
    } else {
      const currentValues = processValues(antForm.getFieldsValue(true), fields);

      const newId = await ConnectionProvider.getHandler().create({
        model,
        values: currentValues,
        fields,
        context: {
          ...parentContext,
          ...formOoui?.context,
        },
      });
      createdId.current = newId;
    }

    if (postSaveAction) {
      await postSaveAction(id || createdId.current);
    }

    if (!insideButtonModal) {
      onSubmitSucceed?.(id || createdId.current);
    }
  };

  const submitValues = async () => {
    if (!insideButtonModal) {
      onSubmitSucceed?.({
        id,
        touchedValues: getTouchedValues(antForm, fields),
      });
    }
  };

  const submitForm = async () => {
    setError(undefined);
    if (!formHasChanges() && id) {
      onCancel?.();
      return;
    }

    if (await checkIfFormHasErrors()) {
      formErrorsDialog();
      return;
    }

    setIsSubmitting(true);
    setFormIsSaving?.(true);

    try {
      if (submitMode === "api") {
        await submitApi();
      } else {
        await submitValues();
      }

      if (mustClearAfterSave)
        assignNewValuesToForm({ values: {}, fields, reset: true });
    } catch (err) {
      onSubmitError?.(err);
      setError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const parseForm = ({
    fields,
    arch,
    values,
  }: {
    arch: string;
    fields: any;
    values: any;
  }) => {
    const ooui = new FormOoui(fields);
    // TODO: Here we must inject `values` to the ooui parser in order to evaluate arch+values and get the new form container
    ooui.parse(arch, {
      readOnly,
      values: { ...values, id, active_id: id, parent_id: parentId },
    });
    setFormOoui(ooui);

    if (formModalContext && ooui.string)
      formModalContext.setTitle?.(ooui.string);
  };

  const checkFieldsChanges = async (changedFields: any) => {
    if (formHasChanges() && !loading) {
      const values = antForm.getFieldsValue(true);

      onFieldsChange?.(values);
      setFormHasChanges?.(true);

      // We check if there are any field of type text, email, url or char inside the changed values
      // in order to debounce the call
      if (
        checkFieldsType({
          changedFields: changedFields.map((i: any) => i.name[0]),
          fields,
          types: [
            "text",
            "email",
            "url",
            "char",
            "float",
            "integer",
            "many2one",
          ],
        })
      ) {
        debouncedEvaluateChanges(changedFields, values);
      } else {
        evaluateChanges(changedFields, values);
      }
    }
  };

  const debouncedCheckFieldsChanges = debounce(checkFieldsChanges, 100);

  const evaluateChanges = async (changedFields: any, values: any) => {
    let finalValues = values;
    let finalFields = fields;

    // By design, we will only receive one changed field at a time inside changedFields
    const changedFieldName = changedFields[0].name;

    // We check if the form has onChange actions for the field
    const onChangeFieldAction = formOoui?.onChangeFields[changedFieldName];
    if (onChangeFieldAction) {
      const payload: any = {};

      onChangeFieldAction.args.forEach((arg: string) => {
        if (values[arg]) {
          payload[arg] = values[arg];
        }
      });

      const response = await ConnectionProvider.getHandler().executeOnChange({
        model,
        action: onChangeFieldAction.method,
        ids: [id || createdId.current!],
        payload,
        context: {
          ...parentContext,
          ...formOoui?.context,
        },
        fields,
      });

      if (response.value) {
        finalValues = { ...values, ...response.value };
        assignNewValuesToForm({
          values: finalValues,
          fields: fields,
          reset: false,
        });
      }

      if (
        response.warning &&
        response.warning.title &&
        response.warning.message &&
        !warningIsShwon.current
      ) {
        const { title, message } = response.warning;
        warningIsShwon.current = true;
        showWarningDialog(title, message, () => {
          warningIsShwon.current = false;
        });
      }

      if (response.domain) {
        finalFields = mergeFieldsDomain({
          fieldsDomain: response.domain,
          fields,
        });
        setFields(finalFields);
      }
    }

    parseForm({ arch: arch!, fields: finalFields, values: finalValues });
  };

  const debouncedEvaluateChanges = debounce(evaluateChanges, 800);

  const setFieldValue = (field: string, value?: string) => {
    const values = antForm.getFieldsValue(true);
    values[field] = value;
    antForm.setFieldsValue(values);
  };

  const getFieldValue = (field: string) => {
    const values = antForm.getFieldsValue(true);
    return values[field];
  };

  async function checkIfFormHasErrors() {
    try {
      await antForm.validateFields();
      return false;
    } catch (verror) {
      return true;
    }
  }

  async function runObjectButton({
    action,
    context,
  }: {
    action: string;
    context: any;
  }) {
    const response = await ConnectionProvider.getHandler().execute({
      model,
      action,
      payload: [id || createdId.current],
      context: {
        ...context,
        ...parentContext,
        ...formOoui?.context,
      },
    });

    if (Object.keys(response).length === 0 && insideButtonModal) {
      onSubmitSucceed?.(id);
    } else if (
      response.type &&
      response.type === "ir.actions.act_window_close"
    ) {
      onSubmitSucceed?.(id);
    } else if (response.type && response.type === "ir.actions.report.xml") {
      await executeReportAction(response, context);
    } else {
      await fetchValues();
    }
  }

  async function executeReportAction(response: any, context?: any) {
    await generateReport({
      model: response.model,
      name: response.report_name,
      contextReport: response.datas.context,
      ids: response.datas.ids[0],
      context,
    });
  }

  async function generateReport(options: CreateReportRequest) {
    const { ids, context, model, contextReport, name } = options;

    const newReportId = await ConnectionProvider.getHandler().createReport({
      model,
      name,
      contextReport,
      ids,
      context: {
        ...context,
        ...parentContext,
        ...formOoui?.context,
      },
    });

    onSubmitSucceed?.(id);
    setReportGenerating(true);

    reportInProgressInterval.current = setInterval(() => {
      evaluateReportStatus(newReportId);
    }, 1000);
  }

  async function evaluateReportStatus(id: any) {
    const reportState = await ConnectionProvider.getHandler().getReport({
      id,
    });
    if (reportState.state) {
      clearInterval(reportInProgressInterval.current);
      setReportGenerating(false);
      const fileType: any = await getMimeType(reportState.result);
      openBase64InNewTab(reportState.result, fileType.mime);
    }
  }

  async function runWorkflowButton({ action }: { action: string }) {
    const response = await ConnectionProvider.getHandler().executeWorkflow({
      model,
      action,
      payload: id,
    });

    if (response.type && response.type === "ir.actions.act_window_close") {
      onSubmitSucceed?.(id);
    } else {
      await fetchValues();
    }
  }

  async function runActionButton({
    action,
    context,
  }: {
    action: string;
    context: any;
  }) {
    const actionData = (
      await ConnectionProvider.getHandler().readObjects({
        model: "ir.actions.actions",
        ids: [parseInt(action)],
      })
    )[0];

    if (actionData.type === "ir.actions.act_window") {
      const actionWindowData = (
        await ConnectionProvider.getHandler().readObjects({
          model: "ir.actions.act_window",
          ids: [parseInt(action)],
        })
      )[0];

      const viewData = await ConnectionProvider.getHandler().getViewsForAction({
        action: `${actionData.type},${actionData.id}`,
        context: { ...context, ...parentContext, ...formOoui?.context },
      });

      const form = viewData.views.get("form");
      const parsedDomain = parseDomain({
        domainValue: actionWindowData.domain,
        values: {
          active_id: id,
        },
        fields: {},
      });

      setActionDomainModal(parsedDomain);
      setButtonActionModalModel(viewData.model);
      setButtonActionModalArch(form.arch);
      setButtonActionModalFields(form.fields);
      setButtonContext(context);
      setButtonActionModalVisible(true);
    } else if (actionData.type === "ir.actions.report.xml") {
      await executeReportAction(actionData, context);
    }
  }

  async function executeButtonAction({
    type,
    action,
    context,
  }: {
    type: string;
    action: string;
    context?: any;
  }) {
    // If the type of the button it's a cancel, we just close our form
    if (type === "cancel") {
      clearInterval(reportInProgressInterval.current);
      onCancel?.();
      return;
    }

    // We check for required fields
    if (await checkIfFormHasErrors()) {
      formErrorsDialog();
      return;
    }

    await submitForm();

    try {
      if (type === "object") {
        await runObjectButton({ action, context });
      } else if (type === "workflow") {
        await runWorkflowButton({ action });
      } else if (type === "action") {
        await runActionButton({ action, context });
      }
    } catch (err) {
      showErrorDialog(err);
    }
  }

  const content = () => {
    if (!formOoui) {
      return <Spin />;
    }

    return (
      <>
        <FormProvider
          activeId={id}
          activeModel={model}
          parentId={parentId}
          parentModel={parentModel}
          setFieldValue={setFieldValue}
          getFieldValue={getFieldValue}
          executeButtonAction={executeButtonAction}
        >
          <AntForm
            form={antForm}
            onFieldsChange={debouncedCheckFieldsChanges}
            component={false}
          >
            {formOoui && (
              <Container
                container={formOoui.container}
                responsiveBehaviour={responsiveBehaviour}
              />
            )}
          </AntForm>
        </FormProvider>
      </>
    );
  };

  const footer = () => {
    return (
      <>
        <Divider />
        <Row justify="end">
          <Space>
            <Button
              icon={<CloseOutlined />}
              disabled={isSubmitting || loading}
              onClick={cancelUnsavedChanges}
            >
              Cancel
            </Button>
            <Button
              disabled={isSubmitting || loading || readOnly}
              loading={isSubmitting}
              icon={<CheckOutlined />}
              onClick={submitForm}
            >
              OK
            </Button>
          </Space>
        </Row>
      </>
    );
  };

  if (!visible) {
    return <div ref={containerRef} />;
  }

  return (
    <div ref={containerRef} className="pb-2">
      {error && (
        <Alert
          className="mt-10 mb-20"
          message={JSON.stringify(error)}
          type="error"
          banner
        />
      )}
      {loading ? <Spin /> : content()}
      {showFooter && footer()}
      <FormModal
        buttonModal
        noReuse
        parentContext={{
          ...buttonContext,
          ...parentContext,
          ...formOoui?.context,
        }}
        model={buttonActionModalModel!}
        arch={buttonActionModalArch}
        fields={buttonActionModalFields}
        visible={buttonActionModalVisible}
        onSubmitSucceed={async () => {
          setButtonActionModalVisible(false);
          setButtonContext({});
          await fetchValues();
        }}
        onCancel={() => {
          setButtonActionModalVisible(false);
          setButtonContext({});
        }}
        showFooter={false}
        actionDomain={actionDomainModal}
      />
      <Modal
        title={"Generating report..."}
        visible={reportGenerating}
        footer={null}
        closable={false}
        centered
      >
        <Spin />
      </Modal>
    </div>
  );
}

export default forwardRef(Form);
