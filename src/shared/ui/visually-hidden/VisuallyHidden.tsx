import { FC } from "react";
import { styled } from "styletron-react";

type VisuallyHiddenProps = {
  children: React.ReactNode;
};

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({ children }) => {
  const Container = styled("div", {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    border: "0",
  });

  return <Container>{children}</Container>;
};
