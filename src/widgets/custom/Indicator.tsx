import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
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
  useFeatureData,
  useUserFeatureIsEnabled,
} from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { GraphServer } from "../views/Graph/GraphServer";
import { Many2oneSuffix } from "@/widgets/base/many2one/Many2oneSuffix";
import { useLocale, iconMapper } from "@gisce/react-formiga-components";
import { useTabs } from "@/context/TabManagerContext";
import { GraphCard } from "../views/Graph";
import { useFormContext } from "@/context/FormContext";
import styled from "styled-components";
import dayjs from "@/helpers/dayjs";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import ConnectionProvider from "@/ConnectionProvider";
import { useReferenceFieldValues } from "@/hooks/useReferenceFieldValues";
import { UserFeatureKeys } from "@/models/userFeature";
import { DashboardForm } from "../views/Dashboard/DashboardForm";
import DashboardTree from "../views/Dashboard/DashboardTree";
import { ShortcutApi } from "@/ui/FavouriteButton";
import { useDeepCompareEffect } from "use-deep-compare";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useBrowserVisibility } from "@/hooks/useBrowserVisibility";
const { useToken } = theme;

type IndicatorProps = WidgetProps & {
  ooui: IndicatorOoui;
  value?: number;
};

const AUTOREFRESH_INTERVAL_SECONDS = 3 * 1000;

