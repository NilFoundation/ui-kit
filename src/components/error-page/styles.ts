import { PRIMITIVE_COLORS, svgInlineDotsPattern } from "../../shared";
import { StyleObject } from "styletron-standard";

const containerStyles = {
  width: "100%",
  height: "100%",
  color: PRIMITIVE_COLORS.white,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  background: `url(${svgInlineDotsPattern}), repeat`,
};

const colBaseStyles = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
} as const;

const columnsStyles = [...Array(4).keys()].reduce((acc, curr) => {
  const colStart = curr === 0 || curr === 1 ? curr + 1 : curr + 2;
  const colEnd = curr === 0 ? curr + 2 : curr + 3;

  return {
    ...acc,
    [`col-${curr}`]: {
      ...colBaseStyles,
      gridColumnStart: colStart.toString(),
      gridColumnEnd: colEnd.toString(),
    },
  };
}, {} as Record<`col-${number}`, StyleObject>);

const iconStyles = {
  width: "18px",
  height: "14px",
  marginRight: "6px",
  transform: "rotate(270deg)",
};

const errorContainerStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  flexGrow: "1",
};

const errorDescrStyles = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
} as const;

export const styles = {
  containerStyles,
  iconStyles,
  errorContainerStyles,
  columnsStyles,
  errorDescrStyles,
};
