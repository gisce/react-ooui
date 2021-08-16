import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Form as FormOoui, parseContext, parseDomain } from "ooui";
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
  formView?: FormView;
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
  parentOpenNewActionModal?: ({
    domain,
    model,
    formView,
    context,
  }: {
    domain: any;
    model: string;
    formView: FormView;
    context: any;
  }) => void;
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
    formView: formViewProps,
    postSaveAction,
    insideButtonModal = false,
    parentContext = {},
    actionDomain,
    visible = true,
    rootForm = false,
    parentOpenNewActionModal,
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
  const [buttonActionModalFormView, setButtonActionModalFormView] = useState<
    FormView
  >();
  const [buttonActionModalModel, setButtonActionModalModel] = useState<
    string
  >();
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
  const { activeId: parentId } = formContext || {};

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
    generateReport: tryGenerateReport,
    runAction: tryRunAction,
  }));

  useEffect(() => {
    if (!model && !formViewProps) {
      return;
    }

    if (!visible) {
      setFormOoui(undefined);
      return;
    }

    fetchData();
  }, [id, model, valuesProps, formViewProps, visible]);

  const fetchData = async () => {
    setLoading(true);
    setError(undefined);

    let view;

    try {
      if (formViewProps) {
        view = { arch: formViewProps.arch, fields: formViewProps.fields };
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

    return (await ConnectionProvider.getHandler().getView({
      model,
      type: "form",
    })) as FormView;
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

  const getCurrentValues = (fields: any) => {
    const currentValues = antForm.getFieldsValue(true);
    return processValues(currentValues, fields);
  };

  const fetchValuesFromApi = async ({
    fields,
    arch,
  }: {
    fields: any;
    arch: string;
  }) => {
    let values = {};
    if (getCurrentId()!) {
      values = (
        await ConnectionProvider.getHandler().readObjects({
          arch,
          model,
          ids: [getCurrentId()!],
          fields,
        })
      )[0];

      const { results } = await ConnectionProvider.getHandler().search({
        params: [
          ["res_model", "=", model],
          ["res_id", "=", getCurrentId()!],
        ],
        model: "ir.attachment",
      });
      setAttachments?.(results);
    } else {
      setAttachments?.([]);
      values = await getDefaultValues(fields);
    }
    return values;
  };

  const getDefaultValues = async (fields: any) => {
    return await ConnectionProvider.getHandler().defaultGet({
      model,
      fields,
      context: { ...parentContext, ...formOoui?.context },
    });
  };

  const formHasChanges = () => {
    return Object.keys(getTouchedValues(antForm, fields)).length !== 0;
  };

  const submitApi = async () => {
    if (getCurrentId()) {
      const touchedValues = getTouchedValues(antForm, fields);

      await ConnectionProvider.getHandler().update({
        model,
        id: getCurrentId()!,
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
      await postSaveAction(getCurrentId());
    }

    if (!insideButtonModal) {
      onSubmitSucceed?.(getCurrentId());
    }
  };

  const submitValues = async () => {
    if (!insideButtonModal) {
      onSubmitSucceed?.({
        id: getCurrentId()!,
        touchedValues: getTouchedValues(antForm, fields),
      });
    }
  };

  const submitForm = async () => {
    setError(undefined);
    if (!formHasChanges() && getCurrentId()!) {
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
      values: {
        ...values,
        id: getCurrentId()!,
        active_id: getCurrentId()!,
        parent_id: parentId,
      },
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
    try {
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
          } else {
            payload[arg] = false;
          }
        });

        const ids = getCurrentId()! ? [getCurrentId()!] : [];

        const response = await ConnectionProvider.getHandler().executeOnChange({
          model,
          action: onChangeFieldAction.method,
          ids,
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
    } catch (err) {
      showErrorDialog(err);
    }
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
      payload: [getCurrentId()!],
      context: {
        ...context,
        ...parentContext,
        ...formOoui?.context,
      },
    });

    if (
      typeof response === "object" &&
      response !== null &&
      Object.keys(response).length === 0 &&
      insideButtonModal
    ) {
      onSubmitSucceed?.(id);
    } else if (
      response.type &&
      response.type === "ir.actions.act_window_close"
    ) {
      onSubmitSucceed?.(id);
    } else if (response.type && response.type === "ir.actions.report.xml") {
      await executeReportAction(response, context);
    } else if (response.type && response.type === "ir.actions.act_window") {
      const formView = (await ConnectionProvider.getHandler().getView({
        model: response.res_model,
        type: "form",
        context,
      })) as FormView;

      const responseContext = parseContext({
        context: response.context,
        fields,
        values: getCurrentValues(fields),
      });

      const mergedContext = {
        ...responseContext,
        ...context,
        ...parentContext,
        ...formOoui?.context,
      };

      const options = {
        domain: [],
        model: response.res_model,
        formView,
        context: mergedContext,
      };

      openActionModal(options);
    } else {
      await fetchValues();
    }
  }

  function openActionModal({
    domain,
    model,
    formView,
    context,
  }: {
    domain: any;
    model: string;
    formView: FormView;
    context: any;
  }) {
    if (insideButtonModal && parentOpenNewActionModal) {
      parentOpenNewActionModal({ domain, model, formView, context });
    } else {
      setActionDomainModal(domain);
      setButtonActionModalModel(model);
      setButtonActionModalFormView(formView);
      setButtonContext(context);
      setButtonActionModalVisible(true);
    }
  }

  async function openNewActionModal({
    domain,
    model,
    formView,
    context,
  }: {
    domain: any;
    model: string;
    formView: FormView;
    context: any;
  }) {
    setButtonActionModalVisible(false);
    setFormIsLoading?.(true);
    setButtonContext({});
    setActionDomainModal([]);
    setButtonActionModalModel(undefined);
    setButtonActionModalFormView(undefined);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setFormIsLoading?.(false);
    openActionModal({ domain, model, formView, context });
  }

  async function executeReportAction(response: any, context?: any) {
    const { ids, ...datasource } = response.datas;
    let idsToExecute = ids;

    if (!ids) {
      const results = await ConnectionProvider.getHandler().searchAllIds({
        params: [],
        model: datasource.model || response.model,
        totalItems: 1,
      });

      if (results.length === 0) {
        setReportGenerating(false);
        showErrorDialog("Nothing to print");
        return;
      }

      idsToExecute = results;
      datasource.id = results[0];
    }

    await generateReport({
      model: response.model,
      name: response.report_name,
      datas: datasource,
      ids: idsToExecute,
      context,
    });
  }

  function getCurrentId() {
    return id || createdId.current;
  }

  async function tryGenerateReport(options: CreateReportRequest) {
    try {
      await generateReport(options);
    } catch (err) {
      showErrorDialog(err);
    }
  }

  async function generateReport(options: CreateReportRequest) {
    const { ids, context, model, datas, name } = options;

    const reportContext =
      typeof context === "string"
        ? parseContext({
            context,
            fields,
            values: getCurrentValues(fields),
          })
        : context;

    const newReportId = await ConnectionProvider.getHandler().createReport({
      model,
      name,
      datas,
      ids,
      context: {
        ...reportContext,
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
    let reportState;
    try {
      reportState = await ConnectionProvider.getHandler().getReport({
        id,
      });
      if (reportState.state) {
        clearInterval(reportInProgressInterval.current);
        setReportGenerating(false);
        const fileType: any = await getMimeType(reportState.result);
        openBase64InNewTab(reportState.result, fileType.mime);
      }
    } catch (error) {
      clearInterval(reportInProgressInterval.current);
      setReportGenerating(false);
      showErrorDialog(error.exception || error);
    }
  }

  async function runWorkflowButton({ action }: { action: string }) {
    const response = await ConnectionProvider.getHandler().executeWorkflow({
      model,
      action,
      payload: getCurrentId()!,
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

    await runAction(actionData, context);
  }

  async function tryRunAction(actionData: any, context: any) {
    try {
      await runAction(actionData, context);
    } catch (err) {
      showErrorDialog(err);
    }
  }

  async function runAction(actionData: any, context: any) {
    setFormIsLoading?.(true);

    if (actionData.type === "ir.actions.act_window") {
      const actionWindowData = (
        await ConnectionProvider.getHandler().readObjects({
          model: "ir.actions.act_window",
          ids: [parseInt(actionData.id)],
        })
      )[0];

      const viewData = await ConnectionProvider.getHandler().getViewsForAction({
        action: `${actionData.type},${actionData.id}`,
        context: { ...context, ...parentContext, ...formOoui?.context },
      });

      const formView = viewData.views.get("form");
      const parsedDomain = parseDomain({
        domainValue: actionWindowData.domain,
        values: {
          active_id: getCurrentId()!,
        },
        fields: {},
      });

      const mergedContext = {
        ...context,
        ...parentContext,
        ...formOoui?.context,
      };

      openActionModal({
        domain: parsedDomain,
        model: viewData.model,
        formView,
        context: mergedContext,
      });
    } else if (actionData.type === "ir.actions.report.xml") {
      await executeReportAction(actionData, context);
    } else if (actionData.type === "ir.actions.wizard") {
      showErrorDialog("Wizard actions not supported");
    }

    setFormIsLoading?.(false);
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

    try {
      await submitForm();

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

  async function onFormModalSucceed() {
    setButtonActionModalVisible(false);
    setButtonContext({});

    try {
      await fetchValues();
    } catch (err) {
      showErrorDialog(err);
    }
  }

  const content = () => {
    if (!formOoui) {
      return <Spin />;
    }

    if (!model && !formViewProps) {
      return null;
    }

    if (!visible) {
      return null;
    }

    return (
      <>
        <FormProvider
          activeId={id}
          activeModel={model}
          setFieldValue={setFieldValue}
          getFieldValue={getFieldValue}
          executeButtonAction={executeButtonAction}
        >
          <AntForm
            form={antForm}
            onFieldsChange={debouncedCheckFieldsChanges}
            component={false}
            preserve={false}
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
        parentContext={{
          ...buttonContext,
          ...parentContext,
          ...formOoui?.context,
        }}
        model={buttonActionModalModel!}
        formView={buttonActionModalFormView}
        visible={buttonActionModalVisible}
        onSubmitSucceed={onFormModalSucceed}
        onCancel={() => {
          setButtonActionModalVisible(false);
          setButtonContext({});
        }}
        showFooter={false}
        actionDomain={actionDomainModal}
        parentOpenNewActionModal={openNewActionModal}
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
