import { FC, ReactNode } from "react";
import { styled } from "baseui";

type SpinnerBlockProps = {
  children?: ReactNode;
  className?: string;
};

const SpinnerBlock: FC<SpinnerBlockProps> = ({ children, className }) => {
  const RotatedBlock = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "max-content",
  });

  return <RotatedBlock className={className}>{children}</RotatedBlock>;
};

export default SpinnerBlock;
