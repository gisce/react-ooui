import { Spin } from "antd";

export const CenteredSpinner = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin />
    </div>
  );
};
