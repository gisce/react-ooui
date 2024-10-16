import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Form as FormOoui, parseContext } from "@gisce/ooui";
import {
  Form as AntForm,
  Button,
  Divider,
  Space,
  Row,
  Spin,
  message,
} from "antd";
import Measure from "react-measure";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import debounce from "lodash/debounce";

import Container from "@/widgets/containers/Container";
import {
  processValues,
  getTouchedValues,
  checkFieldsType,
  mergeFieldsDomain,
  getValuesForDomain,
  getOnChangePayload,
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
import { FormView, One2manyItem } from "@/index";
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
import { useLocale } from "@gisce/react-formiga-components";
import {
  convertFrom2ManyRawValues,
  convertToPlain2ManyValues,
} from "@/helpers/one2manyHelper";
import { ErrorAlert } from "@/ui/ErrorAlert";
import { mergeFieldsContext } from "@/helpers/fieldsHelper";

export type FormProps = {
  model: string;
  readOnly?: boolean;
  id?: number;
  formView?: FormView;
  values?: any;
  showFooter?: boolean;
  getDataFromAction?: boolean;
  mustClearAfterSave?: boolean;
  submitMode?: "api" | "values" | "2many";
  onSubmitSucceed?: (
    id?: number,
    values?: any,
    formValues?: any,
    x2manyPendingLink?: boolean,
    mustRefreshParent?: boolean,
  ) => void;
  onSubmitError?: (error: any) => void;
  onCancel?: () => void;
  onFieldsChange?: (values: any) => void;
  postSaveAction?: (event: any) => Promise<void>;
  insideButtonModal?: boolean;
  parentContext?: any;
  actionDomain?: any;
  visible?: boolean;
  rootForm?: boolean;
  defaultValues?: any;
  forcedValues?: any;
  parentWidth?: number;
  onMustRefreshParent?: () => void;
};

const WIDTH_BREAKPOINT = 800;

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
    defaultValues,
    forcedValues = {},
    parentWidth,
    onMustRefreshParent,
  } = props;
  const { t } = useLocale();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [formOoui, setFormOoui] = useState<FormOoui>();
  const [antForm] = AntForm.useForm();
  const [arch, setArch] = useState<string>();
  const [fields, setFields] = useState<any>();
  const formModalContext = useContext(FormModalContext) as FormModalContextType;
  const [containerWidth, setContainerWidth] = useState<any>();
  const [defaultGetCalled, setDefaultGetCalled] = useState<boolean>(false);

  const createdId = useRef<number>();
  const originalFormValues = useRef<any>({});
  const lastAssignedValues = useRef<any>({});
  const warningIsShown = useRef<boolean>(false);
  const formSubmitting = useRef<boolean>(false);
  const x2manyPendingLink = useRef<boolean>(false);

  const widthToEvaluate =
    parentWidth !== undefined ? parentWidth : containerWidth;
  const responsiveBehaviour = widthToEvaluate < WIDTH_BREAKPOINT;

  const formContext = useContext(FormContext) as FormContextType;
  const { activeId: parentId, getPlainValues: getParentPlainValues } =
    formContext || {};

  const mustFetchParentValues = useRef<boolean>(false);

  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  const {
    setFormIsSaving = undefined,
    setFormHasChanges = undefined,
    setCurrentId = undefined,
    setFormIsLoading = undefined,
    setAttachments = undefined,
    title = undefined,
    setTitle = undefined,
  } = (rootForm ? actionViewContext : {}) || {};

  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction, globalValues } = contentRootContext || {};

  useImperativeHandle(ref, () => ({
    submitForm,
    getFields,
    getValues,
    getPlainValues,
    getContext,
    fetchValues,
    cancelUnsavedChanges,
    clearAndReload: () => {
      createdId.current = undefined;
      setFormOoui(undefined);
      fetchData();
    },
  }));

  useEffect(() => {
    setError(undefined);

    if (!model && !formViewProps) {
      return;
    }

    if (!visible) {
      createdId.current = undefined;
      setFormOoui(undefined);
      return;
    }

    // In the case we set the id to undefined for creating a new item
    if (
      (id === undefined && fields) ||
      (id !== undefined && fields && id < 0)
    ) {
      createdId.current = undefined;
      setFormOoui(undefined);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, model, valuesProps, formViewProps, visible]);

  useEffect(() => {
    if (defaultGetCalled) {
      checkFieldsChanges({
        elementHasLostFocus: true,
      });
      setDefaultGetCalled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultGetCalled]);

  const onSubmitSucceed = (
    id?: number,
    values?: any,
    formValues?: any,
    x2manyPendingLink?: boolean,
  ) => {
    setFormHasChanges?.(false);
    setFormIsSaving?.(false);
    propsOnSubmitSucceed?.(id, values, formValues, x2manyPendingLink);
    setCurrentId?.(id);
    if (mustFetchParentValues.current) {
      onMustRefreshParent?.();
    }
  };

  const onCancel = () => {
    if (mustFetchParentValues.current) {
      onMustRefreshParent?.();
    }
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

  function getFields() {
    return fields;
  }

  function getValues() {
    const values = {
      ...getCurrentValues(fields),
      ...getAdditionalValues(),
    };

    for (const key in values) {
      if (values[key] === undefined) {
        delete values[key];
      }
    }

    return values;
  }

  function getPlainValues() {
    const values: any = getValues();
    const fields: any = getFields();
    const reformattedValues: { [key: string]: any } = {};

    Object.keys(values).forEach((key) => {
      const value = values[key];

      if (
        fields[key] &&
        fields[key].type === "many2one" &&
        value &&
        Array.isArray(value) &&
        value.length === 2
      ) {
        reformattedValues[key] = value[0];
      } else if (
        fields[key] &&
        (fields[key].type === "one2many" || fields[key].type === "many2many") &&
        value &&
        value.items
      ) {
        reformattedValues[key] = value.items
          .filter((item: One2manyItem) => item.operation !== "pendingRemove")
          .map((val: any) => val.id);
      } else {
        reformattedValues[key] = value;
      }
    });

    return reformattedValues;
  }

  function getFormValues() {
    const values = {
      ...getCurrentValues(fields),
    };

    for (const key in values) {
      if (values[key] === undefined) {
        delete values[key];
      }
    }

    return values;
  }

  function getContext() {
    return { ...parentContext, ...formOoui?.context };
  }

  function getActiveIdsContext() {
    const currentId = getCurrentId()!;

    if (!currentId) {
      return {};
    }
    return { active_id: getCurrentId()!, active_ids: [getCurrentId()!] };
  }

  function getAdditionalValues() {
    return {
      id: getCurrentId()!,
      active_id: getCurrentId()!,
      active_ids: [getCurrentId()!],
      parent_id: parentId,
      ...globalValues,
    };
  }

  const getDefaultValues = async (fields: any) => {
    const formContext = getCurrentId() ? formOoui?.context : {};
    return await ConnectionProvider.getHandler().defaultGet({
      model,
      fields,
      context: { ...parentContext, ...formContext },
      extraValues: defaultValues,
    });
  };

  const formHasChanges = () => {
    return (
      Object.keys(
        getTouchedValues({
          source: originalFormValues.current,
          target: getCurrentValues(fields),
          fields,
        }),
      ).length !== 0
    );
  };

  const getCurrentValues = (fields: any) => {
    const currentValues = antForm.getFieldsValue(true);
    return processValues(currentValues, fields);
  };

  const setFieldValue = (field: string, value?: string) => {
    assignNewValuesToForm({
      values: {
        ...processValues(antForm.getFieldsValue(true), fields),
        [field]: value,
      },
      fields,
      reset: false,
    });
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
      message.error(t("fillRequiredFields"));
      return true;
    }
  }
  const fetchData = async () => {
    setError(undefined);
    setFormIsLoading?.(true);

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
      setError(err?.message ? err.message + err.stack : err);
      setFormIsLoading?.(false);
      // setLoading(false);
    }
  };

  type FetchValuesOptions = {
    fields?: any;
    arch?: string;
    forceRefresh?: boolean;
  };

  const fetchValues = async (options?: FetchValuesOptions) => {
    let values;
    let _fields;
    let _arch;
    let hasDefaultGetCalled;

    setFormIsLoading?.(true);
    setError(undefined);

    if (options?.fields) {
      _fields = options.fields;
      _arch = options.arch;
    } else {
      _fields = fields;
      _arch = arch;
    }

    if (valuesProps && options?.forceRefresh !== true) {
      values = valuesProps;
    } else {
      ({ values, defaultGetCalled: hasDefaultGetCalled } =
        await fetchValuesFromApi({
          fields: _fields,
          arch: _arch!,
        }));
    }

    if (actionDomain) {
      values = { ...getValuesForDomain(actionDomain), ...values };
    }

    originalFormValues.current = processValues(values, _fields);

    assignNewValuesToForm({
      values,
      fields: _fields,
      reset: true,
      isDefaultGet: hasDefaultGetCalled,
    });
    parseForm({ fields: _fields, arch: _arch!, values });
    setFormIsLoading?.(false);
    setFormHasChanges?.(false);

    if (hasDefaultGetCalled) {
      setDefaultGetCalled(true);
    }
  };

  const cancelUnsavedChanges = async () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      if (formHasChanges()) {
        showUnsavedChangesDialog({
          t,
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
      const action =
        await ConnectionProvider.getHandler().getActionStringForModel(model);
      const viewsForAction =
        await ConnectionProvider.getHandler().getViewsForAction({
          action,
          context: parentContext,
        });
      return viewsForAction.views.get("form");
    }

    return (await ConnectionProvider.getHandler().getView({
      model,
      type: "form",
      context: parentContext,
    })) as FormView;
  };

  const assignNewValuesToForm = ({
    values: newValues,
    fields,
    reset,
    isDefaultGet = false,
  }: {
    values: any;
    fields: any;
    reset: boolean;
    isDefaultGet?: boolean;
  }) => {
    const currentValues = reset ? {} : antForm.getFieldsValue(true);
    const mergedValues = { ...currentValues, ...newValues };
    const valuesProcessed = processValues(mergedValues, fields);
    const fieldsToUpdate = Object.keys(fields).map((fieldName) => {
      const fieldValue =
        valuesProcessed[fieldName] !== undefined
          ? valuesProcessed[fieldName]
          : undefined;
      return {
        name: fieldName,
        touched: false,
        value: fieldValue,
      };
    });

    if (!isDefaultGet) {
      lastAssignedValues.current = valuesProcessed;
    }

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
    let defaultGetCalled = false;

    if (getCurrentId()!) {
      const ooui =
        formOoui ||
        getFormOoui({
          arch: arch!,
          fields,
          values: {},
        });
      values = (
        await ConnectionProvider.getHandler().readObjects({
          model,
          ids: [getCurrentId()!],
          fields: mergeFieldsContext(fields, ooui?.contextForFields),
          context: parentContext,
        })
      )[0];

      // If we are inside a modal, we don't want to fetch the attachments
      if (insideButtonModal) {
        return { values, defaultGetCalled };
      }
      const results = await ConnectionProvider.getHandler().search({
        params: [
          ["res_model", "=", model],
          ["res_id", "=", getCurrentId()!],
        ],
        fieldsToRetrieve: ["id", "name"],
        context: getContext(),
        model: "ir.attachment",
      });
      setAttachments?.(results);
    } else {
      setAttachments?.([]);
      values = await getDefaultValues(fields);
      defaultGetCalled = true;
    }
    return { values, defaultGetCalled };
  };

  const submitApi = async (options?: { callOnSubmitSucceed?: boolean }) => {
    const { callOnSubmitSucceed = true } = options || {};

    if (getCurrentId()) {
      const touchedValues = getTouchedValues({
        source: originalFormValues.current,
        target: getCurrentValues(fields),
        fields,
      });

      await ConnectionProvider.getHandler().update({
        model,
        id: getCurrentId()!,
        values: { ...touchedValues, ...forcedValues },
        fields,
        context: {
          ...parentContext,
          ...formOoui?.context,
        },
      });
      originalFormValues.current = getCurrentValues(fields);
    } else {
      const currentValues = getCurrentValues(fields);

      const newId = await ConnectionProvider.getHandler().create({
        model,
        values: { ...currentValues, ...forcedValues },
        fields,
        context: {
          ...parentContext,
          ...formOoui?.context,
        },
      });
      createdId.current = newId;
      originalFormValues.current = currentValues;
    }

    if (postSaveAction) {
      await postSaveAction([getCurrentId()]);
    }

    if (!insideButtonModal && callOnSubmitSucceed) {
      onSubmitSucceed?.(getCurrentId(), getValues(), getFormValues());
    }
  };

  const submitValues = async (options?: { callOnSubmitSucceed?: boolean }) => {
    const { callOnSubmitSucceed = true } = options || {};

    if (!insideButtonModal && callOnSubmitSucceed) {
      onSubmitSucceed?.(getCurrentId(), getValues(), getFormValues());
    }
  };

  const submitForm = async (options?: { callOnSubmitSucceed?: boolean }) => {
    let submitSucceed = false;
    const { callOnSubmitSucceed = true } = options || {};
    formSubmitting.current = true;

    setError(undefined);

    if (
      x2manyPendingLink.current &&
      !formHasChanges() &&
      getCurrentId()! &&
      callOnSubmitSucceed
    ) {
      formSubmitting.current = false;
      setFormHasChanges?.(false);
      onSubmitSucceed?.(
        getCurrentId(),
        getValues(),
        getFormValues(),
        x2manyPendingLink.current,
      );
      x2manyPendingLink.current = false;
      const currentId = getCurrentId()!;

      if (mustClearAfterSave) {
        createdId.current = undefined;
        assignNewValuesToForm({ values: {}, fields, reset: true });
      }

      return { succeed: true, id: currentId };
    }

    if (!formHasChanges() && getCurrentId()! && callOnSubmitSucceed) {
      formSubmitting.current = false;
      setFormHasChanges?.(false);
      onCancel?.();
      return { succeed: true, id: getCurrentId()! };
    }

    if (await checkIfFormHasErrors()) {
      formSubmitting.current = false;
      formErrorsDialog(t);
      return { succeed: false, id: getCurrentId()! };
    }

    setIsSubmitting(true);
    setFormIsSaving?.(true);

    try {
      if (submitMode === "api") {
        await submitApi(options);
      } else {
        await submitValues(options);
      }

      if (mustClearAfterSave) {
        createdId.current = undefined;
        assignNewValuesToForm({ values: {}, fields, reset: true });
      }

      await fetchValues({ forceRefresh: true });
      submitSucceed = true;
      message.success(t("savedRegisters"));
    } catch (err) {
      formSubmitting.current = false;
      setIsSubmitting(false);
      setFormIsSaving?.(false);
      onSubmitError?.(err);
      message.error(t("errorWhileSavingForm"));
      setError(err?.message ? err.message : err);
    } finally {
      formSubmitting.current = false;
      setFormIsSaving?.(false);
      setIsSubmitting(false);
    }

    return { succeed: submitSucceed, id: getCurrentId()! };
  };

  const getFormOoui = ({
    fields,
    arch,
    values,
    operationInProgress = false,
  }: {
    arch: string;
    fields: any;
    values: any;
    operationInProgress?: boolean;
  }) => {
    const ooui = new FormOoui(fields);
    // Here we must inject `values` to the ooui parser in order to evaluate arch+values and get the new form container
    ooui.parse(arch, {
      readOnly: readOnly || operationInProgress,
      values: convertToPlain2ManyValues(
        {
          ...values,
          ...getAdditionalValues(),
        },
        fields,
      ),
    });
    return ooui;
  };

  const parseForm = ({
    fields,
    arch,
    values,
    operationInProgress = false,
  }: {
    arch: string;
    fields: any;
    values: any;
    operationInProgress?: boolean;
  }) => {
    const ooui = getFormOoui({
      arch,
      fields,
      values,
      operationInProgress,
    });

    setFormOoui(ooui);

    if (ooui.string && ooui.string !== title) {
      setTitle?.(ooui.string);
    }

    if (formModalContext && ooui.string)
      formModalContext.setTitle?.(ooui.string);
  };

  const checkFieldsChanges = async ({
    elementHasLostFocus = false,
  }: {
    elementHasLostFocus?: boolean;
  }) => {
    if (formSubmitting.current) return;

    const touchedValues = getTouchedValues({
      source: lastAssignedValues.current,
      target: getCurrentValues(fields),
      fields,
    });

    const changedFields = Object.keys(touchedValues);

    if (changedFields.length !== 0) {
      // We check if there are any field of type text, email, url or char inside the changed values
      // in order to ignore the call, because it will fire when element lost focus
      if (
        checkFieldsType({
          changedFields,
          formOoui: formOoui!,
          types: [
            "text",
            "codeeditor",
            "email",
            "url",
            "char",
            "float",
            "float_time",
            "integer",
            "many2one",
          ],
        }) &&
        elementHasLostFocus !== true
      ) {
        /* empty */
      } else {
        const values = processValues(antForm.getFieldsValue(true), fields);
        lastAssignedValues.current = values;

        onFieldsChange?.(values);
        setFormHasChanges?.(true);

        evaluateChanges(changedFields);
      }
    }
  };

  const debouncedCheckFieldsChanges = debounce(checkFieldsChanges, 100);

  const evaluateChanges = async (changedFields: any) => {
    try {
      for (let i = 0; i < changedFields.length; i += 1) {
        const changedField = changedFields[i];
        await processFieldOnChange(changedField);
      }
    } catch (err) {
      showErrorDialog(err);
    }
  };

  const processFieldOnChange = async (fieldName: string) => {
    const onChangeFieldAction = formOoui?.onChangeFields[fieldName];

    if (!onChangeFieldAction) {
      parseForm({
        fields,
        arch: arch!,
        values: getCurrentValues(fields),
      });
      return;
    }

    const payload = getOnChangePayload({
      values: {
        ...getCurrentValues(fields),
        context: {
          ...parentContext,
          ...formOoui?.context,
        },
      },
      parentValues: getParentPlainValues?.(),
      onChangeFieldActionArgs: onChangeFieldAction.args,
    });

    const response = await ConnectionProvider.getHandler().executeOnChange({
      model,
      action: onChangeFieldAction.method,
      ids: getCurrentId()! ? [getCurrentId()!] : [],
      payload,
      fields,
    });

    if (response.value) {
      const processedValues = {
        ...getCurrentValues(fields),
        ...response.value,
      };

      const valuesWith2ManyValuesConverted = convertFrom2ManyRawValues({
        values: processedValues,
        fields,
      });

      parseForm({
        fields,
        arch: arch!,
        values: valuesWith2ManyValuesConverted,
      });

      assignNewValuesToForm({
        values: valuesWith2ManyValuesConverted,
        fields,
        reset: false,
      });
    }

    if (
      response.warning &&
      response.warning.title &&
      response.warning.message &&
      !warningIsShown.current
    ) {
      const { title, message } = response.warning;
      warningIsShown.current = true;
      showWarningDialog(title, message, () => {
        warningIsShown.current = false;
      });
    }

    if (response.domain && Object.keys(response.domain).length > 0) {
      const proccessedFields = mergeFieldsDomain({
        fieldsDomain: response.domain,
        fields,
      });

      parseForm({
        fields: proccessedFields,
        arch: arch!,
        values: getCurrentValues(proccessedFields),
      });
      setFields(proccessedFields);
    }
  };

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
        ...formOoui?.context,
        ...parentContext,
        ...context,
      },
    });

    if (
      typeof response === "object" &&
      response !== null &&
      Object.keys(response).length === 0 &&
      insideButtonModal
    ) {
      onSubmitSucceed?.(getCurrentId(), getValues(), getFormValues());
    } else if (
      response.type &&
      response.type === "ir.actions.act_window_close"
    ) {
      onSubmitSucceed?.(getCurrentId(), getValues(), getFormValues());
    } else if (response.type) {
      let responseContext = {};

      if (response.context) {
        responseContext = parseContext({
          context: response.context,
          fields,
          values: getValues(),
        });
      }

      await runAction({
        actionData: response,
        context: { ...context, ...responseContext },
      });
    } else {
      await fetchValues({ forceRefresh: true });
    }
  }

  async function runWorkflowButton({ action }: { action: string }) {
    const response = await ConnectionProvider.getHandler().executeWorkflow({
      model,
      action,
      payload: getCurrentId()!,
    });

    if (response.type && response.type === "ir.actions.act_window_close") {
      onSubmitSucceed?.(getCurrentId(), getValues(), getFormValues());
    } else {
      await fetchValues({ forceRefresh: true });
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
        context: parentContext,
      })
    )[0];

    await runAction({ actionData, context });
  }

  async function runAction({
    actionData,
    context,
  }: {
    actionData: any;
    context: any;
  }) {
    const { closeParent } =
      (await processAction?.({
        actionData,
        fields,
        values: getValues(),
        context: {
          ...parentContext,
          ...formOoui?.context,
          ...context,
        },
        onRefreshParentValues: async () => {
          mustFetchParentValues.current = true;
          await fetchValues({ forceRefresh: true });
        },
      })) || {};

    if (!rootForm && closeParent) {
      onSubmitSucceed?.(getCurrentId(), getValues(), getFormValues());
    }
  }

  function elementHasLostFocus() {
    checkFieldsChanges({ elementHasLostFocus: true });
  }

  function updateOperationInProgress(value: boolean) {
    parseForm({
      fields,
      arch: arch!,
      values: getCurrentValues(fields),
      operationInProgress: value,
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
      formErrorsDialog(t);
      return;
    }

    let mustBlockButtons = false;

    try {
      if (!readOnly && (formHasChanges() || getCurrentId() === undefined)) {
        mustBlockButtons = true;
        updateOperationInProgress(true);
        if (submitMode === "2many") {
          await submitApi({ callOnSubmitSucceed: false });
          x2manyPendingLink.current = true;
        } else {
          await submitForm({ callOnSubmitSucceed: false });
        }
      }

      const additionalContext = x2manyPendingLink.current
        ? getActiveIdsContext()
        : {};

      const updatedContext = { ...context, ...additionalContext };

      if (type === "object") {
        await runObjectButton({ action, context: updatedContext });
      } else if (type === "workflow") {
        await runWorkflowButton({ action });
      } else if (type === "action") {
        await runActionButton({ action, context: updatedContext });
      }
      mustBlockButtons && updateOperationInProgress(false);
    } catch (err) {
      mustBlockButtons && updateOperationInProgress(false);
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
          getValues={getValues}
          getPlainValues={getPlainValues}
          getFields={getFields}
          domain={actionDomain}
          activeId={id}
          activeModel={model}
          setFieldValue={setFieldValue}
          getFieldValue={getFieldValue}
          executeButtonAction={executeButtonAction}
          getContext={getContext}
          submitForm={submitForm}
          fetchValues={fetchValues}
          formHasChanges={formHasChanges}
          elementHasLostFocus={elementHasLostFocus}
          formView={formViewProps}
        >
          <AntForm
            form={antForm}
            onFieldsChange={() => {
              debouncedCheckFieldsChanges({ elementHasLostFocus: false });
            }}
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
              disabled={isSubmitting}
              onClick={async () => {
                await cancelUnsavedChanges();
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={isSubmitting || readOnly}
              loading={isSubmitting}
              icon={<CheckOutlined />}
              onClick={async () => {
                await submitForm();
              }}
              type="primary"
            >
              OK
            </Button>
          </Space>
        </Row>
      </>
    );
  };

  if (!visible) {
    return null;
  }

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setContainerWidth(contentRect.bounds?.width!);
      }}
    >
      {({ measureRef }) => (
        <div className="pb-2" ref={measureRef}>
          {error && <ErrorAlert className="mt-5 mb-10" error={error} />}
          {content()}
          {showFooter && footer()}
        </div>
      )}
    </Measure>
  );
}

export default forwardRef(Form);
