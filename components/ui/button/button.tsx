import React from "react";
import { PropsButton } from "./type";

export const Button: React.FC<PropsButton> = ({
  children,
  onClick,
  className,
  type,
}) => {
  const defaultClassName = "px-4 py-2 bg-primary text-white rounded-md";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultClassName} ${className}`}
    >
      {children}
    </button>
  );
};
