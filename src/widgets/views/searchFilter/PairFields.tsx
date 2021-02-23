import React from "react";
import { Row, Col } from "antd";
import { Float } from "@/widgets/base/Float";
import { Integer } from "@/widgets/base/Integer";
import { Integer as IntegerOoui } from "ooui";
import { labelWithTooltip } from "@/common/Field";

type Props = {
  ooui: any;
};

export function PairFields(props: Props): React.ReactElement {
  const { ooui } = props;
  const { id, label, tooltip } = ooui;
  const Widget = ooui instanceof IntegerOoui ? Integer : Float;

  const getWidget = (suffix: string) => {
    return (
      <Widget
        ooui={{ ...ooui, id: id + suffix, label: "", tooltip: undefined }}
        layout="vertical"
      />
    );
  };

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
