import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
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
} from "antd";
import useDimensions from "react-cool-dimensions";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import Container from "@/widgets/containers/Container";
import { processValues, getTouchedValues } from "@/helpers/formHelper";
import { FormView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import { getErpValues, formatX2ManyValues } from "@/helpers/erpReadWriteHelper";

export type FormProps = {
  model: string;
  id?: number;
  onSubmitSucceed?: (updatedObject: any) => void;
  onSubmitError?: (error: any) => void;
  onCancel?: () => void;
  showFooter?: boolean;
  getDataFromAction?: boolean;
  onFieldsChange?: () => void;
  readOnly?: boolean;
  mustClearAfterSave?: boolean;
  submitMode?: "api" | "values";
  values?: any;
  data?: FormViewAndOoui;
};

const WIDTH_BREAKPOINT = 1000;

export type FormViewAndOoui = {
  ooui: FormOoui;
  view: FormView;
};

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
    values,
    data,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormViewAndOoui>();
  const [antForm] = AntForm.useForm();

  const { width, ref: containerRef } = useDimensions<HTMLDivElement>({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
    updateOnBreakpointChange: true,
  });
  const responsiveBehaviour = width < WIDTH_BREAKPOINT;

  useImperativeHandle(ref, () => ({
    submitForm,
  }));

  const showConfirm = () => {
    showUnsavedChangesDialog({
      onOk: () => {
        onCancel?.();
      },
    });
  };

  const cancel = () => {
    if (formHasChanges()) {
      showConfirm();
      return;
    }

    onCancel?.();
  };

  const getFormView = async (): Promise<FormView> => {
    if (getDataFromAction) {
      const action = await ConnectionProvider.getHandler().getAction(model);
      const viewsForAction = await ConnectionProvider.getHandler().getViewsForAction(
        action
      );
      return viewsForAction.views.get("form");
    }

    return (await ConnectionProvider.getHandler().getView(
      model,
      "form"
    )) as FormView;
  };

  const assignNewValuesToForm = (newValues: any, view: FormView) => {
    const formIsAlreadyFilledUp =
      Object.keys(antForm.getFieldsValue(true)).length > 0; // We check if it's a reused form and we already have values filled

    // If the newvalues only contains an empty object with an id
    // This is a new blank item, so we must clear the form if we already have the form filled up
    if (
      formIsAlreadyFilledUp &&
      Object.keys(newValues).length === 1 &&
      newValues.id
    ) {
      antForm.resetFields();
      return;
    }
    const valuesProcessed = processValues(newValues, view.fields);

    antForm.setFieldsValue(valuesProcessed);
  };

  const fetchAndParseForm = async () => {
    const view = await getFormView();

    const ooui = new FormOoui(view.fields);
    ooui.parse(view.arch, readOnly);
    setForm({ ooui, view });
    return view;
  };

  const fetchValuesFromApi = async (view: FormView) => {
    let _values = {};
    if (id) {
      const erpValues = (
        await ConnectionProvider.getHandler().readObjects({
          arch: view!.arch,
          model,
          ids: [id],
        })
      )[0];

      _values = formatX2ManyValues({
        values: erpValues,
        fields: view.fields,
      });
    } else {
      _values = await ConnectionProvider.getHandler().execute({
        model,
        action: "default_get",
        payload: Object.keys(view.fields),
      });
    }
    assignNewValuesToForm(_values, view);
  };

  const fetchValuesFromProps = (view: FormView) => {
    const _values = formatX2ManyValues({
      values,
      fields: view.fields,
    });

    assignNewValuesToForm(_values, view);
  };

  const fetchData = async () => {
    setLoading(true);

    let view: FormView;

    try {
      if (data) {
        setForm(data);
        view = data.view;
      } else {
        view = await fetchAndParseForm();
      }

      if (values) {
        fetchValuesFromProps(view!);
      } else {
        await fetchValuesFromApi(view!);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, model, values, data]);

  const formHasChanges = () => {
    return (
      Object.keys(getTouchedValues(antForm, form?.view.fields)).length !== 0
    );
  };

  const submitApi = async () => {
    const touchedValues = getTouchedValues(antForm, form?.view.fields);

    const erpTouchedValues = getErpValues({
      fields: form?.view.fields,
      touchedValues,
    });

    if (Object.keys(erpTouchedValues).length === 0) {
      return;
    }

    let objectId = id;

    if (id) {
      await ConnectionProvider.getHandler().update({
        model,
        id,
        values: erpTouchedValues,
      });
    } else {
      const newId = await ConnectionProvider.getHandler().create({
        model,
        values: erpTouchedValues,
      });
      objectId = newId;
    }

    // TODO: This maybe will be unnecessary sometimes, we might do it conditionally with a new input prop mustRefreshAfterSave?
    await fetchValuesFromApi(form!.view);

    const value = await ConnectionProvider.getHandler().execute({
      action: "name_get",
      payload: [objectId],
      model,
    });

    onSubmitSucceed?.({
      id: value[0],
    });
  };

  const submitValues = async () => {
    onSubmitSucceed?.({
      id,
      touchedValues: getTouchedValues(antForm, form?.view.fields),
    });
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      if (submitMode === "api") {
        await submitApi();
      } else {
        await submitValues();
      }

      if (mustClearAfterSave) antForm.resetFields();
    } catch (err) {
      onSubmitError?.(err);
      setError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = () => {
    if (!form) {
      return null;
    }

    return (
      <AntForm form={antForm} onFieldsChange={onFieldsChange} component={false}>
        {form && (
          <Container
            container={form.ooui.container}
            responsiveBehaviour={responsiveBehaviour}
          />
        )}
      </AntForm>
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
              onClick={cancel}
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
    </div>
  );
}

export default forwardRef(Form);
