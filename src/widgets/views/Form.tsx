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
  mergeFieldsDomain,
  getValuesForDomain,
} from "@/helpers/formHelper";
import ConnectionProvider from "@/ConnectionProvider";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import formErrorsDialog from "@/ui/FormErrorsDialog";
import showErrorDialog from "@/ui/ActionErrorDialog";
import showWarningDialog from "@/ui/WarningDialog";
import FormProvider, {
  FormContext,
  FormContextType,
} from "@/context/FormContext";
import { FormView } from "@/index";
import {
  FormModalContext,
  FormModalContextType,
} from "@/context/FormModalContext";

import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";

import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";

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
  onSubmitSucceed?: (id?: number) => void;
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
    formView: formViewProps,
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
  const formModalContext = useContext(FormModalContext) as FormModalContextType;

  const createdId = useRef<number>();

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

  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  useImperativeHandle(ref, () => ({
    submitForm,
    getFields: () => {
      return fields;
    },
    getValues,
    getContext: () => {
      return { ...parentContext, ...formOoui?.context };
    },
    cancelUnsavedChanges,
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

  const onSubmitSucceed = (id?: number) => {
    setFormHasChanges?.(false);
    setFormIsSaving?.(false);
    propsOnSubmitSucceed?.(id);
    setCurrentId?.(id);
  };

  const onCancel = () => {
    setFormIsSaving?.(false);
    propsOnCancel?.();
  };

  const onSubmitError = (error: any) => {
    setFormIsSaving?.(false);
    propsOnSubmitError?.(error);
  };

  function getCurrentId() {
    return id || createdId.current;
  }

  function getValues() {
    return {
      ...getCurrentValues(fields),
      id: getCurrentId()!,
      active_id: getCurrentId()!,
      parent_id: parentId,
    };
  }

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

  const getCurrentValues = (fields: any) => {
    const currentValues = antForm.getFieldsValue(true);
    return processValues(currentValues, fields);
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

      await fetchValues({
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

  const cancelUnsavedChanges = async () => {
    return new Promise(async (resolve) => {
      if (formHasChanges()) {
        showUnsavedChangesDialog({
          onOk: () => {
            onCancel?.();
            resolve(true);
          },
          onCancel: () => {
            resolve(false);
          },
        });
      } else {
        onCancel?.();
        resolve(true);
      }
    });
  };

  const getFormView = async (): Promise<FormView> => {
    if (getDataFromAction) {
      const action = await ConnectionProvider.getHandler().getActionStringForModel(
        model
      );
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
      onSubmitSucceed?.(getCurrentId());
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
      onSubmitSucceed?.(getCurrentId());
    } else if (
      response.type &&
      response.type === "ir.actions.act_window_close"
    ) {
      onSubmitSucceed?.(getCurrentId());
    } else if (response.type) {
      processAction?.({
        actionData: response,
        fields,
        values: getCurrentValues(fields),
        context: {
          ...context,
          ...parentContext,
          ...formOoui?.context,
        },
      });
    } else {
      await fetchValues();
    }
  }

  async function runWorkflowButton({ action }: { action: string }) {
    const response = await ConnectionProvider.getHandler().executeWorkflow({
      model,
      action,
      payload: getCurrentId()!,
    });

    if (response.type && response.type === "ir.actions.act_window_close") {
      onSubmitSucceed?.(getCurrentId());
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

    processAction?.({
      actionData,
      fields,
      values: getCurrentValues(fields),
      context: {
        ...context,
        ...parentContext,
        ...formOoui?.context,
      },
    });
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

  const content = () => {
    if (!formOoui && !error) {
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
              onClick={async () => {
                await cancelUnsavedChanges();
              }}
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
    </div>
  );
}

export default forwardRef(Form);
