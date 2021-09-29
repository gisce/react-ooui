import React, { useState } from "react";
import { Button } from "antd";

import { SearchModal } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Modals/SearchModal",
};

export const Default = (): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <LocaleProvider lang="en_GB">
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
    </LocaleProvider>
  );
};
