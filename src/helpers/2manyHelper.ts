import { One2manyItem } from "@/widgets/base/One2manyInput";

const addOrUpdateItem = ({
  itemToUpdate,
  items,
}: {
  itemToUpdate: One2manyItem;
  items: Array<One2manyItem>;
}): Array<One2manyItem> => {
  if (!items.map((item) => item.id).includes(itemToUpdate.id)) {
    return [...items, itemToUpdate];
  }

  return items.map((item: One2manyItem) => {
    if (item.id === itemToUpdate.id) {
      return itemToUpdate;
    }
    return item;
  });
};

const getTemporalIdNumber = ({ ids }: { ids: number[] }): number => {
  let newId: number | undefined;

  while (newId === undefined) {
    const tempId = Math.floor(Math.random() * 1000) + 1;
    if (!ids.includes(tempId)) {
      newId = tempId;
    }
  }
  return newId!;
};

const getItemToUpdate = ({
  id,
  items,
  touchedValues,
}: {
  id: number;
  touchedValues: any;
  items: One2manyItem[];
}): One2manyItem => {
  let itemToUpdate: One2manyItem;

  if (!id) {
    const newId = getTemporalIdNumber({
      ids: items.map((item) => item.id) as number[],
    });

    itemToUpdate = {
      operation: "create",
      id: newId,
      values: { ...touchedValues, id: newId },
    };
  } else {
    const item = items.find((it) => {
      return it.id === id;
    });

    if (Object.keys(touchedValues).length > 0) {
      const newOperationStatus =
        item?.operation !== "create" ? "modify" : "create";
      itemToUpdate = {
        operation: newOperationStatus,
        id: item?.id,
        values: { ...item?.values, ...touchedValues },
        touchedValues,
      };
    } else {
      itemToUpdate = item!;
    }
  }
  return itemToUpdate;
};

export { addOrUpdateItem, getTemporalIdNumber, getItemToUpdate };
