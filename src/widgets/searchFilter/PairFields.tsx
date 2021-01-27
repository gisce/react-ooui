import React from "react";
import { Row, Col } from "antd";
import { Float } from "../base/Float";
import { Integer } from "../base/Integer";

type Props = {
  id: string;
  label?: string;
  defaultValue?: number;
  type: "float" | "integer";
};

export function PairFields(props: Props): React.ReactElement {
  const { id, label, defaultValue, type } = props;

  const Widget = type === "float" ? Float : Integer;

  return (
    <Row align={"bottom"}>
      <Col>
        <Widget
          className="w-24"
          id={id + "_from"}
          label={label}
          defaultValue={defaultValue}
        />
      </Col>
      <Col className="pb-1">
        <span className="pl-2 pr-2 h-full"> - </span>
      </Col>
      <Col>
        <Widget
          className="w-24"
          id={id + "_to"}
          label={""}
          defaultValue={defaultValue}
        />
      </Col>
    </Row>
  );
}
