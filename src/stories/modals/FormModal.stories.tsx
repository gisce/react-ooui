import React, { useState } from "react";
import { Button } from "antd";

import { FormModal } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Modals/FormModal",
};

export const Default = (): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <LocaleProvider lang="en_US">
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open modal
      </Button>
      <FormModal
        visible={visible}
        model={"giscedata.cups.ps"}
        id={6}
        onCancel={() => {
          setVisible(false);
        }}
        onSubmitSucceed={(value: any) => {
          setVisible(false);
        }}
      />
    </LocaleProvider>
  );
};
