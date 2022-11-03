import React, { useState } from "react";
import { Button } from "antd";

import { ExportModal } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Modals/ExportModal",
};

export const Default = (): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);

  return <ExportModal />;
};
