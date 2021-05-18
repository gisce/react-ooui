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
import getErpValues from "@/helpers/erpWriteHelper";

type Props = {
  model: string;
  id?: number;
  onSubmitSucceed?: (updatedObject: any) => void;
  onSubmitError?: (error: any) => void;
  onCancel?: () => void;
  showFooter?: boolean;
  getDataFromAction?: boolean;
  onFieldsChange?: () => void;
  readOnly?: boolean;
};

const WIDTH_BREAKPOINT = 1000;

type FormViewAndOoui = {
  ooui: FormOoui;
  view: FormView;
};

function Form(props: Props, ref: any): React.ReactElement {
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
  } = props;

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormViewAndOoui>();
  const [antForm] = AntForm.useForm();
  const [originalValues, setOriginalValues] = useState<any>();

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

  const fetchData = async () => {
    setLoading(true);

    try {
      const view = await getFormView();

      const ooui = new FormOoui(view.fields);
      ooui.parse(view.arch, readOnly);
      setForm({ ooui, view });

      let _values = {};
      if (id) {
        _values = (
          await ConnectionProvider.getHandler().readObjects({
            arch: view!.arch,
            model,
            ids: [id],
          })
        )[0];
      } else {
        _values = await ConnectionProvider.getHandler().execute({
          model,
          action: "default_get",
          payload: Object.keys(view.fields),
        });
      }
      setOriginalValues({ ..._values });
      const valuesProcessed = processValues(_values, view.fields);

      const mustClearFieldsFirst =
        Object.keys(antForm.getFieldsValue(true)).length > 0; // We check if it's a reused form and we already have values filled

      if (mustClearFieldsFirst) {
        antForm.resetFields();
      }

      antForm.setFieldsValue(valuesProcessed);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, model]);

  const formHasChanges = () => {
    return Object.keys(getTouchedValues(antForm)).length !== 0;
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const touchedValues = getTouchedValues(antForm);
      const erpTouchedValues = getErpValues({
        values: originalValues,
        fields: form?.view.fields,
        touchedValues,
      });

      let objectId = id;

      if (Object.keys(touchedValues).length !== 0) {
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
      }

      const value = await ConnectionProvider.getHandler().execute({
        action: "name_get",
        payload: [objectId],
        model,
      });

      onSubmitSucceed?.(value[0]);
      antForm.resetFields();
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
      <AntForm form={antForm} onFieldsChange={onFieldsChange}>
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
