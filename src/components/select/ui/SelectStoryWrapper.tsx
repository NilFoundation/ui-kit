import React from "react";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";

type SelectStoryWrapperProps = {
  children: React.ReactNode;
};

const containerStyles: StyleObject = {
  width: "400px",
};

const SelectStoryWrapper: React.FC<SelectStoryWrapperProps> = ({ children }) => {
  const [css] = useStyletron();

  return <div className={css(containerStyles)}>{children}</div>;
};

export default SelectStoryWrapper;
