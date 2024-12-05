import { cn } from "../utils";
import React, { HTMLAttributes, ReactNode } from "react";

interface HelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?: "sm" | "lg";
}

const HelperText = ({ children, className, size }: HelperTextProps) => {
  return (
    <span
      className={cn(
        "text-gray-500",
        className,
        size === "sm" ? "text-xs" : "text-sm"
      )}
    >
      {children}
    </span>
  );
};

export default HelperText;