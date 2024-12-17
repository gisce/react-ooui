import React, { useContext, useEffect } from "react";
import { Tooltip, theme, Statistic, Card, Empty } from "antd";
import { Indicator as IndicatorOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Field from "@/common/Field";
import { InfoCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import iconMapper from "@/helpers/iconMapper";
import { useFormGraphData } from "@/hooks/useFormGraphData";
import { CenteredSpinner } from "@/ui/CenteredSpinner";
import { ErrorAlert } from "@/ui/ErrorAlert";
import { Graph } from "../views/Graph/Graph";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { GraphServer } from "../views/Graph/GraphServer";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { GraphCard } from "../views/Graph";
import { useFormContext } from "@/context/FormContext";
import { useLocale } from "@gisce/react-formiga-components";
import styled from "styled-components";
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
  const Icon: React.ElementType = iconMapper(ooui.icon) as any;
  let formattedValue = value;
  if (ooui.selectionValues.size) {
    formattedValue = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    formattedValue = value[1];
  }
  const field = (
    <Statistic
      title={title}
      prefix={Icon && <Icon />}
      suffix={ooui.suffix}
      value={formattedValue}
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

  const titleWithTooltip = description ? (
    <>
      <Tooltip title={description}>
        <InfoCircleOutlined className="pr-1 text-xs" />
      </Tooltip>
      <span>{actionData?.title || ""}</span>
    </>
  ) : (
    <span>{actionData?.title || ""}</span>
  );

  return (
    <GraphCard
      id={id}
      parms={{}}
      title={titleWithTooltip}
      action={treeShortcut}
      openAction={openShortcut as any}
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
            <GraphComponent
              view_id={initialView.id}
              model={model}
              context={context}
              domain={domain}
              limit={limit}
              fixedHeight={height}
            />
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