export const Indicator = (props: IndicatorProps) => {
  const { ooui } = props;
  const { refreshCounter } = useFormContext();

  const hasActionId = ooui.actionId !== undefined;
  const hasActionField = ooui.actionField !== undefined;

  return (
    <Field ooui={ooui}>
      {hasActionId || hasActionField ? (
        <ErrorBoundary>
          <GraphIndicatorInput key={refreshCounter} ooui={ooui} />
        </ErrorBoundary>
      ) : (
        <IndicatorInput key={refreshCounter} ooui={ooui} />
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
  const { locale } = useLocale();
  const { getContext } = useFormContext();
  const [icon, setIcon] = useState<string>(ooui.icon);
  const [color, setColor] = useState<string>(ooui.color);
  const [referenceData, setReferenceData] = useState<{
    model: string;
    modelName: string;
    res_id: number;
    recordName: string;
  } | null>(null);
  const [isLoadingReference, setIsLoadingReference] = useState(false);
  const [parseCondition, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().parseCondition,
  );
  const { fetchReferenceValues } = useReferenceFieldValues({
    context: getContext?.(),
  });
  const disableArrowMenu = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_DISABLE_ARROW_MENU,
  );

  useEffect(() => {
    async function evaluateCondition(condition: string, setter: Function) {
      if (condition && condition.includes(":")) {
        try {
          const iconEval = await parseCondition({
            condition,
            values: { value },
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
  }, [ooui.icon, ooui.color, value]);

  useEffect(() => {
    async function fetchReferenceData() {
      if (
        ooui.fieldType === "reference" &&
        value &&
        typeof value === "string"
      ) {
        setIsLoadingReference(true);
        try {
          const results = await fetchReferenceValues([value]);
          const data = results.get(value);
          if (data) {
            setReferenceData(data);
          }
        } catch (error) {
          console.error("Error fetching reference data:", error);
        } finally {
          setIsLoadingReference(false);
        }
      } else {
        setReferenceData(null);
        setIsLoadingReference(false);
      }
    }
    fetchReferenceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, ooui.fieldType]);

  const shouldShowMenu = useMemo(() => {
    if (ooui.fieldType !== "many2one" && ooui.fieldType !== "reference") {
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
  let formattedValue = value;

  if (ooui.fieldType === "reference") {
    if (isLoadingReference) {
      formattedValue = <Spin size="small" />;
    } else if (referenceData) {
      formattedValue = (
        <Space>
          <span>
            {referenceData.modelName}:{" "}
            <strong>{referenceData.recordName}</strong>
          </span>
          {shouldShowMenu && (
            <Many2oneSuffix
              id={referenceData.res_id}
              model={referenceData.model}
            />
          )}
        </Space>
      );
    } else {
      formattedValue = " "; // Empty space instead of showing raw value
    }
  } else if (ooui.selectionValues.size) {
    formattedValue = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    formattedValue = value[1];
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
    formattedValue = value
      ? dayjs(value).format(formats[ooui.fieldType as keyof typeof formats])
      : " ";
  } else if (
    ooui.fieldType === "many2one" &&
    value &&
    ooui.raw_props?.relation
  ) {
    formattedValue = (
      <Space>
        {formattedValue}
        {shouldShowMenu && (
          <Many2oneSuffix id={value[0]} model={ooui.raw_props.relation} />
        )}
      </Space>
    );
  }
  if (value && (ooui.fieldType === "float" || ooui.fieldType === "integer")) {
    try {
      formattedValue = new Intl.NumberFormat(
        locale.replaceAll("_", "-"),
        {},
      ).format(value);
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
  const { getFieldValue, activeId } = useFormContext();

  const effectiveActionId = (ooui as any).actionField
    ? parseInt(getFieldValue((ooui as any).actionField) || "0", 10) || actionId
    : actionId;

  const { actionData, treeShortcut, loading, error, fetchData } =
    useFormGraphData(effectiveActionId!);

  const { openShortcut } = useTabs();

  useDeepCompareEffect(() => {
    if (!ooui || !effectiveActionId) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ooui, activeId, effectiveActionId]);

  if (error && error.message !== "active_id_not_found") {
    return <ErrorAlert error={error} />;
  }

  const { id, initialView, description } = actionData || {};

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
              <CardContent
                fixedHeight={height}
                actionData={actionData}
                autoRefresh={
                  (ooui as any).autoRefresh
                    ? AUTOREFRESH_INTERVAL_SECONDS
                    : undefined
                }
              />
            )
          )}
        </>
      )}
    </GraphCard>
  );
};

const CardContent = ({
  actionData,
  fixedHeight,
  autoRefresh,
}: {
  fixedHeight?: number;
  actionData: any;
  autoRefresh?: number;
}) => {
  const { initialView, views, model, domain, context, limit } = actionData;
  const readForViewFeature = useFeatureData(ErpFeatureKeys.FEATURE_READFORVIEW);
  const GraphComponent = readForViewFeature?.isEnabled ? GraphServer : Graph;
  const { openShortcut } = useTabs();
  const graphRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { isActive } = useActionViewContext();
  const tabOrWindowIsVisible = useBrowserVisibility();

  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (
      autoRefresh &&
      graphRef.current &&
      initialView.type === "graph" &&
      isActive !== false &&
      tabOrWindowIsVisible
    ) {
      intervalRef.current = setInterval(() => {
        graphRef.current?.refresh();
      }, autoRefresh);
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoRefresh, initialView.type, isActive, tabOrWindowIsVisible]);

  const onRowClicked = useCallback(
    (record: any) => {
      const formView = views.find((view: any[]) => {
        const [, type] = view;
        return type === "form";
      });
      if (formView) {
        const [id, type] = formView;
        const {
          actionId: action_id,
          actionType: action_type,
          title: name,
          model: res_model,
        } = actionData;

        const action: ShortcutApi = {
          action_id,
          action_type,
          name,
          res_id: record.id,
          res_model,
          view_id: id,
          view_type: type,
        };
        openShortcut(action as any);
      }
    },
    [actionData, openShortcut, views],
  );

  if (initialView.type === "graph") {
    return (
      <GraphComponent
        ref={graphRef}
        view_id={initialView.id}
        model={model}
        context={context}
        domain={domain}
        limit={limit}
        fixedHeight={fixedHeight}
      />
    );
  } else if (initialView.type === "form") {
    return (
      <DashboardForm
        key={initialView.id}
        model={model}
        actionDomain={domain}
        fixedHeight={fixedHeight}
        autoRefresh={autoRefresh}
      />
    );
  } else if (initialView.type === "tree") {
    return (
      <DashboardTree
        key={initialView.id}
        model={model}
        domain={domain}
        view_id={initialView.id}
        onRowClicked={onRowClicked}
        treeExpandable={actionData.treeExpandable}
        fixedHeight={fixedHeight}
        autoRefresh={autoRefresh}
      />
    );
  } else {
    return (
      <ErrorAlert
        error={new Error("Unsupported view type: " + initialView.type)}
      />
    );
  }
};

const StyledEmpty = styled(Empty)`
  &.ant-empty.ant-empty-normal {
    margin: 0;
    margin-top: 5px;
  }
`;
