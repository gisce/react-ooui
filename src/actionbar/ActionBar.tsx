import React from "react";
import { Space, Row } from "antd";
import {
  SaveOutlined,
  LoadingOutlined,
  SearchOutlined,
  RightOutlined,
  LeftOutlined,
  FormOutlined,
} from "@ant-design/icons";

type Props = {
  saveButtonHidden: boolean;
  saveButtonCallback: () => void;
  saveButtonLoading: boolean;
  saveButtonDisabled: boolean;
  showTreeButtonHidden: boolean;
  showTreeButtonCallback: () => void;
  showFormButtonHidden: boolean;
  showFormButtonCallback: () => void;
};

function ActionBar(props: Props) {
  const {
    saveButtonHidden,
    saveButtonCallback,
    saveButtonLoading,
    saveButtonDisabled,
    showTreeButtonHidden,
    showTreeButtonCallback,
    showFormButtonHidden,
    showFormButtonCallback,
  } = props;

  return (
    <Space>
      <ActionButton
        hidden={saveButtonHidden}
        icon={saveButtonLoading ? LoadingOutlined : SaveOutlined}
        disabled={saveButtonDisabled}
        label={"Save"}
        callback={saveButtonCallback}
      />
      {!saveButtonHidden && separator()}
      {/* <ActionButton
        icon={LeftOutlined}
        label={"Back"}
        hidden={false}
        callback={() => {}}
      />
      <ActionButton
        icon={RightOutlined}
        label={"Forward"}
        hidden={false}
        callback={() => {}}
      />
      {separator()} */}
      <ActionButton
        icon={SearchOutlined}
        label={"List"}
        hidden={showTreeButtonHidden}
        callback={showTreeButtonCallback}
      />
      <ActionButton
        icon={FormOutlined}
        label={"Form"}
        hidden={showFormButtonHidden}
        callback={showFormButtonCallback}
      />
    </Space>
  );
}

function ActionButton({
  icon,
  label,
  hidden,
  disabled = false,
  callback,
}: {
  icon: any;
  label: string;
  hidden: boolean;
  disabled?: boolean;
  callback: () => void;
}) {
  if (hidden) return null;
  const Icon = icon;
  return (
    <button
      disabled={disabled}
      className="ant-btn"
      onClick={callback}
      style={{
        width: 85,
        height: 65,
        flex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "block" }}>
          <Row justify="center">
            <Icon style={{ fontSize: "1.4em" }} />
          </Row>
          <Row justify="center" className="mt-1">
            {label}
          </Row>
        </div>
      </div>
    </button>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default ActionBar;
