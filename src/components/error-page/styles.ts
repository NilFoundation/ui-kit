import { PRIMITIVE_COLORS, svgInlineDotsPattern } from "../../shared";
import { StyleObject } from "styletron-standard";

export const mobileScreenMaxWidth = 767;
export const desktopMediaQuery = `@media (min-width: ${mobileScreenMaxWidth + 1}px)`;
export const mobileMediaQuery = `@media (max-width: ${mobileScreenMaxWidth}px)`;

const containerStyles = {
  width: "100%",
  height: "100%",
  color: PRIMITIVE_COLORS.white,
  flexGrow: "1",
  background: `url(${svgInlineDotsPattern}), repeat`,
  [desktopMediaQuery]: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  },
};

const colBaseStyles = {
  display: "flex",
  flexDirection: "column",
  [desktopMediaQuery]: {
    height: "100%",
  },
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
