import ConnectionProvider from "@/ConnectionProvider";
import { transformPlainMany2Ones } from "@/helpers/formHelper";
import { transformDomainForChildWidget } from "@gisce/ooui";
import { useContext, useEffect, useRef } from "react";
import { FormContext, FormContextType } from "@/context/FormContext";

export const useOne2ManyDomain = ({
  fieldName,
  widgetDomain,
}: {
  fieldName: string;
  widgetDomain?: string;
}) => {
  const transformedDomain = useRef<any[]>([]);
  const {
    getFields,
    getValues,
    getContext,
    domain: formDomain,
  } = (useContext(FormContext) as FormContextType) || {};

  useEffect(() => {
    parseDomain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formDomain]);

  async function parseDomain() {
    if (widgetDomain) {
      transformedDomain.current =
        await ConnectionProvider.getHandler().evalDomain({
          domain: widgetDomain,
          values: transformPlainMany2Ones({
            fields: getFields(),
            values: getValues(),
          }),
          fields: getFields(),
          context: getContext(),
        });
    }

    if (formDomain && formDomain.length > 0) {
      transformedDomain.current = transformedDomain.current.concat(
        transformDomainForChildWidget({
          domain: formDomain,
          widgetFieldName: fieldName,
        }),
      );
    }
  }

  return transformedDomain.current;
};
