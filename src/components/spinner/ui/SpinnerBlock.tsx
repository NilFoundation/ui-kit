import { FC, ReactNode } from "react";
import { styled } from "styletron-react";
import { VisuallyHidden } from "../../../shared/ui/visually-hidden/VisuallyHidden";

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

  return (
    <RotatedBlock role="status" className={className}>
      {children}
      <VisuallyHidden>loading</VisuallyHidden>
    </RotatedBlock>
  );
};

export default SpinnerBlock;
