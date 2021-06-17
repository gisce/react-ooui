import React, { useState } from "react";
import { One2many as One2manyOoui } from "ooui";
import Field from "@/common/Field";
import { Spin, Alert } from "antd";
import { Views } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import One2manyProvider from "@/context/One2manyContext";
import { One2manyInput } from "@/widgets/base/one2many/One2manyInput";
import useDeepCompareEffect from "use-deep-compare-effect";

type Props = {
  ooui: One2manyOoui;
};

export const One2many = (props: Props) => {
  const { ooui } = props;
  const { mode, relation, views: oouiViews, required } = ooui;

  let initialView: "tree" | "form";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [views, setViews] = useState<Views>(new Map<string, any>());

  useDeepCompareEffect(() => {
    fetchData();
  }, [ooui]);

  const getViewData = async (type: "form" | "tree") => {
    if (oouiViews && oouiViews[type]) {
      return oouiViews[type];
    }
    return await ConnectionProvider.getHandler().getView(relation, type);
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const formView = await getViewData("form");
      const treeView = await getViewData("tree");
      views.set("form", formView);
      views.set("tree", treeView);
      setViews(views);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (mode && mode.length > 0) {
    initialView = mode[0] as "tree" | "form";
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
    if (!Array.isArray(value)) throw new Error();
    if (value.length === 0) throw new Error();
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
