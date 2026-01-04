import { useCallback, useContext, useEffect, useRef } from "react";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { ConnectionProvider, TreeView } from "..";

export const useExpandableTreeDoubleClick = ({
  treeView,
  currentModel,
  parentContext,
}: {
  treeView?: TreeView;
  currentModel: string;
  parentContext: any;
}) => {
  const expandableClickActionData = useRef<any>(null);
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};
  const [treeButOpen, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().treeButOpen,
  );
  const { showErrorNotification } = useErrorNotification();

  useEffect(() => {
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleExpandableRowDoubleClick = useCallback(
    async (record: any) => {
      const { id } = record;

      if (!expandableClickActionData.current) {
        try {
          expandableClickActionData.current = await treeButOpen({
            id: treeView!.view_id,
            model: currentModel!,
            context: parentContext,
          });
        } catch (error) {
          showErrorNotification(error);
        }
      }

      const actionData: any = expandableClickActionData.current[0][2];

      await processAction?.({
        actionData,
        fields: treeView!.fields,
        values: {
          active_id: id,
          ...record,
        },
        context: parentContext,
        treeView,
        view_id: treeView?.view_id,
      });
    },
    [
      currentModel,
      parentContext,
      processAction,
      showErrorNotification,
      treeButOpen,
      treeView,
    ],
  );

  return { handleExpandableRowDoubleClick };
};
