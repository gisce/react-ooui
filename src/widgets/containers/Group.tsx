import React from "react";
import { Card } from "antd";
import { Group as GroupOoui, Widget, Field, Label, Button, Text } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
};

const getTemplateColumns = (columns: number) => {
  const odd = "1fr";
  const even = "auto";
  let templateColumns = "";
  for (let i = 0; i < columns; i++) {
    templateColumns += i % 2 ? odd : even;
    if (i < columns) {
      templateColumns += " ";
    }
  }
  return templateColumns;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true } = props;
  const { columns } = ooui.container;

  const expandLabelsInFields = (row: any) => {
    const rowWithExpandedLabels: any = [];
    let totalColSpan = 0;

    row.map((item: Widget, columnIndex: number) => {
      if (
        item instanceof Field &&
        !(item instanceof Button) &&
        !(item instanceof Label)
      ) {
        if (item instanceof Text && item.nolabel) {
          rowWithExpandedLabels.push(item);
          return;
        }

        item.colspan = item.colspan - 1;
        item.nolabel = true;

        totalColSpan += 1;
        totalColSpan += item.colspan;

        rowWithExpandedLabels.push(new Label({ string: item.label }));
        rowWithExpandedLabels.push(item);

        if (columnIndex + 1 === row.length && totalColSpan < columns) {
          const gapsToFill = columns - totalColSpan;
          for (let i = 0; i < gapsToFill; i += 1) {
            rowWithExpandedLabels.push(new Label({ string: "" }));
          }
        }
      } else {
        rowWithExpandedLabels.push(item);
      }
    });

    return rowWithExpandedLabels;
  };

  const templateColumns = getTemplateColumns(columns);
  const style = { display: "grid", gridTemplateColumns: templateColumns };

  const content = (
    <div style={style}>
      {ooui!.container.rows.map((row, index) => {
        return expandLabelsInFields(row).map((item: Widget) => {
          return (
            <div
              style={{
                textAlign: "right",
                alignSelf: "center",
                padding: "0.5em",
                gridColumnStart: "span " + item.colspan,
              }}
            >
              {createReactWidget(item)}
            </div>
          );
        });
      })}
    </div>
  );

  return (
    <>
      {ooui.label && showLabel ? (
        <Card type="inner" title={ooui.label} style={{ textAlign: "left" }}>
          {content}
        </Card>
      ) : (
        content
      )}
    </>
  );
}

export default Group;
