import React from "react";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";

type InputStoryWrapperProps = {
  children: React.ReactNode;
};

const containerStyles: StyleObject = {
  width: "400px",
};

const InputStoryWrapper: React.FC<InputStoryWrapperProps> = ({ children }) => {
  const [css] = useStyletron();

  return <div className={css(containerStyles)}>{children}</div>;
};

export default InputStoryWrapper;
