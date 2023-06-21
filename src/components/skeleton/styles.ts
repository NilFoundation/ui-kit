import { StyleObject } from "styletron-react";

export const containerStyles: StyleObject = {
  display: "flex",
  flexDirection: "column",
};

export const getWrapperStyles = (isAnimation: boolean): StyleObject => ({
  width: "100%",
  height: "100%",
  backgroundSize: "400% 100%",
  backgroundImage:
    "linear-gradient(135deg, rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(31, 31, 31), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51))",
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-out",
  animationName: isAnimation
    ? {
        "0%": {
          backgroundPosition: "100% 50%",
        },
        "100%": {
          backgroundPosition: "0% 50%",
        },
      }
    : "unset",
});

export const rowItemStyles: StyleObject = {
  marginBottom: "10px",

  ":last-child": {
    marginBottom: "0",
  },
};
