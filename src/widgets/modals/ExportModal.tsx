import ConnectionProvider from "@/ConnectionProvider";
import {
  ExportModal as ExportModalFmg,
  Locale,
} from "@gisce/react-formiga-components";
import { ExportOptions } from "@gisce/react-formiga-components/dist/components/other/ExportModal/ExportModal.types";
import React, { useCallback, useRef } from "react";
import showInfo from "@/ui/InfoDialog";
import { tForLang } from "@/context/LocaleContext";
import { getMimeType, openBase64InNewTab } from "@/helpers/filesHelper";

export type ExportModalProps = {
  visible: boolean;
  locale: string;
  onClose: () => void;
  selectedRegistersToExport?: number;
  totalRegisters: number;
  model: string;
  domain: any[];
  limit?: number;
  treeFields?: any;
  context?: any;
};

export const ExportModal = (props: ExportModalProps) => {
  const {
    visible,
    locale,
    onClose,
    model,
    context,
    treeFields,
    selectedRegistersToExport,
    totalRegisters,
    domain,
    limit,
  } = props;
  const fields = useRef<any>({});

  const onSucceed = useCallback(
    async (options: ExportOptions) => {
      if (options.selectedKeys.length === 0) {
        showInfo(tForLang("selectAtLeastOneField", locale));
        return;
      }

      const { datas } = await ConnectionProvider.getHandler().exportData({
        model,
        fields: options.selectedKeys,
        domain: options.registersAmount === "all" ? [] : domain,
        limit: options.registersAmount === "all" ? undefined : limit,
        context,
        format: options.exportType,
      });

      onClose();

      await new Promise((resolve) => setTimeout(resolve, 200));

      const fileType: any = await getMimeType(datas);
      openBase64InNewTab(datas, fileType.mime);
    },
    [locale, model, domain, limit, context, onClose]
  );

  const onGetFields = useCallback(async () => {
    const viewData = await ConnectionProvider.getHandler().getFields({
      model,
      context,
      fields: [],
    });
    fields.current["/"] = viewData;
    return convertToExportField({ fields: viewData });
  }, [model, context, fields]);

  const onGetFieldChilds = useCallback(
    async ({ key, title }: any) => {
      let fieldDefinition;

      if (key.indexOf("/") === -1) {
        fieldDefinition = fields.current["/"];
      } else {
        fieldDefinition = fields.current[getParentKey(key)];
      }

      const optsForField = fieldDefinition[getChildKey(key)];
      const relation = optsForField.relation;
      const viewData = await ConnectionProvider.getHandler().getFields({
        model: relation,
        context,
        fields: [],
      });

      fields.current[key] = viewData;

      return convertToExportField({
        fields: viewData,
        parentTitle: title,
        parentKey: key,
      });
    },
    [fields, model, context]
  );

  return (
    <ExportModalFmg
      visible={visible}
      locale={locale as Locale}
      onSucceed={onSucceed}
      onCancel={onClose}
      selectedRegistersToExport={selectedRegistersToExport}
      totalRegisters={totalRegisters}
      onGetFieldChilds={onGetFieldChilds}
      onGetFields={onGetFields}
    />
  );
};

const convertToExportField = ({
  fields,
  parentKey,
  parentTitle,
}: {
  fields: any;
  parentTitle?: string;
  parentKey?: string;
}) => {
  const exportFields = [];

  for (const key of Object.keys(fields)) {
    const valuesForField = fields[key];
    const relationField =
      valuesForField.type === "many2one" ||
      valuesForField.type === "one2many" ||
      valuesForField.type === "many2many";

    exportFields.push({
      key: `${parentKey ? parentKey + "/" : ""}${key}`,
      title: `${parentTitle ? parentTitle + "/" : ""}${valuesForField.string}`,
      tooltip: valuesForField.help,
      required: valuesForField.required,
      isLeaf: !relationField,
    });
  }
  return exportFields;
};

const getParentKey = (key: string) => {
  if (key.indexOf("/") === -1) {
    return key;
  }
  const items = key.split("/");
  return items.slice(0, -1).join("/");
};

const getChildKey = (key: string) => {
  if (key.indexOf("/") === -1) {
    return key;
  }
  const items = key.split("/");
  return items[items.length - 1];
};
