import { useContext, useMemo, useState, useRef } from "react";
import { useConfigContext } from "@/context/ConfigContext";
import { FormContext, FormContextType } from "@/context/FormContext";
import { fetchAction } from "@/widgets/views/Dashboard/dashboardHelper";
import { ShortcutApi } from "@/ui/FavouriteButton";

export const useFormGraphData = (actionId: number) => {
  const hasAlreadyFetchedRef = useRef(false);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [actionData, setActionData] = useState<any>();
  const [treeShortcut, setTreeShortcut] = useState<ShortcutApi>();
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext, getPlainValues, activeId } = formContext || {};
  const { globalValues, rootContext } = useConfigContext();
  const context: any = useMemo(() => {
    return { ...getContext?.(), ...rootContext };
  }, [getContext, rootContext]);

  const fetchData = async () => {
    setError(undefined);
    if (!hasAlreadyFetchedRef.current) {
      setLoading(true);
    }
    try {
      const result = await fetchAction({
        actionId,
        rootContext: context,
        globalValues: {
          ...globalValues,
          ...getPlainValues(),
        },
      });

      if (!context.active_id) {
        setActionData(result);
        throw new Error("active_id_not_found");
      }

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
          domain: result.domain,
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
    if (!hasAlreadyFetchedRef.current) {
      setLoading(false);
      hasAlreadyFetchedRef.current = true;
    }
  };

  return { actionData, treeShortcut, loading, error, fetchData };
};
