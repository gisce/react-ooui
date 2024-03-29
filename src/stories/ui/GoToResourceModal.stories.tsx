import React from "react";

import { GoToResourceModal } from "../../ui/GoToResourceModal";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/UI/GoToResourceModal",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <GoToResourceModal
        visible={true}
        isSearching={false}
        onCancel={() => {
          alert("cancel");
        }}
        onIdSubmitted={(ids) => {
          alert(ids);
        }}
      />
    </LocaleProvider>
  );
};
