import { styled } from "styletron-react";
import { COLORS } from "../../../shared";

const blockStyles = {
  background: COLORS.gray900,
  display: "flex",
  flexDirection: "column",
  flexGrow: "1",
} as const;

const Block = styled("div", blockStyles);

export default Block;
