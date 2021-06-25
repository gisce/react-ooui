import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Form as FormOoui } from "ooui";
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
} from "@/helpers/formHelper";
import { FormView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import formErrorsDialog from "@/ui/FormErrorsDialog";
import showErrorDialog from "@/ui/ActionErrorDialog";
import FormProvider from "@/context/FormContext";
import { FormModal } from "@/index";
import {
  FormModalContext,
  FormModalContextType,
} from "@/context/FormModalContext";

import { openBase64InNewTab, getMimeType } from "@/helpers/filesHelper";

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
};

const WIDTH_BREAKPOINT = 1000;

function Form(props: FormProps, ref: any): React.ReactElement {
  const {
    model,
    id,
    onCancel,
    onSubmitSucceed,
    showFooter = false,
    getDataFromAction = false,
    onFieldsChange,
    onSubmitError,
    readOnly = false,
    mustClearAfterSave = false,
    submitMode = "api",
    values: valuesProps,
    arch: archProps,
    fields: fieldsProps,
    postSaveAction,
    insideButtonModal = false,
    parentContext = {},
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
  const createdId = useRef<number>();

  const reportInProgressInterval = useRef<any>();
  const [reportGenerating, setReportGenerating] = useState<boolean>(false);

  const { width, ref: containerRef } = useDimensions<HTMLDivElement>({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
    updateOnBreakpointChange: true,
  });
  const responsiveBehaviour = width < WIDTH_BREAKPOINT;

  useImperativeHandle(ref, () => ({
    submitForm,
  }));

  useEffect(() => {
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
    } finally {
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

    assignNewValuesToForm({ values, fields: _fields });
    parseForm({ fields: _fields, arch: _arch!, values });
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
  }: {
    values: any;
    fields: any;
  }) => {
    const currentValues = antForm.getFieldsValue(true);
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

    setIsSubmitting(true);
    try {
      if (submitMode === "api") {
        await submitApi();
      } else {
        await submitValues();
      }

      if (mustClearAfterSave) assignNewValuesToForm({ values: {}, fields });
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
    ooui.parse(arch, { readOnly, values: { ...values, id } });
    setFormOoui(ooui);

    if (formModalContext && ooui.string)
      formModalContext.setTitle?.(ooui.string);
  };

  const debouncedParseForm = debounce(parseForm, 300);

  const checkFieldsChanges = (changedFields: any) => {
    if (formHasChanges()) {
      const values = antForm.getFieldsValue(true);
      onFieldsChange?.(values);

      // We check if there are any field of type text, email, url or char inside the changed values
      // in order to debounce the call
      if (
        checkFieldsType({
          changedFields: changedFields.map((i: any) => i.name),
          fields,
          types: ["text", "email", "url", "char"],
        })
      ) {
        debouncedParseForm({ arch: arch!, fields, values });
      } else {
        parseForm({ arch: arch!, fields, values });
      }
    }
  };

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

  async function executeReportAction(response: any, context: any) {
    const newReportId = await ConnectionProvider.getHandler().createReport({
      model: response.model,
      name: response.report_name,
      contextReport: response.datas.context,
      ids: response.datas.ids[0],
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

  async function runWorkflowButton({
    action,
    context,
  }: {
    action: string;
    context: any;
  }) {
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
      const viewData = await ConnectionProvider.getHandler().getViewsForAction({
        action: `${actionData.type},${actionData.id}`,
        context: { ...context, ...parentContext, ...formOoui?.context },
      });

      const form = viewData.views.get("form");
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
        await runWorkflowButton({ action, context });
      } else if (type === "action") {
        await runActionButton({ action, context });
      }
    } catch (err) {
      showErrorDialog(err);
    }
  }

  const content = () => {
    if (!formOoui) {
      return null;
    }

    return (
      <FormProvider
        parentId={id}
        parentModel={model}
        setFieldValue={setFieldValue}
        getFieldValue={getFieldValue}
        executeButtonAction={executeButtonAction}
      >
        <AntForm
          form={antForm}
          onFieldsChange={checkFieldsChanges}
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

  return (
    <div ref={containerRef} className="pb-2">
      {error && <Alert className="mt-10" message={error} type="error" banner />}
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
