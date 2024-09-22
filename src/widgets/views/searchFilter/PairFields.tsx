import React from "react";
import { Row, Col } from "antd";
import { Float } from "@/widgets/base/Float";
import { Integer } from "@/widgets/base/Integer";
import { Integer as IntegerOoui, Label as LabelOoui } from "@gisce/ooui";
import Label from "@/widgets/base/Label";
import { WidgetProps } from "@/types";

type Props = {
  ooui: any;
};

export function PairFields(props: WidgetProps): React.ReactElement {
  const { ooui, showLabel } = props;
  const { id, label, tooltip } = ooui;
  const Widget = ooui instanceof IntegerOoui ? Integer : Float;

  const getWidget = (suffix: string) => {
    return (
      <Widget
        ooui={{
          ...(ooui as any),
          id: id + suffix,
          label: "",
          tooltip: undefined,
        }}
        layout="vertical"
      />
    );
  };

  return (
    <div style={{ width: "100%" }}>
      {showLabel && (
        <Label
          ooui={
            new LabelOoui({
              name: id + "_label",
              string: label,
              help: tooltip,
              fieldForLabel: id,
            })
          }
          align={"left"}
        />
      )}
      <Row
        align={"bottom"}
        className="mt-0"
        wrap={false}
        style={{ width: "100%" }}
      >
        <Col flex="1">{getWidget("#from")}</Col>
        <Col className="pb-1">
          <span className="px-2 h-full"> - </span>
        </Col>
        <Col flex="1">{getWidget("#to")}</Col>
      </Row>
    </div>
  );
}
