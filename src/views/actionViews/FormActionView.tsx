import FormActionBar from "@/actionbar/FormActionBar";
import { FormView } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import Form from "@/widgets/views/Form";
import React from "react";

export type FormActionViewProps = {
  formView?: FormView;
  visible: boolean;
  formRef: any;
  model: string;
  currentId?: number;
  domain: any;
  context: any;
  defaultValues?: any;
  forcedValues?: any;
  results: any[];
  setResults: (value: any[]) => void;
  setCurrentItemIndex: (value?: number) => void;
};

export const FormActionView = (props: FormActionViewProps) => {
  const {
    visible,
    formRef,
    model,
    currentId,
    domain,
    formView,
    context,
    defaultValues,
    forcedValues,
    results,
    setResults,
    setCurrentItemIndex,
  } = props;

  return (
    <>
      <div style={!visible ? { display: "none" } : {}}>
        <TitleHeader>
          <FormActionBar />
        </TitleHeader>
      </div>
      <Form
        visible={visible}
        rootForm={true}
        ref={formRef}
        model={model}
        defaultValues={defaultValues}
        forcedValues={forcedValues}
        formView={formView}
        actionDomain={domain}
        id={currentId}
        parentContext={context}
        onSubmitSucceed={(id, values) => {
          const itemIndex = results!.findIndex((item: any) => {
            return item.id === id;
          });
          if (itemIndex === -1) {
            results!.push(values);
            setResults(results);
            setCurrentItemIndex(results!.length - 1);
          }
        }}
      />
    </>
  );
};
