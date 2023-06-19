import ConnectionProvider from "@/ConnectionProvider";
import {
  ExportModal as ExportModalFmg,
  Locale,
} from "@gisce/react-formiga-components";
import React from "react";
import { useExport } from "@/hooks/useExport";

export type ExportModalProps = {
  visible: boolean;
  locale: string;
  onClose: () => void;
  selectedRegistersToExport?: any[];
  totalRegisters: number;
  model: string;
  domain: any[];
  limit?: number;
  context?: any;
  visibleRegisters: number;
};

export const ExportModal = (props: ExportModalProps) => {
  const {
    visible,
    locale,
    onClose,
    model,
    context,
    selectedRegistersToExport,
    totalRegisters,
    domain,
    limit,
    visibleRegisters,
  } = props;

  const {
    onExport,
    onGetFieldChilds,
    onGetFields,
    onGetPredefinedExports,
    onSavePredefinedExport,
    onRemovePredefinedExport,
  } = useExport({
    model,
    context,
    domain,
    limit,
    selectedRegistersToExport,
    onClose,
    locale,
  });

  return (
    <ExportModalFmg
      visible={visible}
      locale={locale as Locale}
      onSucceed={onExport}
      onCancel={onClose}
      selectedRegistersToExport={
        selectedRegistersToExport &&
        selectedRegistersToExport.length &&
        selectedRegistersToExport.length > 0
          ? selectedRegistersToExport.length
          : undefined
      }
      totalRegisters={totalRegisters}
      onGetFieldChilds={onGetFieldChilds}
      onGetFields={onGetFields}
      visibleRegisters={visibleRegisters}
      onGetPredefinedExports={onGetPredefinedExports}
      onSavePredefinedExport={onSavePredefinedExport}
      onRemovePredefinedExport={onRemovePredefinedExport}
    />
  );
};
