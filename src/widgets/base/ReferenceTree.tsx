import { Space } from "antd";
import React from "react";
import { Many2oneSuffix } from "./many2one/Many2oneSuffix";
import { useUserFeatureIsEnabled } from "@/context/ConfigContext";
import { UserFeatureKeys } from "@/models/userFeature";

export type ReferenceTreeProps = {
  value: {
    model: string;
    id: number;
    name: string;
    originalValue: string;
  };
  selectionValues?: any;
};

export const ReferenceTree = (
  props: ReferenceTreeProps,
): React.ReactElement => {
  const { value, selectionValues } = props;
  const disableArrowMenu = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_DISABLE_ARROW_MENU,
  );

  // Expect prefetched data - value should contain model, id, and name properties
  if (!value || !value.model || !value.name) {
    return <></>;
  }

  const { model, id, name } = value;
  const selectionDescription = selectionValues.get(model);

  return (
    <Space>
      <>{`${selectionDescription}:`}</>
      <>{name}</>
      {!disableArrowMenu && <Many2oneSuffix id={id} model={model} />}
    </Space>
  );
};
