import { StyleObject } from "styletron-standard";
import { isTouch } from "../utils/isTouch";
import { CSSProperties } from "react";

type Position = CSSProperties["top"];

export const tapAreaStyles = ({
  top,
  right,
  bottom,
  left,
}: {
  top?: Position;
  right?: Position;
  bottom?: Position;
  left?: Position;
}): StyleObject => {
  if (!isTouch()) {
    return {};
  }

  return {
    position: "relative",
    "::after": {
      content: '""',
      position: "absolute",
      top: top ? `-${top}` : undefined,
      right: right ? `-${right}` : undefined,
      bottom: bottom ? `-${bottom}` : undefined,
      left: left ? `-${left}` : undefined,
    },
  };
};
