import React, { useContext, useState } from "react";
import { Timeline as TimelineOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { One2manyItem, One2manyValue } from "../base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";
import { Views, ViewType } from "@/types";
import { FormContext, FormContextType } from "@/context/FormContext";
import ConnectionProvider from "@/ConnectionProvider";
import { Spin, Alert, Timeline as AntTimeline } from "antd";
import { readObjectValues } from "@/helpers/one2manyHelper";
import { FormModal } from "../modals/FormModal";

type TimelineProps = {
  ooui: TimelineOoui;
};

type TimelineInputProps = TimelineProps & {
  value?: One2manyValue;
  onChange?: (value: One2manyValue) => void;
  views: Views;
};

export const Timeline = (props: TimelineProps) => {
  const { ooui } = props;
  const { relation, context, views: oouiViews } = ooui;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [views, setViews] = useState<Views>(new Map<string, any>());
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

  useDeepCompareEffect(() => {
    fetchData();
  }, [ooui]);

  const getViewData = async (type: ViewType) => {
    if (oouiViews && oouiViews[type]) {
      return oouiViews[type];
    }
    return await ConnectionProvider.getHandler().getView({
      model: relation,
      type,
      context: { ...getContext?.(), ...context },
    });
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const formView = await getViewData("form");
      const treeView = await getViewData("tree");
      views.set("form", formView);
      views.set("tree", treeView);
      setViews(views);
    } catch (err) {
      setError(err as any);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  return (
    <Field type={"array"} {...props}>
      <TimelineInput ooui={ooui} views={views} />
    </Field>
  );
};

export const TimelineInput = (props: TimelineInputProps) => {
  const { value, views, ooui, onChange } = props;
  const { items = [] } = value || {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<One2manyItem>();
  const { relation, context, readOnly, summaryField, titleField } = ooui;
  const itemsToShow = items.filter((item) => item.values);

  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

  useDeepCompareEffect(() => {
    fetchData();
  }, [items]);

  const triggerChange = (changedValue: One2manyItem[]) => {
    onChange?.({
      items: changedValue,
    });
  };

  async function fetchData() {
    setIsLoading(true);
    setError(undefined);

    try {
      const [itemsWithValues] = await readObjectValues({
        treeView: {
          fields: views.get("tree").fields,
          arch: views.get("tree").arch,
        },
        formView: {
          fields: views.get("form").fields,
        },
        model: relation,
        items,
        context: { ...getContext?.(), ...context },
        currentView: "form",
      });

      triggerChange(itemsWithValues);
    } catch (err) {
      setError(err as any);
    } finally {
      setIsLoading(false);
    }
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <AntTimeline style={{ padding: "1rem" }}>
        {itemsToShow.map((item, index) => {
          return (
            <AntTimeline.Item key={index}>
              <div
                style={{ display: "inline-block", cursor: "pointer" }}
                onClick={() => {
                  setModalItem(
                    itemsToShow.find((searchItem) => item.id === searchItem.id),
                  );
                  setShowFormModal(true);
                }}
              >
                <strong>{item.values?.[titleField]}</strong>
                <br />
                {item.values?.[summaryField] && (
                  <span>{item.values[summaryField]}</span>
                )}
              </div>
            </AntTimeline.Item>
          );
        })}
      </AntTimeline>
      <FormModal
        formView={views.get("form")}
        model={relation}
        id={modalItem?.id}
        values={modalItem?.values}
        defaultValues={modalItem?.defaultValues}
        visible={showFormModal}
        onSubmitSucceed={() => {
          setShowFormModal(false);
        }}
        parentContext={{ ...getContext?.(), ...context }}
        onCancel={() => {
          setShowFormModal(false);
        }}
        readOnly={readOnly}
        postSaveAction={fetchData}
      />
    </>
  );
};
