import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Alert,
  Spin,
  Divider,
  Row,
  Space,
  Form as AntForm,
} from "antd";
import ConnectionProvider from "@/ConnectionProvider";
import { FormView } from "@/types/index";
import Form from "@/widgets/views/Form";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  id?: number;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
};

export const DetailModal = (props: SearchSelectionProps) => {
  const { visible, onCloseModal, onSelectValue, id, model } = props;
  const [formView, setFormView] = useState<FormView>();
  const [values, setValues] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [antForm] = AntForm.useForm();
  const [newObject, setNewObject] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const _formView = await ConnectionProvider.getHandler().getView(
        model,
        "form"
      );
      setFormView(_formView as FormView);
      let _values = {};
      if (id) {
        _values = await ConnectionProvider.getHandler().readObject({
          arch: formView!.arch,
          model,
          id,
        });
        setValues(_values);
        setNewObject(false);
      } else {
        // _values = getDefaultValues();
        setValues(_values);
        setNewObject(false);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const submitForm = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onSelectValue([1, "Updated value"]);
    setIsSubmitting(false);
  };

  const content = () => {
    if (!formView) {
      return null;
    }

    return (
      <>
        <Form
          initialValues={values}
          arch={formView.arch}
          fields={formView.fields}
          antForm={antForm}
        />
        <Divider />
        <Row justify="end">
          <Space>
            <Button
              icon={<CloseOutlined />}
              disabled={isSubmitting}
              onClick={onCloseModal}
            >
              Cancel
            </Button>
            <Button
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
    <Modal
      title="Detail"
      centered
      width={1000}
      visible={visible}
      closable={!isSubmitting}
      onCancel={onCloseModal}
      footer={null}
    >
      {error && <Alert className="mt-10" message={error} type="error" banner />}
      {loading ? <Spin /> : content()}
    </Modal>
  );
};
