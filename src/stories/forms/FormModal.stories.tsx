import React, { useState } from "react";
import { Button } from "antd";

import { FormModal } from "../..";

export default {
  title: "Components/Widgets/Forms/FormModal",
};

export const Default = (): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
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
    </>
  );
};
