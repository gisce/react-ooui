import React, { useContext, useState } from "react";
import { One2many as One2manyOoui } from "@gisce/ooui";
import Field from "@/common/Field";
import { Spin, Alert } from "antd";
import { Views } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import One2manyProvider from "@/context/One2manyContext";
import { One2manyInput } from "@/widgets/base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";
import { FormContext, FormContextType } from "@/context/FormContext";

type Props = {
  ooui: One2manyOoui;
};

export type ViewModes = "tree" | "form" | "graph";

export const One2many = (props: Props) => {
  const { ooui } = props;
  const { mode, relation, views: oouiViews, required, context } = ooui;

  let initialView: ViewModes;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [views, setViews] = useState<Views>(new Map<string, any>());
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

  useDeepCompareEffect(() => {
    fetchData();
  }, [ooui]);

  const getViewData = async (type: ViewModes) => {
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
        for (const m of mode as ViewModes[]) {
          const v = await getViewData(m);
          views.set(m, v)
        }
        setViews(views)
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
    initialView = mode[0] as ViewModes;
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
        <One2manyInput ooui={ooui} views={views} />
      </Field>
    </One2manyProvider>
  );
};
