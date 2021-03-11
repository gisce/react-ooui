import React, { useState, useEffect } from "react";
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
import Container from "../containers/Container";
import useDimensions from "react-cool-dimensions";
import {
  CheckOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { FormView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
const { confirm } = Modal;

type Props = {
  model: string;
  id?: number;
  onSubmitSucceed?: (updatedObject: any) => void;
  onCancel?: () => void;
  showFooter?: boolean;
};

const WIDTH_BREAKPOINT = 1000;

const filteredValues = (values: any, fields: any) => {
  if (!fields) {
    return values;
  }
  const filteredValues: any = {};
  Object.keys(values).forEach((key) => {
    if (
      values[key] !== false ||
      (fields[key] && fields[key].type === "boolean")
    ) {
      filteredValues[key] = values[key];
    }
  });
  return filteredValues;
};

const processInitialValues = (values: any, fields: any) => {
  const filterBooleans = filteredValues(values, fields);
  return filterBooleans;
};

function Form(props: Props): React.ReactElement {
  const { model, id, onCancel, onSubmitSucceed, showFooter = false } = props;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [formView, setFormView] = useState<FormView>();
  const [values, setValues] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormOoui>();
  const [antForm] = AntForm.useForm();
  const [mustReload, setMustReload] = useState<boolean>(false);

  const { width, ref } = useDimensions<HTMLDivElement>({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
    updateOnBreakpointChange: true,
  });
  const responsiveBehaviour = width < WIDTH_BREAKPOINT;

  const getTouchedValues = () => {
    const values = antForm.getFieldsValue(true);
    const touchedValues: any = {};
    Object.keys(values).map((key) => {
      if (antForm.isFieldTouched(key)) {
        touchedValues[key] = values[key];
      }
    });
    return touchedValues;
  };

  const closeModal = () => {
    antForm.resetFields();
    if (onCancel) onCancel();
  };

  const showConfirm = () => {
    confirm({
      title: "There are unsaved changes",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content: "Do you really want to close this window without saving?",
      okText: "Close without saving",
      onOk() {
        closeModal();
      },
    });
  };

  const cancel = () => {
    if (Object.keys(getTouchedValues()).length > 0) {
      showConfirm();
      return;
    }

    closeModal();
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const _formView = await ConnectionProvider.getHandler().getView(
        model,
        "form"
      );
      setFormView(_formView as FormView);
      antForm.resetFields();
      const newForm = new FormOoui(_formView.fields);
      newForm.parse(_formView.arch);
      setForm(newForm);

      let _values = {};
      if (id) {
        _values = await ConnectionProvider.getHandler().readObject({
          arch: _formView!.arch,
          model,
          id,
        });
        setValues(_values);
      } else {
        _values = await ConnectionProvider.getHandler().execute({
          model,
          action: "default_get",
          payload: Object.keys(_formView.fields),
        });
        setValues(_values);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // We add onSubmitSucceed dependency to force the component reload when opening the modal two times
  }, [id, model, onSubmitSucceed]);

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const touchedValues = getTouchedValues();

      let objectId = id;

      if (Object.keys(touchedValues).length !== 0) {
        if (id) {
          await ConnectionProvider.getHandler().update({
            model,
            id,
            values: touchedValues,
          });
        } else {
          const newId = await ConnectionProvider.getHandler().create({
            model,
            values: touchedValues,
          });
          objectId = newId;
        }
      }

      const value = await ConnectionProvider.getHandler().execute({
        action: "name_get",
        payload: [objectId],
        model,
      });
      if (onSubmitSucceed) onSubmitSucceed(value[0]);
    } catch (err) {
      setError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = () => {
    if (!formView) {
      return null;
    }

    return (
      <AntForm
        form={antForm}
        initialValues={processInitialValues(values, formView!.fields)}
      >
        {form && (
          <Container
            container={form!.container}
            formWrapper
            responsiveBehaviour={responsiveBehaviour}
          />
        )}
      </AntForm>
    );
  };

  const wrapper = () => {
    return (
      <>
        {error && (
          <Alert className="mt-10" message={error} type="error" banner />
        )}
        {loading ? <Spin /> : content()}
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
              onClick={cancel}
            >
              Cancel
            </Button>
            <Button
              disabled={isSubmitting || loading}
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
    <div ref={ref}>
      {wrapper()}
      {showFooter && footer()}
    </div>
  );
}

export default Form;
