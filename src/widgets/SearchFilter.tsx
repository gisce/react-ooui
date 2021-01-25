import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../tailwind.generated.css";
import { Char } from "./Char";
import { Selection } from "./Selection";
import { Float } from "./Float";

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
} from "ooui";

type SearchFields = {
  primary: string[];
  secondary: string[];
};

type Props = {
  fields: any;
  searchFields: SearchFields;
  onClear: () => void;
  onSubmit: () => void;
};

function SearchFilter(props: Props): React.ReactElement {
  const { fields, searchFields, onClear, onSubmit } = props;

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

  return (
    <Form
      className="bg-gray-100 rounded p-3"
      layout="vertical"
      form={form}
      onFinish={onSubmit}
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
            onClick={() => {
              form.resetFields();
              onClear();
            }}
          >
            Clear
          </Button>
          <Button className="mr-2" type="primary" htmlType="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchFilter;
