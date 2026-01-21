import React from "react";

import { Integer } from "@/widgets/base/Integer";
import { Row, Space } from "antd";
import { Integer as IntegerOoui } from "@gisce/ooui";

import { useLocale } from "@gisce/react-formiga-components";

type SearchParamsProps = {
  onLimitChange?: (limit: number) => void;
};

export function SearchParams(props: SearchParamsProps): React.ReactElement {
  const { onLimitChange } = props;
  const { t } = useLocale();

  const limitOoui = new IntegerOoui({ name: "limit" });
  const offsetOoui = new IntegerOoui({ name: "offset" });
  return (
    <div className="pl-2 pt-2">
      <Row key={"count_params"}>{t("parameters")}</Row>
      <Space align="center">
        {t("limit") + " :"}
        <Integer
          ooui={limitOoui}
          onChange={(newValue) => {
            onLimitChange?.(newValue as number);
          }}
        />
        {t("first") + " :"}
        <Integer ooui={offsetOoui} />
      </Space>
    </div>
  );
}
