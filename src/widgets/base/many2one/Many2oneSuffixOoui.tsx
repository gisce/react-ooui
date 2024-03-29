import { Fragment, useCallback, useState } from "react";
import {
  PrinterOutlined,
  ThunderboltOutlined,
  EnterOutlined,
} from "@ant-design/icons";
import {
  useLocale,
  DropdownMenuGroup,
  DropdownMenuItem,
  Many2OneSuffixModal,
  Many2OneSuffix as Many2OneSuffixUi,
} from "@gisce/react-formiga-components";

export type Action = Record<string, any> & {
  id: number;
  name: string;
  type: string;
  context: any;
  domain: any;
};

export type ActionRelatePrint = {
  actionItems: Action[];
  relateItems: Action[];
  printItems: Action[];
};

export type Many2OneSuffixOnItemClickOpts = {
  item: DropdownMenuItem;
  type: "action" | "print" | "relate";
};

type Many2oneSuffixProps = {
  onRetrieveData: () => Promise<
    | {
        actionItems: Action[];
        relateItems: Action[];
        printItems: Action[];
      }
    | undefined
  >;
  onItemClick?: (opts: Many2OneSuffixOnItemClickOpts) => void;
  onOpenChange?: (open: boolean) => void;
};

export const Many2oneSuffixOoui = ({
  onRetrieveData,
  onItemClick,
  onOpenChange,
}: Many2oneSuffixProps) => {
  const [actionModalVisible, setActionModalVisible] = useState<boolean>(false);
  const [printModalVisible, setPrintModalVisible] = useState<boolean>(false);
  const { t } = useLocale();
  const [data, setData] = useState<{
    actionItems: Action[];
    relateItems: Action[];
    printItems: Action[];
  }>();

  const fetchMenuItems = useCallback(async (): Promise<DropdownMenuGroup[]> => {
    const {
      actionItems = [],
      relateItems = [],
      printItems = [],
    } = (await onRetrieveData()) || {};
    setData({ actionItems, relateItems, printItems });
    return [
      {
        sticky: true,
        items: [
          {
            id: "action",
            name: t("action"),
            disabled: !actionItems || actionItems.length === 0,
            icon: <ThunderboltOutlined />,
          },
          {
            id: "print",
            name: t("report"),
            disabled: !printItems || printItems.length === 0,
            icon: <PrinterOutlined />,
          },
          {
            id: "divider",
            type: "divider",
          },
        ],
      },
      {
        label: t("related"),
        icon: <EnterOutlined />,
        items: relateItems as DropdownMenuItem[],
      },
    ];
  }, [t, onRetrieveData]);

  return (
    <Fragment>
      <Many2OneSuffixUi
        onRetrieveData={fetchMenuItems}
        onItemClick={(item) => {
          if (item.id === "action") {
            setActionModalVisible(true);
          } else if (item.id === "print") {
            setPrintModalVisible(true);
          } else {
            onItemClick?.({ item, type: "relate" });
          }
        }}
        onOpenChange={(open) => {
          onOpenChange?.(open);
          if (!open) {
            setActionModalVisible(false);
            setPrintModalVisible(false);
          }
        }}
      />
      <Many2OneSuffixModal
        visible={actionModalVisible}
        items={data?.actionItems as DropdownMenuItem[]}
        onItemClicked={(item) => {
          setActionModalVisible(false);
          onItemClick?.({ item, type: "action" });
        }}
        onCancel={() => setActionModalVisible(false)}
      />
      <Many2OneSuffixModal
        visible={printModalVisible}
        items={data?.printItems as DropdownMenuItem[]}
        onItemClicked={(item) => {
          setPrintModalVisible(false);
          onItemClick?.({ item, type: "print" });
        }}
        onCancel={() => setPrintModalVisible(false)}
      />
    </Fragment>
  );
};
