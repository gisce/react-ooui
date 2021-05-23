import { Item } from "@/widgets/base/One2many";

const addOrUpdateItem = ({
  itemToUpdate,
  items,
}: {
  itemToUpdate: Item;
  items: Array<Item>;
}): Array<Item> => {
  if (!items.map((item) => item.id).includes(itemToUpdate.id)) {
    return [...items, itemToUpdate];
  }

  return items.map((item: Item) => {
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

export { addOrUpdateItem, getTemporalIdNumber };
