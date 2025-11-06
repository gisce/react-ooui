import { ReactElement, useMemo } from "react";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";

export const NumberComponent = ({ value }: { value: number }): ReactElement => {
  return useMemo(
    () => <div style={{ display: "inline-block" }}>{value}</div>,
    [value],
  );
};

export const KANBAN_COMPONENTS = {
  ...COLUMN_COMPONENTS,
  integer: NumberComponent,
  float: NumberComponent,
};
