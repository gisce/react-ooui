import isEmail from "validator/lib/isEmail";
import Field from "@/common/Field";

import { WidgetProps } from "@/types";
import { LinkInput } from "./LinkInput";
import { Email as EmailOoui } from "@gisce/ooui";

import { EmailTagsInput } from "@/widgets/custom/EmailTags";

type EmailProps = WidgetProps & {
  ooui: EmailOoui;
};

export const Email = (props: EmailProps) => {
  const { ooui } = props;
  const { required } = ooui as EmailOoui;

  return (
    <Field required={required} {...props}>
      {ooui.multi ? (
        <EmailTagsInput readonly={ooui.readOnly} maxLength={ooui.size} />
      ) : (
        <LinkInput
          ooui={ooui}
          linkPrefix={"mailto:"}
          valueValidator={(value) => {
            if (!value) {
              return false;
            }
            return isEmail(value, { allow_display_name: true });
          }}
        />
      )}
    </Field>
  );
};
