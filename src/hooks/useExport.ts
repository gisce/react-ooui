import {
  ExportField,
  ExportOptions,
  PredefinedExport,
  PredefinedExportField,
} from "@/../../react-formiga-components/dist/components/other/ExportModal/ExportModal.types";
import { useCallback, useRef } from "react";
import { ConnectionProvider } from "..";
import showInfo from "@/ui/InfoDialog";
import { tForLang } from "@/context/LocaleContext";
import { getMimeType, openBase64InNewTab } from "@/helpers/filesHelper";

export const useExport = ({
  model,
  context,
  locale,
  selectedRegistersToExport,
  domain,
  limit,
  onClose,
}: {
  model: string;
  context: any;
  locale: string;
  selectedRegistersToExport?: any[];
  domain: any[];
  limit?: number;
  onClose: () => void;
}) => {
  const fields = useRef<any>({});

  const onExport = useCallback(
    async (options: ExportOptions) => {
      if (
        options.selectedKeys === undefined ||
        options.selectedKeys.length === 0
      ) {
        showInfo(tForLang("selectAtLeastOneField", locale));
        return;
      }

      let exportDomain = domain;

      if (
        options.registersAmount === "selected" &&
        selectedRegistersToExport?.length !== 0
      ) {
        exportDomain = [
          ["id", "in", selectedRegistersToExport?.map((r) => r.id)],
        ];
      }

      const { datas } = await ConnectionProvider.getHandler().exportData({
        model,
        fields: options.selectedKeys,
        domain: exportDomain,
        limit: options.registersAmount === "all" ? 0 : limit,
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
    return convertToExportFields({ fields: viewData });
  }, [model, context, fields]);

  const onGetFieldChilds = useCallback(
    async (key: string) => {
      const sanitizedKey = getSanitizedKey(key);
      const fieldDefinition = getFieldDefinition(sanitizedKey, fields.current);

      const optsForField = fieldDefinition[getChildKey(sanitizedKey)];
      const relation = optsForField.relation;
      const viewData = await ConnectionProvider.getHandler().getFields({
        model: relation,
        context,
        fields: [],
      });

      // We must iterate over each key of viewData in order to replace the string value
      for (const [key, value] of Object.entries(viewData)) {
        viewData[key].string = getTitle({
          parentTitle: optsForField.string,
          title: (value as any).string,
        });
      }

      fields.current[sanitizedKey] = viewData;

      return convertToExportFields({
        fields: viewData,
        parentKey: sanitizedKey,
      });
    },
    [fields.current, model, context]
  );

  const onGetPredefinedExports = useCallback(async () => {
    const predefinedExports = await listPredefinedExports({ model, context });

    const keysWithChilds = await retrieveKeyFieldsForPredefinedExports({
      predefinedExports,
      fields: fields.current,
      onGetFieldChilds,
    });

    // Then we reformat predefined exports to get the title and the correct key with /id if needed
    const predefinedExportsAdjusted = predefinedExports.map((pExport) => {
      return {
        ...pExport,
        fields: pExport.fields.map((field: PredefinedExportField) => {
          const sanitizedKey = getSanitizedKey(field.key);
          const childKey = getChildKey(sanitizedKey);
          const fieldDefinition = getFieldDefinition(
            sanitizedKey,
            fields.current
          );
          const optsForField = fieldDefinition[childKey];
          const relationField = isRelationField(optsForField);
          const parentKey =
            sanitizedKey.indexOf("/") !== -1
              ? getParentKey(sanitizedKey)
              : undefined;
          const newKey = addIdToKeyIfNeeded({
            relationField,
            key: childKey,
            parentKey,
          });
          return {
            key: newKey,
            title: optsForField.string,
          };
        }),
      };
    });

    // We must reformat each key of keysWithChilds to add the '/id' if needed
    const keysWithChildsAdjusted = keysWithChilds.map(({ key, childs }) => {
      const sanitizedKey = getSanitizedKey(key);
      const childKey = getChildKey(sanitizedKey);
      const fieldDefinition = getFieldDefinition(sanitizedKey, fields.current);
      const optsForField = fieldDefinition[childKey];
      const relationField = isRelationField(optsForField);
      const parentKey =
        sanitizedKey.indexOf("/") !== -1
          ? getParentKey(sanitizedKey)
          : undefined;
      const newKey = addIdToKeyIfNeeded({
        relationField,
        key: childKey,
        parentKey,
      });
      return { key: newKey, childs };
    });

    return {
      predefinedExports: predefinedExportsAdjusted,
      keysWithChilds: keysWithChildsAdjusted,
    };
  }, [fields.current]);

  const onSavePredefinedExport = useCallback(
    async (pExport: PredefinedExport) => {
      return {};
    },
    []
  );

  const onRemovePredefinedExport = useCallback(
    async (pExport: PredefinedExport) => {},
    []
  );

  return {
    onGetFields,
    onGetFieldChilds,
    onExport,
    onGetPredefinedExports,
    onSavePredefinedExport,
    onRemovePredefinedExport,
  };
};

const convertToExportFields = ({
  fields,
  parentKey,
}: {
  fields: any;
  parentKey?: string;
}) => {
  const exportFields = [];

  for (const key of Object.keys(fields)) {
    const valuesForField = fields[key];

    if (valuesForField.relation && valuesForField.is_function === true) {
      continue;
    }

    const relationField = isRelationField(valuesForField);

    exportFields.push({
      key: addIdToKeyIfNeeded({ relationField, key, parentKey }),
      title: valuesForField.string,
      tooltip: valuesForField.help,
      required: valuesForField.required,
      isLeaf: !relationField,
    });
  }
  return exportFields;
};

const isRelationField = (fieldDefinition: any) => {
  return (
    fieldDefinition.type === "many2one" ||
    fieldDefinition.type === "one2many" ||
    fieldDefinition.type === "many2many"
  );
};

const addIdToKeyIfNeeded = ({
  relationField,
  parentKey,
  key,
}: {
  relationField: boolean;
  parentKey?: string;
  key: string;
}) => {
  let newKey = `${parentKey ? parentKey + "/" : ""}${key}`;

  if (relationField) {
    newKey += "/id";
  }
  return newKey;
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

const getSanitizedKey = (key: string) => {
  return key.split("/")[key.split("/").length - 1] === "id"
    ? key.split("/").slice(0, -1).join("/")
    : key;
};

const getFieldDefinition = (key: string, fields: any) => {
  if (key.indexOf("/") === -1) {
    return fields["/"];
  } else {
    return fields[getParentKey(key)];
  }
};

const getTitle = ({
  title,
  parentTitle,
}: {
  title: string;
  parentTitle?: string;
}) => {
  return `${parentTitle ? parentTitle + " → " : ""}${title}`;
};

const listPredefinedExports = async ({
  model,
  context,
}: {
  model: string;
  context: any;
}) => {
  const pExports = await ConnectionProvider.getHandler().search({
    model: "ir.exports",
    params: [["resource", "=", model]],
    context,
  });

  const exportLinesIds = pExports.flatMap((exp: any) => exp.export_fields);

  // Now we must read each id of the export lines
  const exportLinesObjects = await ConnectionProvider.getHandler().readObjects({
    model: "ir.exports.line",
    ids: exportLinesIds,
    context,
  });

  return pExports.map((pExport) => ({
    id: pExport.id,
    name: pExport.name,
    fields: pExport.export_fields.map((id: number) => {
      const exportLine = exportLinesObjects.find((e: any) => e.id === id);
      return {
        key: exportLine.name,
      };
    }),
  }));
};

const getKeysWithoutChildsInFields = ({
  fields,
  keys,
}: {
  fields: any;
  keys: string[];
}) => {
  return [
    ...new Set(
      keys
        .filter((key) => {
          if (key.indexOf("/") === -1) {
            return !fields["/"][key];
          } else {
            return !fields[getParentKey(key)];
          }
        })
        .map((key) => getParentKey(key))
        .sort((a, b) => {
          return a.split("/").length - b.split("/").length;
        })
    ),
  ];
};

const retrieveKeyFieldsForPredefinedExports = async ({
  predefinedExports,
  fields,
  onGetFieldChilds,
}: {
  predefinedExports: PredefinedExport[];
  fields: any;
  onGetFieldChilds: (key: string) => Promise<ExportField[]>;
}) => {
  const allPredefinedExportKeys = predefinedExports.flatMap(
    (exp: PredefinedExport) => exp.fields.map((field) => field.key)
  );

  const keysWithoutChildsInFields = getKeysWithoutChildsInFields({
    fields,
    keys: allPredefinedExportKeys,
  });

  const keysWithChilds = [];

  // We must load the fields info for each key if not loaded yet in fields and store them in an array to pass them to the formiga component
  for (const key of keysWithoutChildsInFields) {
    keysWithChilds.push({ key, childs: await onGetFieldChilds(key) });
  }

  return keysWithChilds;
};
