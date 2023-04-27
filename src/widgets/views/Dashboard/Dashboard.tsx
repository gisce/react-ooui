import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ActionView from "@/views/ActionView";
import { fetchAction } from "./dashboardHelper";
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import { Graph } from "../Graph/Graph";
import { DashboardGrid, DashboardGridItem } from "../DashboardGrid";
import ConnectionProvider from "@/ConnectionProvider";
import { DashboardProps, FormView } from "@/types";
import { One2manyItem } from "@/index";
import { readObjectValues } from "@/helpers/one2manyHelper";
import { LoadingOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import {
  DashboardActionContext,
  DashboardActionContextType,
} from "@/context/DashboardActionContext";
import { ShortcutApi } from "@/ui/FavouriteButton";
import DashboardTree from "./DashboardTree";
import { DashboardForm } from "./DashboardForm";

const itemsField = "line_ids";

function Dashboard(props: DashboardProps, ref: any) {
  const { model, context = {}, id, configAction } = props;
  const [dashboardItems, setDashboardItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const {
    setIsLoading: setActionBarLoading,
    openAction,
    moveItemsEnabled,
  } = useContext(DashboardActionContext) as DashboardActionContextType;

  const itemsFields = useRef<any>();
  const boardFields = useRef<any>();

  useEffect(() => {
    fetchData();
  }, [model, id, context]);

  useImperativeHandle(ref, () => ({
    refresh: () => {
      fetchData();
    },
    configDashboard: openConfigDashboard,
  }));

  async function fetchData() {
    setIsLoading(true);
    setActionBarLoading(true);
    setError(undefined);

    try {
      const view: FormView = (await fetchView()) as FormView;
      const values = await fetchValues(view);
      const model = view.fields[itemsField].relation;
      const items: One2manyItem[] = values[itemsField].items;
      boardFields.current = view.fields;

      const originalItems: One2manyItem[] = await fetchDashboardItems({
        items,
        model,
        context,
      });

      const itemsWithActions = await getItemsWithActions(originalItems);
      setDashboardItems(itemsWithActions);
      setIsLoading(false);
      setActionBarLoading(false);
    } catch (err) {
      setError(JSON.stringify(err));
    }
  }

  async function fetchView() {
    return await ConnectionProvider.getHandler().getView({
      model,
      type: "form",
      context,
    });
  }

  async function fetchDashboardItems({
    items,
    model,
    context,
  }: {
    items: One2manyItem[];
    model: string;
    context: any;
  }) {
    itemsFields.current = (
      (await ConnectionProvider.getHandler().getView({
        model,
        type: "form",
        context,
      })) as FormView
    ).fields;

    const [results] = await readObjectValues({
      treeView: {
        fields: itemsFields.current,
      },
      formView: {
        fields: itemsFields.current,
      },
      model,
      items,
      context,
      currentView: "form",
    });
    return results;
  }

  async function fetchValues(view: FormView) {
    return (
      await ConnectionProvider.getHandler().readObjects({
        model,
        ids: [id],
        fields: view.fields,
        context,
      })
    )[0];
  }

  async function getItemsWithActions(items: One2manyItem[]) {
    const itemsWithActions = [];

    for (const dashboardItem of items) {
      const { values } = dashboardItem;
      if (values.action_id && values.action_id.length > 0) {
        const actionId = parseInt(values.action_id[0], 10);
        const actionData = await fetchAction({
          actionId,
          rootContext: context,
        });
        itemsWithActions.push({ ...dashboardItem, actionData });
      }
    }

    return itemsWithActions;
  }

  async function onPositionItemsChanged(itemPositions: any[]) {
    if (!moveItemsEnabled) {
      return;
    }

    const differences = itemPositions.filter((itemPosition) => {
      const dashboardItem = dashboardItems.find(
        (dashboardItem) => dashboardItem.id === itemPosition.id
      );
      if (!dashboardItem) {
        return false;
      }

      if (!dashboardItem.position) {
        return true;
      }

      const remotePosition = {
        ...JSON.parse(dashboardItem.position.replace(/'/g, '"')),
        id: dashboardItem.id,
      };

      return JSON.stringify(itemPosition) !== JSON.stringify(remotePosition);
    });

    if (differences.length === 0) {
      return;
    }

    const itemsToUpdate = dashboardItems.filter((dashboardItem) => {
      return differences.map((diff) => diff.id).includes(dashboardItem.id);
    });

    const itemsToUpdateWithUpdatedPos = itemsToUpdate.map((dashboardItem) => {
      const diffItem = {
        ...differences.find((diffItem) => diffItem.id === dashboardItem.id),
      };
      delete diffItem.id;

      const item = { ...dashboardItem };
      delete item.actionData;

      return {
        ...dashboardItem,
        operation: "pendingUpdate",
        values: {
          ...dashboardItem.values,
          position: JSON.stringify(diffItem).replace(/"/g, "'"),
        },
      };
    });

    const valueToUpdate = {
      fields: itemsFields.current,
      items: itemsToUpdateWithUpdatedPos,
    };

    await ConnectionProvider.getHandler().update({
      model,
      id,
      values: { [itemsField]: valueToUpdate },
      fields: boardFields.current,
      context,
    });
  }

  async function openConfigDashboard() {
    openAction(configAction);
  }

  if (error) {
    console.log(error);
    return (
      <Alert className="mt-10 mb-20" message={error} type="error" banner />
    );
  }

  if (isLoading) {
    return <LoadingOutlined />;
  }

  return (
    <DashboardGrid onPositionItemsChanged={onPositionItemsChanged}>
      {dashboardItems.map((item, idx) => {
        const { actionData, values } = item;
        const { position, id } = values;

        const {
          actionId,
          actionType,
          key,
          title,
          views,
          model,
          context,
          domain,
          initialView,
          limit,
        } = actionData as any;

        let parmsParsed = {};

        try {
          parmsParsed = JSON.parse(position.replace(/'/g, '"'));
        } catch (err) {
          // console.error(`Error parsing parms: ${action.position}`);
          parmsParsed = { x: idx * 2, y: 0, w: 2, h: 3 };
        }

        let childContent = null;

        if (initialView?.type === "graph") {
          childContent = (
            <Graph
              view_id={
                views.filter(
                  (view: [number, string]) => view[1] === "graph"
                )[0][0]
              }
              model={model}
              context={context}
              domain={domain}
              limit={limit}
            />
          );
        } else if (initialView?.type === "form") {
          childContent = <DashboardForm model={model} actionDomain={domain} />;
        } else if (initialView?.type === "tree") {
          childContent = (
            <DashboardTree
              model={model}
              domain={domain}
              view_id={
                views.filter(
                  (view: [number, string]) => view[1] === "tree"
                )[0][0]
              }
              onRowClicked={(record) => {
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
                  openAction(action);
                }
              }}
            />
          );
        } else if (initialView !== undefined) {
          const formattedInitialView =
            initialView && Array.isArray(initialView.id)
              ? { ...initialView, id: initialView.id[0] }
              : initialView;
          childContent = (
            <ActionView
              action_id={actionId}
              action_type={actionType}
              tabKey={key}
              title={title}
              views={views}
              model={model}
              context={context}
              domain={domain}
              setCanWeClose={() => {}}
              initialView={formattedInitialView}
              limit={limit}
            />
          );
        }

        let action: ShortcutApi;
        const treeView = views.find((view: any[]) => {
          const [, type] = view;
          return type === "tree";
        });
        if (treeView) {
          const [id, type] = treeView;
          const {
            actionId: action_id,
            actionType: action_type,
            title: name,
            model: res_model,
          } = actionData;

          action = {
            action_id,
            action_type,
            name,
            res_id: false,
            res_model,
            view_id: id,
            view_type: type,
          };
        }

        return (
          <DashboardGridItem
            key={id}
            id={id}
            title={title}
            parms={parmsParsed}
            action={action!}
            openAction={openAction}
          >
            {childContent}
          </DashboardGridItem>
        );
      })}
    </DashboardGrid>
  );
}

export default forwardRef(Dashboard);
