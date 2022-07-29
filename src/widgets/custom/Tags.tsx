import React, { useContext, useState, useEffect } from "react";
import { Tags as TagsOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { One2manyItem, One2manyValue } from "../base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";
import { FormContext, FormContextType } from "@/context/FormContext";
import { Spin, Alert, Tag as AntTag, Select } from "antd";
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
  const itemsToShow = items.filter(
    (item) => item.operation !== "pendingRemove"
  ).map((item) => item.id) as number[];
  console.log("items", items);
  console.log("itemsToShow", itemsToShow);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<any[]>([]);
  const [error, setError] = useState<string>();
  const [isLoadingOptions, setIsLoadingOptions] = useState<boolean>(false);
  const { relation, context, readOnly, field } = ooui;


  const formContext = useContext(FormContext) as FormContextType;
  console.log("formContext", formContext);
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

  async function fetchOptions(params: any[] = []) {
    setIsLoadingOptions(true);
    //params: formContext?.domain || [],
    try {
      const optionsRead = await ConnectionProvider.getHandler().search({
        model: relation,
        params: params,
        fields: [field],
        context: { ...getContext?.(), ...context },
      });
      console.log("optionsRead", optionsRead);
      const options = optionsRead.map((item:any) => {
        const value = item[field];
        let formattedValue = value;
        if (Array.isArray(value)) {
          formattedValue = value[1];
        }
        return {label: formattedValue, value: item.id}
      });
      console.log("options", options);
      setOptions(options);
      
    } catch (err) {
      setError(err as any)
    } finally {
      setIsLoadingOptions(false);
    }

  }

  async function fetchData() {
    setIsLoading(true);
    setError(undefined);
    console.log("fetch data");
    try {
      await fetchOptions([['id', 'in', itemsToShow]]);
    } catch (err) {
      setError(err as any);
    } finally {
      setIsLoading(false);
    }
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  const onChangeSelected = (ids: number[]) => {
    // items són els que actualment hi ha
    const newItems: One2manyItem[] = items.map((item) => {
      if (ids.includes(item.id as number)) {
        if (item.operation == "pendingRemove") {
          return {
            ...item,
            operation: "original"
          }
        } else {
          return item
        }
      } else {
        return {id: item.id, operation: 'pendingRemove'}
      }
    })
    const currentIds = newItems.map(item => item.id)
    ids.filter(id => !currentIds.includes(id)).map((id) => {
      newItems.push({id, operation: 'pendingLink'});
    });
    console.log("onChangeSelected newItems", newItems);
    triggerChange(newItems);
  };

  const tagRender = (props: any) => {
    console.log(props);
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    console.log(props);
    return (
      <AntTag
        color={colorFromString(label)}
        onMouseDown={onPreventMouseDown}
        style={{margin: '5px'}}
        closable={closable}
        onClose={onClose}>
          {label}
      </AntTag>
    );
  }

  const onDropdownVisibleChange = (open: boolean) => {
    if (open && !isLoadingOptions) {
      fetchOptions();
    } else {
      console.log('Already loading options');
    }
  }
  
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Select
          mode="multiple"
          value={itemsToShow}
          tagRender={tagRender}
          bordered={!readOnly}
          disabled={readOnly}
          options={options}
          onDeselect={(e) => {console.log("Deselect", e)}}
          onChange={(ids) => {console.log("Change", ids); onChangeSelected(ids)}}
          loading={isLoadingOptions}
          onDropdownVisibleChange={onDropdownVisibleChange}
          >
        </Select>
      </div>
    </>
  )
  
};
