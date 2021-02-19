import React from "react";
import { Card } from "antd";
import { Group as GroupOoui, Widget, Field, Label, Button, Text } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";
import { useMediaQuery } from "react-responsive";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
};

function Group(props: Props): React.ReactElement {
  const responsiveBehaviour = useMediaQuery({ query: "(max-width: 920px)" });
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

        totalColSpan += 1;
        totalColSpan += item.colspan - 1;

        const label = new Label({ string: item.label });
        label.align = "right";
        rowWithExpandedLabels.push(label);

        const newItem = clone(item);
        newItem._colspan = item._colspan - 1;
        newItem._nolabel = true;
        rowWithExpandedLabels.push(newItem);

        if (
          columnIndex + 1 === row.length &&
          totalColSpan < columns &&
          !responsiveBehaviour
        ) {
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
  const style = {
    display: "grid",
    gridTemplateColumns: responsiveBehaviour ? "auto 1fr" : templateColumns,
  };

  const content = (
    <div style={style}>
      {ooui!.container.rows.map((row) => {
        return expandLabelsInFields(row).map((item: Widget) => {
          const responsiveSpan = item.colspan === columns ? 2 : 1;

          return (
            <div
              style={{
                alignSelf: "center",
                padding: "0.5em",
                gridColumnStart:
                  "span " +
                  (responsiveBehaviour ? responsiveSpan : item.colspan),
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

const clone = function clone<T>(instance: T): T {
  const copy = new ((instance as any).constructor as { new (): T })();
  Object.assign(copy, instance);
  return copy;
};

export default Group;
