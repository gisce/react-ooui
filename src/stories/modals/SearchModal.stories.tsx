import React, { useState } from "react";
import { Button } from "antd";

import { SearchModal } from "../..";

export default {
  title: "Components/Widgets/Modals/SearchModal",
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
      <SearchModal
        nameSearch="test"
        visible={visible}
        model={"giscedata.cups.ps"}
        onSelectValue={(selectedValue: any) => {
          console.log(selectedValue);
          setVisible(false);
        }}
        onCloseModal={() => {
          setVisible(false);
        }}
      />
    </>
  );
};
