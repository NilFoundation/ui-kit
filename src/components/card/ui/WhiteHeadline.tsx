import { FC } from "react";
import { styled } from "baseui";
import { styledWhiteHeadline } from "../styles";

const WhiteHeadline: FC = () => {
  const WhiteHeadline = styled("div", styledWhiteHeadline);

  return <WhiteHeadline />;
};

export default WhiteHeadline;
