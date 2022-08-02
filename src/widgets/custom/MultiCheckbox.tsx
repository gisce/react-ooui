import React, { useContext, useState } from "react";
import { MultiCheckbox as MultiCheckboxOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { One2manyItem, One2manyValue } from "../base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";
import { FormContext, FormContextType } from "@/context/FormContext";
import { Alert, Checkbox, Spin, Col, Row, Button, Space  } from "antd";
import ConnectionProvider from "@/ConnectionProvider";

type MultiCheckboxProps = {
  ooui: MultiCheckboxOoui;
};

type MultiCheckboxInputProps = MultiCheckboxProps & {
  value?: One2manyValue;
  onChange?: (value: One2manyValue) => void;
};

export const MultiCheckbox = (props: MultiCheckboxProps) => {
  const { ooui } = props;

  return (
    <Field type={"array"} {...props}>
      <MultiCheckboxInput ooui={ooui}  />
    </Field>
  );
};

export const MultiCheckboxInput = (props: MultiCheckboxInputProps) => {
  const { value, ooui, onChange } = props;
  const { items = [] } = value || {};
  const itemsToShow = items.filter(
    (item) => item.operation !== "pendingRemove"
  ).map((item) => item.id) as number[];

  const [options, setOptions] = useState<any[]>([]);
  const [error, setError] = useState<string>();
  const [isLoadingOptions, setIsLoadingOptions] = useState<boolean>(false);
  const { relation, context, readOnly, field, columns } = ooui;


  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

  useDeepCompareEffect(() => {
    fetchOptions();
  }, [items]);

  const triggerChange = (changedValue: Array<One2manyItem>) => {
    onChange?.({
      items: changedValue,
    });
  };

  async function fetchOptions() {
    setIsLoadingOptions(true);
    let params: any = [];
    if (ooui.domain) {
      const evaluatedDomain = await ConnectionProvider.getHandler().evalDomain(
        {
          domain: ooui.domain,
          values: formContext.getPlainValues(),
          context: formContext.getContext(),
        }
      );
      params = [...params, ...evaluatedDomain];
    }
    try {
      const optionsRead = await ConnectionProvider.getHandler().search({
        model: relation,
        params: params,
        fields: [field],
        context: { ...getContext?.(), ...context },
      });
      const options = optionsRead.map((item:any) => {
        const value = item[field];
        let formattedValue = value;
        if (Array.isArray(value)) {
          formattedValue = value[1];
        }
        return {label: formattedValue, value: item.id}
      });
      setOptions(options);
      
    } catch (err) {
      setError(err as any)
    } finally {
      setIsLoadingOptions(false);
    }
    if (error) {
      return <Alert className="mt-10" message={error} type="error" banner />;
    }


  };

  const checkAll = () => {
    onChangeSelected(options.map(option => option.value));
  }

  const uncheckAll = () => {
    onChangeSelected([]);
  }

  const onChangeSelected = (ids: any[]) => {
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
    triggerChange(newItems);
  };

  if (isLoadingOptions && options.length === 0) {
    return <Spin />
  }
  
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Checkbox.Group value={options.length ? itemsToShow : []} disabled={readOnly} onChange={onChangeSelected} style={{width: '100%'}}>
          <Row>
          {options.map((option) => (
            <Col span={Math.floor(24 / columns)}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </Col>
          ))}
          </Row>
        </Checkbox.Group>
        {!readOnly &&
          <Space>
            <Button onClick={checkAll} disabled={itemsToShow.length == options.length}>Check all</Button>
            <Button onClick={uncheckAll} disabled={itemsToShow.length === 0}>Uncheck all</Button>
          </Space>
        }
      </div>
    </>
  );
  
};
