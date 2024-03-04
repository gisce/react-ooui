import { InitialViewData, TreeView, View, ViewTuple } from "@/types";

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

export function determineFirstView({
  availableViews,
  initialView,
}: {
  availableViews: View[];
  initialView: InitialViewData;
}) {
  if (!initialView && availableViews.find((v) => v.type === "tree")) {
    const treeView: TreeView = availableViews.find(
      (v) => v.type === "tree",
    ) as TreeView;
    return treeView;
  } else if (!initialView) {
    const formView: TreeView = availableViews.find(
      (v) => v.type === "form",
    ) as TreeView;
    return formView;
  } else {
    const view = availableViews.find((v) => {
      if (!initialView.id) {
        return v.type === initialView.type;
      } else {
        return v.type === initialView.type && v.view_id === initialView.id;
      }
    });
    return view;
  }
}
