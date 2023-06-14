import React from "react";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

type StoriesLayoutProps = {
  children: React.ReactNode;
};

const containerStyles: StyleObject = {
  display: "flex",
  alignItems: "flex-end",
  gridGap: "12px",
};

const StoriesLayout: React.FC<StoriesLayoutProps> = ({ children }) => {
  const [css] = useStyletron();

  return <div className={css(containerStyles)}>{children}</div>;
};

export default StoriesLayout;
