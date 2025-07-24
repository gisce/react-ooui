import ConnectionProvider from "@/ConnectionProvider";
import { transformPlainMany2Ones } from "@/helpers/formHelper";
import { transformDomainForChildWidget } from "@gisce/ooui";
import { useCallback, useContext, useState } from "react";
import { FormContext, FormContextType } from "@/context/FormContext";
import { useDeepCompareEffect } from "use-deep-compare";

export const useOne2ManyDomain = ({
  fieldName,
  widgetDomain,
}: {
  fieldName: string;
  widgetDomain?: string;
}) => {
  const [transformedDomain, setTransformedDomain] = useState<any[]>([]);
  const {
    getFields,
    getContext,
    domain: formDomain,
    getAllHierarchyValues,
  } = (useContext(FormContext) as FormContextType) || {};

  useDeepCompareEffect(() => {
    parseDomain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formDomain]);

  useDeepCompareEffect(() => {
    parseDomain();
  }, [getAllHierarchyValues()]);

  const parseDomain = useCallback(async () => {
    let tempTransformedDomain: any[] = [];

    if (widgetDomain) {
      tempTransformedDomain = await ConnectionProvider.getHandler().evalDomain({
        domain: widgetDomain,
        values: transformPlainMany2Ones({
          fields: getFields(),
          values: getAllHierarchyValues(),
        }),
        fields: getFields(),
        context: getContext(),
      });
    }

    if (formDomain && formDomain.length > 0) {
      tempTransformedDomain = tempTransformedDomain.concat(
        transformDomainForChildWidget({
          domain: formDomain,
          widgetFieldName: fieldName,
        }),
      );
    }

    if (tempTransformedDomain.length > 0) {
      setTransformedDomain(tempTransformedDomain);
    }
  }, [
    widgetDomain,
    formDomain,
    getFields,
    getAllHierarchyValues,
    getContext,
    fieldName,
  ]);

  return transformedDomain;
};
