import React from "react";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

type StoriesLayoutProps = {
  children: React.ReactNode;
  isColumn?: boolean;
};

const containerStyles: StyleObject = {
  display: "flex",
  alignItems: "flex-start",
  gridGap: "12px",
  flexWrap: "wrap",
};

const StoriesLayout: React.FC<StoriesLayoutProps> = ({ children, isColumn }) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        ...containerStyles,
        flexDirection: isColumn ? "column" : "row",
      })}
    >
      {children}
    </div>
  );
};

export default StoriesLayout;
