import React from "react";
import { Tooltip, theme, Statistic, Card } from "antd";
import { Indicator as IndicatorOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Field from "@/common/Field";
import { QuestionCircleOutlined } from "@ant-design/icons";
import iconMapper from "@/helpers/iconMapper";
import { useFetchActionData } from "@/hooks/useFetchActionData";
import { CenteredSpinner } from "@/ui/CenteredSpinner";
import { ErrorAlert } from "@/ui/ErrorAlert";
import { Graph } from "../views/Graph/Graph";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
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
  const { actionId } = ooui;

  const { actionData, loading, error } = useFetchActionData(actionId);

  if (loading) {
    return <CenteredSpinner />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  const { res_model: model, limit, domain, context, view_ids } = actionData;

  const [view_id] = view_ids;

  return (
    <Graph
      view_id={view_id}
      model={model}
      context={context}
      domain={domain}
      limit={limit}
    />
  );
};
