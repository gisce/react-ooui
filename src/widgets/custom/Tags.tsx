import React, { useContext, useState } from "react";
import { Tags as TagsOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { One2manyItem, One2manyValue } from "../base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";
import { FormContext, FormContextType } from "@/context/FormContext";
import ConnectionProvider from "@/ConnectionProvider";
import { Spin, Alert, Timeline as AntTimeline, Tag as AntTag } from "antd";
import { readObjectValues } from "@/helpers/one2manyHelper";

type TagsProps = {
  ooui: TagsOoui;
};

type TagsInputProps = TagsProps & {
  value?: One2manyValue;
  onChange?: (value: One2manyValue) => void;
};

export const Tags = (props: TagsProps) => {
  const { ooui } = props;
  const { relation, context } = ooui;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

  useDeepCompareEffect(() => {
    fetchData();
  }, [ooui]);


  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
     console.log('Fetching....')
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
    fetchData();
  }, [items]);

  const triggerChange = (changedValue: Array<One2manyItem>) => {
    onChange?.({
      items: changedValue,
    });
  };

  async function fetchData() {
    setIsLoading(true);
    setError(undefined);

    try {
      const itemsWithValues = await readObjectValues({
        treeFields: [ooui.field],
        formFields: [],
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

  const color = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (let i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  return (
    <>
      <div style={{ padding: "1rem" }}>
        
        {itemsToShow.map((item, index) => {
          const value = item.values?.[field];
          return (
            <AntTag key={index} color={color(value)}>{value}</AntTag>
          );
        })}
      </div>
     
    </>
  );
};
