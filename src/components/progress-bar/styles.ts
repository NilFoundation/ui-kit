import { StyleObject } from "styletron-react";
import { PROGRESS_BAR_SIZE } from "./types";
import { COLORS } from "../../shared";

export const containerStyles: StyleObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

export const getProgressWrapperStyles = (size: PROGRESS_BAR_SIZE): StyleObject => {
  const heightBySize = {
    [PROGRESS_BAR_SIZE.small]: "4px",
    [PROGRESS_BAR_SIZE.medium]: "8px",
    [PROGRESS_BAR_SIZE.large]: "12px",
  };

  return {
    display: "flex",
    alignItems: "central",
    width: "100%",
    height: heightBySize[size],
    border: "none",
    transition: "backgroundImage .2s ease-in",
  };
};

export const dashedBlockStyles: StyleObject = {
  width: "4px",
  height: "100%",
};

export const dashedBlockActiveStyles: StyleObject = {
  backgroundImage: `linear-gradient(to right, ${COLORS.white} 50%, transparent 50%)`,
};

export const dashedBlockErrorStyles: StyleObject = {
  backgroundImage: `linear-gradient(to right, ${COLORS.red400} 50%, transparent 50%)`,
};

export const dashedBlockNotActiveStyles: StyleObject = {
  backgroundImage: `linear-gradient(to right, ${COLORS.gray700} 50%, transparent 50%)`,
};

export const labelStyles: StyleObject = {
  marginTop: "12px",
};

export const getDashedBlockInfiniteStyles = (index: number, totalAmountOfBlocks: number): StyleObject => {
  const timePerOneBlock = 0.015;
  const animationDuration = totalAmountOfBlocks * timePerOneBlock;
  const animationDelay = index * timePerOneBlock;

  return {
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`,
    animationIterationCount: "infinite",
    backgroundImage: `linear-gradient(to right, ${COLORS.gray700} 50%, transparent 50%)`,
    animationName: {
      from: {
        backgroundImage: `linear-gradient(to right, ${COLORS.white} 50%, transparent 50%)`,
      },
      to: {
        backgroundImage: `linear-gradient(to right, ${COLORS.gray700} 50%, transparent 50%)`,
      },
    },
  };
};
