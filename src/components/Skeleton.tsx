import { cn } from "../utils";
import React from "react";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  animation?: "wave" | "pulse" | "shimmer";
  circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "100%",
  circle = false,
  animation = "shimmer",
}) => {
  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: circle ? "50%" : undefined,
    display: "block",
  };

  return (
    <span
      className={cn(
        "skeleton rounded-lg",
        circle ? "circle" : "",
        animation === "shimmer" && "skeleton-shimmer",
        animation === "wave" && "skeleton-wave",
        animation === "pulse" && "skeleton-pulse"
      )}
      style={style}
    ></span>
  );
};

export default Skeleton;
