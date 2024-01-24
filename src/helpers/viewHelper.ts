import { ViewTuple } from "@/types";

export async function resolveViewInfoPromises(
  viewsToRetrieve: Array<{ viewTuple: ViewTuple; promise?: Promise<any> }>,
) {
  const results = await Promise.all(
    viewsToRetrieve.map(async (item) => {
      try {
        return await item.promise;
      } catch (error) {
        return null;
      }
    }),
  );

  const updatedViews = viewsToRetrieve.map((item, index) => ({
    ...item,
    info: results[index],
  }));

  return updatedViews.filter((item) => item.info !== null);
}
