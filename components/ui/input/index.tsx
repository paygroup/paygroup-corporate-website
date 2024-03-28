import React from "react";
import { PropsInput } from "./type";

export const InputField: React.FC<PropsInput> = ({
  type,
  name,
  id,
  onChange,
  className,
  placeholder,
}) => {
  const defaultClassName =
    "block  rounded-md border-0 py-2.5 pl-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`${defaultClassName} ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
