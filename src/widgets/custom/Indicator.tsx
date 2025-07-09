import React, { useContext, useEffect, useMemo, useState } from "react";
import { Tooltip, theme, Statistic, Card, Empty, Space } from "antd";
import { Indicator as IndicatorOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Field from "@/common/Field";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { useFormGraphData } from "@/hooks/useFormGraphData";
import { CenteredSpinner } from "@/ui/CenteredSpinner";
import { ErrorAlert } from "@/ui/ErrorAlert";
import { Graph } from "../views/Graph/Graph";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import {
  useFeatureIsEnabled,
  useUserFeatureIsEnabled,
} from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { GraphServer } from "../views/Graph/GraphServer";
import { Many2oneSuffix } from "@/widgets/base/many2one/Many2oneSuffix";
import { useLocale, iconMapper } from "@gisce/react-formiga-components";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { GraphCard } from "../views/Graph";
import { useFormContext } from "@/context/FormContext";
import styled from "styled-components";
import dayjs from "@/helpers/dayjs";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import ConnectionProvider from "@/ConnectionProvider";
import { UserFeatureKeys } from "@/models/userFeature";
const { useToken } = theme;

type IndicatorProps = WidgetProps & {
  ooui: IndicatorOoui;
  value?: number;
};

export const Indicator = (props: IndicatorProps) => {
  const { ooui } = props;

  const hasActionId = ooui.actionId !== undefined;

  return (
    <Field ooui={ooui}>
      {hasActionId ? (
        <ErrorBoundary>
          <GraphIndicatorInput ooui={ooui} />
        </ErrorBoundary>
      ) : (
        <IndicatorInput ooui={ooui} />
      )}
    </Field>
  );
};

type IndicatorInputProps = {
  ooui: IndicatorOoui;
  value?: any;
};

const IndicatorInput = (props: IndicatorInputProps) => {
  const { token } = useToken();
  const { ooui, value } = props;
  const { getFieldValue } = useFormContext();

  const effectiveValue = ooui.actionField
    ? getFieldValue(ooui.actionField)
    : value;
  const { locale } = useLocale();
  const [icon, setIcon] = useState<string>(ooui.icon);
  const [color, setColor] = useState<string>(ooui.color);
  const [parseCondition, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().parseCondition,
  );
  const disableArrowMenu = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_DISABLE_ARROW_MENU,
  );

  useEffect(() => {
    async function evaluateCondition(condition: string, setter: Function) {
      if (condition && condition.includes(":")) {
        try {
          const iconEval = await parseCondition({
            condition,
            values: { value: effectiveValue },
            context: {},
          });
          setter(iconEval);
        } catch (err) {
          console.error("Error evaluando icono:", err);
        }
      } else {
        setter(condition);
      }
    }
    evaluateCondition(ooui.icon, setIcon);
    evaluateCondition(ooui.color, setColor);
    return () => cancelRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ooui.icon, ooui.color, effectiveValue, ooui.actionField]);

  const shouldShowMenu = useMemo(() => {
    if (ooui.fieldType !== "many2one") {
      return false;
    }

    // Level 1: Default value
    let result = true;

    // Level 2: User features (can modify the default)
    if (disableArrowMenu === true) {
      result = false;
    }

    // Level 3: Forced value (maximum priority)
    if ((ooui as any).showMenu !== undefined) {
      result = (ooui as any).showMenu;
    }

    return result;
  }, [ooui, disableArrowMenu]);

  const title = (
    <>
      <span>{ooui.label} </span>
      {ooui.tooltip && (
        <Tooltip title={ooui.tooltip}>
          <QuestionCircleOutlined
            className="pr-1 text-xs"
            style={{ color: token.colorPrimaryBg }}
          />
        </Tooltip>
      )}
    </>
  );
  const Icon: React.ElementType = iconMapper(icon) as any;
  let formattedValue = effectiveValue;
  if (ooui.selectionValues.size) {
    formattedValue = ooui.selectionValues.get(effectiveValue);
  } else if (Array.isArray(effectiveValue)) {
    formattedValue = effectiveValue[1];
  } else if (
    ooui.fieldType === "date" ||
    ooui.fieldType === "time" ||
    ooui.fieldType === "datetime"
  ) {
    const formats = {
      date: "DD/MM/YYYY",
      time: "HH:mm",
      datetime: "DD/MM/YYYY HH:mm",
    };
    formattedValue = effectiveValue
      ? dayjs(effectiveValue).format(
          formats[ooui.fieldType as keyof typeof formats],
        )
      : " ";
  }
  if (
    ooui.fieldType === "many2one" &&
    effectiveValue &&
    ooui.raw_props?.relation
  ) {
    formattedValue = (
      <Space>
        {formattedValue}
        {shouldShowMenu && (
          <Many2oneSuffix
            id={effectiveValue[0]}
            model={ooui.raw_props.relation}
          />
        )}
      </Space>
    );
  }
  if (
    effectiveValue &&
    (ooui.fieldType === "float" || ooui.fieldType === "integer")
  ) {
    try {
      formattedValue = new Intl.NumberFormat(
        locale.replaceAll("_", "-"),
        {},
      ).format(effectiveValue);
    } catch (e) {
      console.log("Error formatting number with locale", locale);
      console.error(e);
    }
  }
  const field = (
    <Statistic
      title={title}
      prefix={Icon && <Icon />}
      suffix={ooui.suffix}
      value={formattedValue}
      formatter={(value) => value}
      valueStyle={{ color }}
    />
  );
  if (ooui.card) {
    return <Card>{field}</Card>;
  } else {
    return field;
  }
};

const GraphIndicatorInput = (props: IndicatorInputProps) => {
  const { ooui } = props;
  const { actionId, height } = ooui;

  const { activeId } = useFormContext();
  const { actionData, treeShortcut, loading, error, fetchData } =
    useFormGraphData(actionId!);

  const readForViewEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_READFORVIEW,
  );
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { openShortcut } = tabManagerContext || {};

  useEffect(() => {
    if (!ooui) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ooui, activeId]);

  if (error && error.message !== "active_id_not_found") {
    return <ErrorAlert error={error} />;
  }

  const { id, model, limit, domain, context, initialView, description } =
    actionData || {};

  const GraphComponent = readForViewEnabled ? GraphServer : Graph;

  return (
    <GraphCard
      id={id}
      parms={{}}
      title={actionData?.title || ""}
      action={treeShortcut}
      openAction={openShortcut as any}
      tooltip={description}
      card={ooui.card}
    >
      {loading && <CenteredSpinner />}
      {!loading && (
        <>
          {!activeId ? (
            <StyledEmpty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              imageStyle={{ height: 15 }}
            />
          ) : (
            initialView?.id && (
              <GraphComponent
                view_id={initialView.id}
                model={model}
                context={context}
                domain={domain}
                limit={limit}
                fixedHeight={height}
              />
            )
          )}
        </>
      )}
    </GraphCard>
  );
};

const StyledEmpty = styled(Empty)`
  &.ant-empty.ant-empty-normal {
    margin: 0;
    margin-top: 5px;
  }
`;
