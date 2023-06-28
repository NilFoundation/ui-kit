import { FC } from "react";
import { styled } from "baseui";
import { styledWhiteDash } from "../styles";

const WhiteDash: FC = () => {
  const WhiteDash = styled("div", styledWhiteDash);

  return <WhiteDash />;
};

export default WhiteDash;
