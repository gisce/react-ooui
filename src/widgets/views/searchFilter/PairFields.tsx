import React from "react";
import { Row, Col } from "antd";
import { Float } from "@/widgets/base/Float";
import { Integer } from "@/widgets/base/Integer";
import { Float as FloatOoui, Integer as IntegerOoui } from "ooui";
import { labelWithTooltip } from "@/common/FormItem";

type Props = {
  ooui: any;
  id: string;
  label?: string;
};

export function PairFields(props: Props): React.ReactElement {
  const { ooui } = props;
  const { id, label, tooltip } = ooui;
  ooui.tooltip = undefined;

  const getWidget = (suffix: string) => {
    return ooui instanceof IntegerOoui ? getInteger(suffix) : getFloat(suffix);
  };

  const getFloat = (suffix: string) => (
    <Float id={id + suffix} ooui={{ ...ooui, label: "" }} layout="vertical" />
  );

  const getInteger = (suffix: string) => (
    <Integer id={id + suffix} ooui={{ ...ooui, label: "" }} layout="vertical" />
  );

  return (
    <>
      {labelWithTooltip(label, tooltip)}
      <Row align={"bottom"} className="mt-0">
        <Col>{getWidget("#from")}</Col>
        <Col className="pb-1">
          <span className="pl-2 pr-2 h-full"> - </span>
        </Col>
        <Col>{getWidget("#to")}</Col>
      </Row>
    </>
  );
}
