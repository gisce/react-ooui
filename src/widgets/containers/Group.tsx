import React from "react";
import { Row, Col, Card } from "antd";
import { Group as GroupOoui, Widget } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";
import Config from "@/config";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true } = props;
  const { columns } = ooui.container;
  const span = Config.full_width_colspan / columns;

  const content = ooui!.container.rows.map((row, index) => {
    return (
      <Row align="middle" key={index}>
        {row.map((item: Widget) => {
          return (
            <Col xs={24} lg={span * item.colspan} className="pl-2">
              {createReactWidget(item)}
            </Col>
          );
        })}
      </Row>
    );
  });

  return (
    <>
      {ooui.label && showLabel ? (
        <Card type="inner" title={ooui.label}>
          {content}
        </Card>
      ) : (
        content
      )}
    </>
  );
}

export default Group;
