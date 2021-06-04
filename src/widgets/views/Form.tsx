import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
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
import debounce from "lodash/debounce";

import Container from "@/widgets/containers/Container";
import { processValues, getTouchedValues } from "@/helpers/formHelper";
import { FormView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import FormProvider from "@/context/FormContext";

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
  } = props;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [formOoui, setFormOoui] = useState<FormOoui>();
  const [antForm] = AntForm.useForm();
  const [arch, setArch] = useState<string>();
  const [fields, setFields] = useState<any>();

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

    let view;
    let values;

    try {
      if (archProps && fieldsProps) {
        view = { arch: archProps, fields: fieldsProps };
      } else {
        view = await getFormView();
      }

      const { fields, arch } = view;
      setFields(fields);
      setArch(arch);

      if (valuesProps) {
        values = valuesProps;
      } else {
        values = await fetchValuesFromApi({ fields, arch });
      }

      assignNewValuesToForm({ values, fields });
      parseForm({ fields, arch, values });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
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
        action
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
    const mergedValues = { ...newValues, ...currentValues };
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
      values = await ConnectionProvider.getHandler().execute({
        model,
        action: "default_get",
        payload: Object.keys(fields),
      });
    }
    return values;
  };

  const formHasChanges = () => {
    return Object.keys(getTouchedValues(antForm, fields)).length !== 0;
  };

  const submitApi = async () => {
    const touchedValues = getTouchedValues(antForm, fields);

    let objectId = id;

    if (id) {
      await ConnectionProvider.getHandler().update({
        model,
        id,
        values: touchedValues,
        fields,
      });
    } else {
      const newId = await ConnectionProvider.getHandler().create({
        model,
        values: touchedValues,
        fields,
      });
      objectId = newId;
    }

    if (postSaveAction) {
      await postSaveAction(objectId);
    }

    onSubmitSucceed?.(objectId);
  };

  const submitValues = async () => {
    onSubmitSucceed?.({
      id,
      touchedValues: getTouchedValues(antForm, fields),
    });
  };

  const submitForm = async () => {
    if (!formHasChanges()) {
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
    ooui.parse(arch, readOnly);
    setFormOoui(ooui);
  };

  const debouncedParseForm = debounce(parseForm, 300);

  const checkFieldsChanges = () => {
    if (formHasChanges()) {
      const values = antForm.getFieldsValue(true);
      onFieldsChange?.(values);
      debouncedParseForm({ arch: arch!, fields, values });
    }
  };

  const content = () => {
    if (!formOoui) {
      return null;
    }

    return (
      <FormProvider parentId={id} parentModel={model}>
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
    </div>
  );
}

export default forwardRef(Form);
