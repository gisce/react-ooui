import { useContext, useState } from "react";
import { One2many as One2manyOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { Spin, Alert } from "antd";
import { Views, ViewType } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import One2manyProvider from "@/context/One2manyContext";
import { One2manyInput } from "@/widgets/base/one2many/One2manyInput";
import {
  One2manyInput as One2manyInputInfinite,
  One2manyInputInfiniteProps,
} from "@/widgets/base/one2many/One2manyInputInfinite";
import useDeepCompareEffect from "use-deep-compare-effect";
import { FormContext, FormContextType } from "@/context/FormContext";

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

  const getViewData = async (type: ViewType) => {
    if (oouiViews && oouiViews[type]) {
      return oouiViews[type];
    }
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
        for (const m of mode as ViewType[]) {
          const v = await getViewData(m);
          views.set(m, v);
        }
        setViews(views);
      } else {
        const formView = await getViewData("form");
        const treeView = await getViewData("tree");
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

const One2manyComponent = (props: One2manyInputInfiniteProps) => {
  const { ooui, value } = props;
  const shouldUseInfiniteComponent =
    ooui.infinite ||
    (value &&
      Array.isArray(value.items) &&
      value.items.length >= MIN_ITEMS_TO_USE_INFINITE);

  return shouldUseInfiniteComponent ? (
    <One2manyInputInfinite {...props} />
  ) : (
    <One2manyInput {...props} />
  );
};
