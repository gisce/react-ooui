import { RightCircleOutlined } from "@ant-design/icons";
import {
  Dropdown,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@gisce/react-formiga-components";

export type Many2oneSuffixUiProps = {
  onRetrieveData: () => Promise<DropdownMenuGroup[]>;
  onItemClick?: (item: DropdownMenuItem) => void;
};

export const Many2oneSuffixUi = ({
  onRetrieveData,
  onItemClick,
}: Many2oneSuffixUiProps) => {
  return (
    <Dropdown
      onRetrieveData={onRetrieveData}
      onItemClick={onItemClick}
      maxHeight={300}
      trigger={["click"]}
    >
      <RightCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
    </Dropdown>
  );
};
