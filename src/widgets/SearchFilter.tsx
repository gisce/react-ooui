import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "antd";
import { DownOutlined, UpOutlined, SearchOutlined, ClearOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../tailwind.generated.css";
import { Char } from "./Char";
import { Selection } from "./Selection";
import { Float } from "./Float";
import { RangePicker } from "./RangePicker";

import {
  SearchFilter as SearchFilterOoui,
  Container,
  Field,
  Char as CharOoui,
  Text as TextOoui,
  Selection as SelectionOoui,
  Many2one,
  One2many,
  Float as FloatOoui,
  Boolean as BooleanOoui,
  Date as DateOoui,
} from "ooui";

type SearchFields = {
  primary: string[];
  secondary: string[];
};

type Props = {
  fields: any;
  searchFields: SearchFields;
  onClear: () => void;
  onSubmit: (values: any) => void;
  isSearching: boolean;
};

function SearchFilter(props: Props): React.ReactElement {
  const { fields, searchFields, onClear, onSubmit, isSearching } = props;

  const [simpleSearchFields, setSimpleSearchFields] = useState<Container>();
  const [advancedSearchFields, setAdvancedSearchFields] = useState<Container>();
  const [advancedFilter, setAdvancedFilter] = useState(false);
  const [form] = Form.useForm();

  const getRowsAndCols = () => {
    if (!advancedSearchFields) {
      return;
    }

    const fields = advancedFilter ? advancedSearchFields : simpleSearchFields;
    const rows = fields?.rows;

    return rows?.map((row, i) => {
      return (
        <Row key={i}>
          {row.map((item, j) => {
            const widget = getWidgetForItem(item as Field);
            return (
              <Col xs={24} className="p-2" xl={6} key={j}>
                {widget}
              </Col>
            );
          })}
        </Row>
      );
    });
  };

  const getWidgetForItem = (field: Field) => {
    const widgetType = field.constructor.name;

    switch (widgetType) {
      case "Text":
      case "Many2one":
      case "Char": {
        const char = field as CharOoui;
        return <Char id={char._id} label={char.label} />;
      }
      case "Boolean": {
        const selection = field as BooleanOoui;
        return (
          <Selection
            id={selection._id}
            label={selection.label}
            values={[
              { id: "true", name: "Yes" },
              { id: "false", name: "No" },
            ]}
          />
        );
      }
      case "Selection": {
        const selection = field as SelectionOoui;
        return (
          <Selection
            id={selection._id}
            label={selection.label}
            values={Array.from(selection.selectionValues).map(
              ([name, value]) => {
                return { id: name, name: value };
              }
            )}
          />
        );
      }
      case "Float": {
        const selection = field as FloatOoui;
        return (
          <Row align={"bottom"}>
            <Col>
              <Float
                id={selection._id + "_from"}
                label={selection.label}
                defaultValue={0.0}
              />
            </Col>
            <Col className="pb-1">
              <span className="pl-2 pr-2 h-full"> - </span>
            </Col>
            <Col>
              <Float id={selection._id + "_to"} label={""} defaultValue={0.0} />
            </Col>
          </Row>
        );
      }
      case "Date": {
        const date = field as DateOoui;
        return <RangePicker id={date._id} label={date.label} />;
      }
      default: {
        const char = field as CharOoui;
        return <Char id={char._id} label={char.label || char._id} />;
      }
    }
  };

  useEffect(() => {
    const sfo = new SearchFilterOoui(searchFields, fields);
    sfo.parse();
    setSimpleSearchFields(sfo._simpleSearchContainer);
    setAdvancedSearchFields(sfo._advancedSearchContainer);
  }, [fields, searchFields]);

  const rows = getRowsAndCols();

  const groupRangeValues = (values: any) => {
    const newValues: any = {};

    Object.keys(values).forEach((key) => {
      let baseKey;
      if (key.indexOf("_from") !== -1) {
        baseKey = key.replace("_from", "");
      } else if (key.indexOf("_to") !== -1) {
        baseKey = key.replace("_to", "");
      } else {
        newValues[key] = values[key];
        return;
      }

      if (!newValues[baseKey]) {
        newValues[baseKey] = [];
      }
      newValues[baseKey].push(values[key]);
    });

    return newValues;
  };

  const convertBooleanParamIfNeeded = (value: any) => {
    if ((typeof value === "string" && value === "true") || value === "false") {
      return value === "true";
    }
    return value;
  };

  const getParamForField = (key: string, value: any) => {
    const type = fields[key].type;

    if (type === "char" || type === "text") {
      return [key, "ilike", value];
    } else if (type === "float") {
      const fromValue = value[0];
      const toValue = value[1];
      return [
        [key, ">=", fromValue],
        [key, "<=", toValue],
      ];
    } else if (type === "date") {
      const fromValue = value[0].format("YYYY-MM-DD");
      const toValue = value[1].format("YYYY-MM-DD");
      return [
        [key, ">=", fromValue],
        [key, "<=", toValue],
      ];
    } else {
      return [key, "=", convertBooleanParamIfNeeded(value)];
    }
  };

  return (
    <Form
      className="bg-gray-100 rounded p-3"
      layout="vertical"
      form={form}
      onFinish={(values: any) => {
        Object.keys(values).forEach(
          (key) => values[key] === undefined && delete values[key]
        );

        const groupedFields = groupRangeValues(values);

        const newParams = Object.keys(groupedFields).map((key) => {
          return getParamForField(key, groupedFields[key]);
        });
        onSubmit(newParams);
      }}
    >
      {rows}
      <Row>
        <Col span={12} className="text-left pt-4 pb-2">
          <a
            className="text-xs"
            onClick={() => {
              setAdvancedFilter(!advancedFilter);
            }}
          >
            {advancedFilter ? <UpOutlined /> : <DownOutlined />}
            {advancedFilter ? "Simple search" : "Advanced search"}
          </a>
        </Col>
        <Col span={12} className="text-right pb-2">
          <Button
            className="mr-5"
            icon={<ClearOutlined />}
            onClick={() => {
              form.resetFields();
              onClear();
            }}
          >
            Clear
          </Button>
          <Button
            icon={<SearchOutlined />}
            loading={isSearching}
            className="mr-2"
            type="primary"
            htmlType="submit"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchFilter;
