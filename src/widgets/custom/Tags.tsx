import React, { useContext, useState } from "react";
import { Tags as TagsOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { One2manyItem, One2manyValue } from "../base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";
import { FormContext, FormContextType } from "@/context/FormContext";
import { Alert, Select } from "antd";
import { colorFromString, transformPlainMany2Ones } from "@/helpers/formHelper";
import ConnectionProvider from "@/ConnectionProvider";
import { CustomTag } from "@/widgets/custom/Tag";

type TagsProps = WidgetProps & {
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
      <TagsInput ooui={ooui} />
    </Field>
  );
};

export const TagsInput = (props: TagsInputProps) => {
  const { value, ooui, onChange } = props;
  const { items = [] } = value || {};
  const itemsToShow = items
    .filter((item) => item.operation !== "pendingRemove")
    .map((item) => item.id) as number[];

  const [options, setOptions] = useState<any[]>([]);
  const [error, setError] = useState<string>();
  const [isLoadingOptions, setIsLoadingOptions] = useState<boolean>(false);
  const { relation, context, readOnly, field } = ooui;

  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

  useDeepCompareEffect(() => {
    fetchOptions();
  }, [items]);

  const triggerChange = (changedValue: One2manyItem[]) => {
    onChange?.({
      items: changedValue,
    });
  };

  async function fetchOptions() {
    setIsLoadingOptions(true);
    let params: any[] = [];
    try {
      if (readOnly) {
        params = [["id", "in", itemsToShow]];
      }
      if (ooui.domain) {
        const evaluatedDomain =
          await ConnectionProvider.getHandler().evalDomain({
            domain: ooui.domain,
            values: transformPlainMany2Ones({
              fields: formContext?.getFields(),
              values: formContext.getPlainValues(),
            }),
            fields: formContext?.getFields(),
            context: formContext.getContext(),
          });
        params = [...params, ...evaluatedDomain];
      }

      const optionsRead = await ConnectionProvider.getHandler().search({
        model: relation,
        params,
        fieldsToRetrieve: [field],
        context: { ...getContext?.(), ...context },
      });
      const options = optionsRead.map((item: any) => {
        const value = item[field];
        let formattedValue = value;
        if (Array.isArray(value)) {
          formattedValue = value[1];
        }
        return { label: formattedValue, value: item.id };
      });
      setOptions(options);
    } catch (err) {
      setError(err as any);
    } finally {
      setIsLoadingOptions(false);
    }
  }

  const onChangeSelected = (ids: number[]) => {
    const newItems: One2manyItem[] = items.map((item) => {
      if (ids.includes(item.id as number)) {
        if (item.operation === "pendingRemove") {
          return {
            ...item,
            operation: "pendingLink",
          };
        } else {
          return item;
        }
      } else {
        return { id: item.id, operation: "pendingRemove" };
      }
    });
    const currentIds = newItems.map((item) => item.id);
    ids
      .filter((id) => !currentIds.includes(id))
      .forEach((id) => {
        newItems.push({ id, operation: "pendingLink" });
      });
    triggerChange(newItems);
  };

  const tagRender = (props: any) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    const color = colorFromString(label);
    return (
      <CustomTag
        color={color}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        closeIcon={<span style={{ color }}>X</span>}
      >
        {label}
      </CustomTag>
    );
  };

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  return (
    <>
      <div className="flex flex-row">
        <Select
          mode="multiple"
          value={options.length ? itemsToShow : []}
          tagRender={tagRender}
          bordered={!readOnly}
          disabled={readOnly}
          options={options}
          onChange={onChangeSelected}
          loading={isLoadingOptions}
          filterOption={(value, element) =>
            element.label.toLowerCase().includes(value.toString())
          }
        ></Select>
      </div>
    </>
  );
};
