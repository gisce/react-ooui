import { useContext, useEffect, useMemo, useState } from "react";
import { useConfigContext } from "@/context/ConfigContext";
import { FormContext, FormContextType } from "@/context/FormContext";
import { fetchAction } from "@/widgets/views/Dashboard/dashboardHelper";
import { ShortcutApi } from "@/ui/FavouriteButton";

export const useFormGraphData = (actionId: number) => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [actionData, setActionData] = useState<any>();
  const [treeShortcut, setTreeShortcut] = useState<ShortcutApi>();
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext, getValues, activeId } = formContext || {};
  const { globalValues, rootContext } = useConfigContext();
  const context = useMemo(() => {
    return { ...getContext?.(), ...rootContext };
  }, [getContext, rootContext]);

  const fetchData = async () => {
    setError(undefined);
    setLoading(true);
    try {
      const result = await fetchAction({
        actionId,
        rootContext: context,
        globalValues: {
          ...globalValues,
          ...getValues(),
        },
      });
      const { views } = result as any;

      const treeView = views.find((view: any[]) => {
        const [, type] = view;
        return type === "tree";
      });
      if (treeView) {
        const [id, type] = treeView;
        const {
          actionId: action_id,
          actionType: action_type,
          title: name,
          model: res_model,
        } = result;

        setTreeShortcut({
          action_id,
          action_type,
          name,
          res_id: false,
          res_model,
          view_id: id,
          view_type: type,
          overrideUnsettedLimit: true,
          values: {
            active_id: activeId,
            active_ids: [activeId],
          },
        });
      }
      setActionData(result);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { actionData, treeShortcut, loading, error, fetchData };
};
