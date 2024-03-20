import FormActionBar from "@/actionbar/FormActionBar";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useNavigation } from "@/context/RootContext";
import { FormView } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import Form from "@/widgets/views/Form";

export type FormActionViewProps = {
  formView?: FormView;
};

export const FormActionView = (props: FormActionViewProps) => {
  const {
    formView,
    // context,
    // defaultValues,
    // forcedValues,
    // results,
    // setResults,
    // setCurrentItemIndex,
  } = props;

  const {
    currentView,
    formRef,
    tab,
    currentId,
    treeResults,
    setTreeResults,
    setCurrentItemIndex,
  } = useActionViewContext();

  const visible =
    currentView!.type === formView?.type &&
    currentView!.view_id === formView.view_id;

  if (!visible || !tab) {
    return null;
  }

  const { model, domain } = tab;
  const { defaultValues, forcedValues } = tab.viewOptions?.form || {};

  return (
    <>
      <TitleHeader title={formView.title!}>
        <FormActionBar toolbar={formView?.toolbar} />
      </TitleHeader>
      <Form
        rootForm={true}
        ref={formRef}
        model={model!}
        defaultValues={defaultValues}
        forcedValues={forcedValues}
        formView={formView}
        actionDomain={tab.domain}
        id={currentId}
        parentContext={domain}
        onSubmitSucceed={(id, values) => {
          if (!treeResults) {
            return;
          }
          const itemIndex = treeResults.findIndex((item: any) => {
            return item.id === id;
          });
          if (itemIndex === -1) {
            treeResults.push(values);
            setTreeResults?.(treeResults);
            setCurrentItemIndex?.(treeResults!.length - 1);
          }
        }}
      />
    </>
  );
};
