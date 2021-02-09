import React from "react";
import { Row, Col } from "antd";
import { Group as GroupOoui, Widget } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";
import Config from "@/config";

type Props = {
  ooui: GroupOoui;
};

function Group(props: Props): React.ReactElement {
  const { ooui } = props;
  const { columns } = ooui.container;
  const span = Config.full_width_colspan / columns;

  return (
    <>
      {ooui!.container.rows.map((row, index) => {
        return (
          <Row className="pb-2" key={index}>
            {row.map((item: Widget) => {
              return <Col span={span * item.colspan}>{createReactWidget(item)}</Col>;
            })}
          </Row>
        );
      })}
    </>
  );
}

export default Group;
