import {
  ExportField,
  ExportOptions,
  PredefinedExport,
  PredefinedExportField,
  useLocale,
} from "@gisce/react-formiga-components";
import { useCallback, useRef } from "react";
import { ConnectionProvider } from "..";
import showInfo from "@/ui/InfoDialog";
import { getMimeType, openBase64InNewTab } from "@/helpers/filesHelper";

export const useExport = ({
  model,
  context,
  selectedRegistersToExport,
  domain,
  limit,
  onClose,
}: {
  model: string;
  context: any;
  selectedRegistersToExport?: any[];
  domain: any[];
  limit?: number;
  onClose: () => void;
}) => {
  const fields = useRef<any>({});
  const exportModelFields = useRef<Map<string, any>>(new Map<string, any>());
  const { t } = useLocale();

  const onExport = useCallback(
    async (options: ExportOptions) => {
      if (
        options.selectedKeys === undefined ||
        options.selectedKeys.length === 0
      ) {
        showInfo(t("selectAtLeastOneField"));
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
        fields: addIdToRelationFields({
          keys: options.selectedKeys,
          fields: fields.current,
        }),
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
    [model, domain, limit, context, onClose],
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
      const fieldDefinition = getFieldDefinition(key, fields.current);
      const optsForField = fieldDefinition[getChildKey(key)];
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

      fields.current[key] = viewData;

      return convertToExportFields({
        fields: viewData,
        parentKey: key,
      });
    },
    [fields.current, model, context],
  );

  const onGetPredefinedExports = useCallback(async () => {
    const predefinedExports = await listPredefinedExports({ model, context });

    const keysWithChilds = await retrieveKeyFieldsForPredefinedExports({
      predefinedExports,
      fields: fields.current,
      onGetFieldChilds,
    });

    // Then we reformat predefined exports to get the title
    const predefinedExportsAdjusted = predefinedExports.map((pExport) => {
      return {
        ...pExport,
        fields: pExport.fields.map((field: PredefinedExportField) => {
          const childKey = getChildKey(field.key);
          const fieldDefinition = getFieldDefinition(field.key, fields.current);
          const optsForField = fieldDefinition[childKey];
          return {
            key: field.key,
            title: optsForField.string,
          };
        }),
      };
    });

    return {
      predefinedExports: predefinedExportsAdjusted,
      keysWithChilds,
    };
  }, [fields.current]);

  const onSavePredefinedExport = useCallback(
    async (pExport: PredefinedExport) => {
      const fieldsForExport = await getModelFields("ir.exports");
      const fieldsForExportLine = await getModelFields("ir.exports.line");

      // First we must create the parent object
      const exportId = await ConnectionProvider.getHandler().create({
        model: "ir.exports",
        values: {
          name: pExport.name,
          resource: model,
        },
        fields: fieldsForExport,
        context,
      });

      // We create the lines
      await Promise.all(
        pExport.fields.map(async (field: any) => {
          return await ConnectionProvider.getHandler().create({
            model: "ir.exports.line",
            values: {
              name: field.key,
              export_id: exportId,
            },
            fields: fieldsForExportLine,
            context,
          });
        }),
      );

      return { ...pExport, id: exportId };
    },
    [],
  );

  const onRemovePredefinedExport = useCallback(
    async (pExport: PredefinedExport) => {
      await ConnectionProvider.getHandler().deleteObjects({
        model: "ir.exports",
        ids: [pExport.id!],
        context,
      });
    },
    [],
  );

  const getModelFields = useCallback(
    async (model: string) => {
      if (exportModelFields.current.has(model)) {
        return exportModelFields.current.get(model);
      }

      const fieldsForModel = ConnectionProvider.getHandler().getFields({
        model,
        context,
        fields: [],
      });

      exportModelFields.current.set(model, fieldsForModel);
    },
    [exportModelFields, context],
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
      key: compoundId({ key, parentKey }),
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

const compoundId = ({
  parentKey,
  key,
}: {
  parentKey?: string;
  key: string;
}) => {
  return `${parentKey ? parentKey + "/" : ""}${key}`;
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
  return splitAndSortKeys([
    ...new Set(
      keys
        .filter((key) => {
          if (key.indexOf("/") === -1) {
            return !fields["/"]?.[key];
          } else {
            return !fields?.[getParentKey(key)]?.[key];
          }
        })
        .map((key) => getParentKey(key)),
    ),
  ]);
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
    (exp: PredefinedExport) => exp.fields.map((field: any) => field.key),
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

const addIdToRelationFields = ({
  keys,
  fields,
}: {
  keys: string[];
  fields: any;
}) =>
  keys.map((key) => {
    const childKey = getChildKey(key);
    const fieldDefinition = getFieldDefinition(key, fields);
    const optsForField = fieldDefinition[childKey];
    const relationField = isRelationField(optsForField);
    return relationField ? `${key}/id` : key;
  });

const splitAndSortKeys = (keys: string[]): string[] => {
  // We must split the keys that have more than one level (character / ocurrences in the string > 1)
  // Into an array of keys with only one level
  // For example: "partner_id/country_id/name" => ["partner_id", "partner_id/country_id", "partner_id/country_id/name"]
  // We must do this because we must load the fields info for each key if not loaded yet in fields
  // And we must load the fields info for the parent key first
  //
  // We must also sort the keys by the number of levels they have
  // For example: ["partner_id", "partner_id/country_id", "partner_id/country_id/name"]

  const keysMap: Map<string, boolean> = new Map();
  const result: string[] = [];

  // Split keys with more than one level
  for (const key of keys) {
    const subKeys = key.split("/");
    let parentKey = "";
    for (const subKey of subKeys) {
      const currentKey = parentKey ? `${parentKey}/${subKey}` : subKey;
      if (!keysMap.has(currentKey)) {
        result.push(currentKey);
        keysMap.set(currentKey, true);
      }
      parentKey = currentKey;
    }
  }

  // Sort keys by number of levels
  result.sort((a, b) => {
    const aLevels = a.split("/").length;
    const bLevels = b.split("/").length;
    return aLevels - bLevels;
  });

  return result;
};
