import { useContext, useState } from "react";
import { One2many as One2manyOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { Spin, Alert } from "antd";
import { Views, ViewType } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import { One2manyInputLegacy } from "@/widgets/base/one2many/One2manyInputLegacy";
import {
  One2manyInput,
  One2manyInputBaseProps,
} from "@/widgets/base/one2many/One2manyInput";
import { useDeepCompareEffect } from "use-deep-compare";
import { FormContext, FormContextType } from "@/context/FormContext";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { DEFAULT_TREE_TYPE } from "@/views/actionViews/TreeActionView";
import One2manyProvider, {
  useOne2manyContext,
} from "@/context/One2manyContext";

const MIN_ITEMS_TO_USE_INFINITE = 30;

type Props = {
  ooui: One2manyOoui;
};

export const One2many = (props: Props) => {
  const { ooui } = props;
  const { mode, relation, views: oouiViews, required, context } = ooui;

  let initialView: ViewType;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [views, setViews] = useState<Views>(new Map<string, any>());
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext, formView } = formContext || {};
  const { view_id: parentViewId } = formView || {};

  useDeepCompareEffect(() => {
    fetchData();
  }, [ooui]);

  const getToolbarEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_GET_TOOLBAR,
  );

  const getViewData = async (type: ViewType) => {
    if (oouiViews && oouiViews[type]) {
      const view = oouiViews[type];
      if (
        getToolbarEnabled &&
        !view.toolbar &&
        (type === "form" || type === "tree")
      ) {
        const toolbar = await ConnectionProvider.getHandler().getToolbar({
          model: relation,
          type,
          context: { ...getContext?.(), ...context },
        });
        return { ...view, toolbar };
      }
      return view;
    }

    if (getToolbarEnabled && (type === "form" || type === "tree")) {
      // Get view and toolbar in parallel
      const [viewData, toolbar] = await Promise.all([
        ConnectionProvider.getHandler().getView({
          model: relation,
          type,
          context: { ...getContext?.(), ...context },
        }),
        ConnectionProvider.getHandler().getToolbar({
          model: relation,
          type,
          context: { ...getContext?.(), ...context },
        }),
      ]);
      return { ...viewData, toolbar };
    }

    // If toolbar not enabled or not form/tree view, just get view
    return await ConnectionProvider.getHandler().getView({
      model: relation,
      type,
      context: { ...getContext?.(), ...context },
    });
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      if (mode && mode.length > 0) {
        const viewPromises = (mode as ViewType[]).map(async (m: ViewType) => {
          const v = await getViewData(m);
          views.set(m, v);
        });
        await Promise.all(viewPromises);
        setViews(views);
      } else {
        const [formView, treeView] = await Promise.all([
          getViewData("form"),
          getViewData("tree"),
        ]);
        views.set("form", formView);
        views.set("tree", treeView);
        setViews(views);
      }
    } catch (err) {
      setError(JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };

  if (mode && mode.length > 0) {
    initialView = mode[0] as ViewType;
  } else {
    initialView = "tree";
  }

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    console.error(error);
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  const validator = async (_: any, value: any) => {
    if (!value) throw new Error();
    if (!value.items) throw new Error();
    if (!Array.isArray(value.items)) throw new Error();
    if (value.items.length === 0) throw new Error();
  };

  return (
    <One2manyProvider initialView={initialView}>
      <Field
        required={required}
        type={"array"}
        validator={validator}
        {...props}
      >
        <One2manyComponent
          ooui={ooui}
          views={views}
          parentViewId={parentViewId}
          treeViewId={views.get("tree")?.view_id}
        />
      </Field>
    </One2manyProvider>
  );
};

const One2manyComponent = (props: One2manyInputBaseProps) => {
  const { ooui, value } = props;

  const { treeType, setTreeType } = useOne2manyContext();

  useDeepCompareEffect(() => {
    if (ooui.infinite) {
      setTreeType("infinite");
      return;
    }

    if (
      value &&
      Array.isArray(value.items) &&
      value.items.length >= MIN_ITEMS_TO_USE_INFINITE
    ) {
      setTreeType("infinite");
      return;
    }

    setTreeType(DEFAULT_TREE_TYPE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ooui.infinite, value]);

  if (treeType === "legacy") {
    return <One2manyInputLegacy {...props} />;
  }
  return <One2manyInput {...props} treeType={treeType} />;
};
