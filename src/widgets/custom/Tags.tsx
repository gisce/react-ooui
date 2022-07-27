import React, { useContext, useState } from "react";
import { Tags as TagsOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { One2manyItem, One2manyValue } from "../base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";
import { FormContext, FormContextType } from "@/context/FormContext";
import { Spin, Alert, Timeline as AntTimeline, Tag as AntTag } from "antd";
import { readObjectValues } from "@/helpers/one2manyHelper";
import { colorFromString } from "@/helpers/formHelper";
import ConnectionProvider from "@/ConnectionProvider";

type TagsProps = {
  ooui: TagsOoui;
};

type TagsInputProps = TagsProps & {
  value?: One2manyValue;
  onChange?: (value: One2manyValue) => void;
};

export const Tags = (props: TagsProps) => {
  const { ooui } = props;

  return (
    <Field type={"array"} {...props}>
      <TagsInput ooui={ooui}  />
    </Field>
  );
};

export const TagsInput = (props: TagsInputProps) => {
  const { value, ooui, onChange } = props;
  const { items = [] } = value || {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { relation, context, readOnly, field } = ooui;
  const itemsToShow = items.filter(
    (item) => item.values && item.operation !== "pendingRemove"
  );

  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

  useDeepCompareEffect(() => {
    if (items.some((item) => !item.values)) {
      fetchData();
    }
  }, [items]);

  const triggerChange = (changedValue: Array<One2manyItem>) => {
    onChange?.({
      items: changedValue,
    });
  };

  async function fetchData() {
    setIsLoading(true);
    setError(undefined);

    const fieldsDef = await ConnectionProvider.getHandler().getFields({
      model: relation,
      fields: [field],
      context: getContext(),
    });

    try {
      const itemsWithValues = await readObjectValues({
        treeFields: {},
        formFields: fieldsDef,
        model: relation,
        items,
        context: { ...getContext?.(), ...context },
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

  const removeItem = (item: One2manyItem) => {
    const newItems: One2manyItem[] = items.map(i => {
      if (i.id === item.id) {
        return {
          ...item,
          operation: "pendingRemove",
        }
      } else {
        return i
      }
    });
    triggerChange(newItems);
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        
        {itemsToShow.map((item, index) => {
          const value = item.values?.[field];
          let formattedValue = value;
          if (ooui.selectionValues.size) {
            formattedValue = ooui.selectionValues.get(value);
          } else if (Array.isArray(value)) {
            formattedValue = value[1];
          }
          if (!value) {
            return null;
          }
          return (
            <AntTag key={index} color={colorFromString(formattedValue)} closable={!readOnly} style={{margin: '5px'}} onClose={e => {
              e.preventDefault();
              removeItem(item);

            }}>{formattedValue}</AntTag>
          );
        })}
      </div>
     
    </>
  );
};
