import { Label as LabelOoui } from "ooui";

type Props = {
  ooui: LabelOoui;
};

const Label = (props: Props) => {
  const { ooui } = props;
  return ooui.label;
};

export default Label;
