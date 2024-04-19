import { InfiniteTable } from "@gisce/react-formiga-table";
import { One2manyItem } from "./One2manyInput";
import { Tree as TreeOoui } from "@gisce/ooui";
import { useCallback, useMemo, useState } from "react";
import { getTableColumns } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";

export type One2manyTreeProps = {
  items: One2manyItem[];
  onRowClicked: (record: any) => void;
  readOnly: boolean;
  height?: number;
  ooui: TreeOoui;
  context: any;
  onFetchRecords: (idsToFetch: number[]) => Promise<{
    results: any[];
    colors: { [key: number]: string };
  }>;
};

const DEFAULT_HEIGHT = 400;

export const One2manyTree = ({
  items,
  height,
  onRowClicked,
  readOnly,
  ooui,
  context,
  onFetchRecords,
}: One2manyTreeProps) => {
  const [colorsForResults, setColorsForResults] = useState<{
    [key: number]: string;
  }>({});

  const columns = useMemo(() => {
    return getTableColumns(
      ooui,
      {
        ...COLUMN_COMPONENTS,
      },
      context,
    );
  }, [context, ooui]);

  const onRequestData = useCallback(
    async (startRow: number, endRow: number) => {
      // get all the items that don't have treevalues
      const itemsToFetch = items.filter((item) => !item.treeValues);
      const idsToFetch = itemsToFetch.map((item) => item.id) as number[];
      // now slice the records with startRow and endRow
      const idsToFetchSliced = idsToFetch.slice(startRow, endRow);
      const { results, colors } = await onFetchRecords(idsToFetchSliced);
      setColorsForResults((prevColors) => ({ ...prevColors, ...colors }));
      return results;
    },
    [items, onFetchRecords],
  );

  const onRowStyle = useCallback(
    (record: any) => {
      if (colorsForResults![record.id]) {
        return { color: colorsForResults![record.id] };
      }
      return undefined;
    },
    [colorsForResults],
  );

  return (
    <InfiniteTable
      height={height || DEFAULT_HEIGHT}
      columns={columns}
      onRequestData={onRequestData}
      onRowDoubleClick={onRowClicked}
      readonly={readOnly}
      onRowStyle={onRowStyle}
    />
  );
};
