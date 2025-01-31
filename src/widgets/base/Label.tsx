import { useContext } from "react";
import { Tooltip, Typography, theme } from "antd";
import { WidgetProps } from "@/types";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Label as LabelOoui } from "@gisce/ooui";
import { FormContext, FormContextType } from "@/context/FormContext";
import { Interweave } from "interweave";
import dayjs from "@/helpers/dayjs";
const { Text, Title } = Typography;
const { useToken } = theme;

type Props = WidgetProps & {
  ooui: LabelOoui;
  align?: "left" | "center" | "right";
  responsiveBehaviour?: boolean;
};

const alignClass = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

const Label = (props: Props) => {
  const { ooui, align, responsiveBehaviour } = props;
  const { label, tooltip, fieldForLabel, labelSize, labelType } = ooui;
  const formContext = useContext(FormContext) as FormContextType;
  const addColon = fieldForLabel !== null;
  let labelText = addColon && label.length > 1 ? label + " :" : label;
  let labelTitle = "";
  if (!ooui.fieldForLabel && ooui._id) {
    labelText = formContext.getFieldValue(ooui._id);
    if (
      ooui.fieldType === "date" ||
      ooui.fieldType === "time" ||
      ooui.fieldType === "datetime"
    ) {
      const formats = {
        date: "DD/MM/YYYY",
        time: "HH:mm",
        datetime: "DD/MM/YYYY HH:mm",
      };
      labelTitle = labelText
        ? dayjs(labelText).format(
            formats[ooui.fieldType as keyof typeof formats],
          )
        : "";
      if (ooui.humanDate) {
        labelText = labelText ? dayjs(labelText).fromNow() : "";
      } else {
        labelText = labelTitle;
        labelTitle = "";
      }
    }
  }
  const responsiveAlign = responsiveBehaviour ? "left" : "right";
  const labelAlgin = align || (fieldForLabel ? responsiveAlign : "left");
  const { token } = useToken();

  const TextType = labelSize === undefined ? Text : Title;

  return (
    <div
      className={`flex flex-row items-center pb-1 pt-1 ${alignClass[labelAlgin]}`}
    >
      {tooltip && (
        <Tooltip title={tooltip}>
          <QuestionCircleOutlined
            className="pr-1 text-xs"
            style={{
              color: token.colorPrimary,
            }}
          />
        </Tooltip>
      )}
      <span className="pr-2" title={labelTitle}>
        <TextType level={labelSize} type={labelType as any}>
          <Interweave content={labelText} />
        </TextType>
      </span>
    </div>
  );
};

export default Label;
