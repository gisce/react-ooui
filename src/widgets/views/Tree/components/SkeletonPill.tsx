import { CSSProperties } from "react";

const containerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  minHeight: "inherit",
  padding: "8px 0",
};

const skeletonStyle: CSSProperties = {
  height: "16px",
  width: "100%",
  backgroundColor: "#f0f0f0",
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden",
};

const shimmerStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
  animation: "shimmer 1.5s infinite",
};

const SkeletonPill = () => {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={skeletonStyle}>
          <div style={shimmerStyle} />
        </div>
      </div>
    </>
  );
};

export { SkeletonPill };
