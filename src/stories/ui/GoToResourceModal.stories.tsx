import React from "react";

import { GoToResourceModal } from "../../ui/GoToResourceModal";
import LocaleProvider from "../../context/LocaleContext";

// import "antd/dist/antd.css";


export default {
  title: "Components/Widgets/UI/GoToResourceModal",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <GoToResourceModal
        visible={true}
        onCancel={() => {
          alert("cancel");
        }}
        onIdSubmitted={(id) => {
          alert(id);
        }}
      />
    </LocaleProvider>
  );
};
