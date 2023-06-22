import { ButtonOverrides } from "baseui/button";
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";
import { Spinner } from "../spinner";
import {
  getBackgroundColor,
  getHoverBackgroundColor,
  getSpinnerColor,
  getSpinnerSize,
  getSquareButtonPaddings,
} from "./style";

export const getButtonOverrides = (kind: BUTTON_KIND, shape: BUTTON_SHAPE, size: BUTTON_SIZE): ButtonOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => ({
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: "2px",
        borderTopLeftRadius: "2px",
        borderBottomRightRadius: "2px",
        borderTopRightRadius: "2px",
        backgroundColor: getBackgroundColor(kind),
        padding: shape === BUTTON_SHAPE.square ? getSquareButtonPaddings(size) : "",
        ":disabled": {
          color: PRIMITIVE_COLORS.primary500,
          backgroundColor: PRIMITIVE_COLORS.mono600,
        },
        ":hover": {
          backgroundColor: getHoverBackgroundColor(kind, $disabled),
        },
      }),
    },
    StartEnhancer: {
      style: {
        marginRight: "8px",
      },
    },
    EndEnhancer: {
      style: {
        marginLeft: "8px",
      },
    },
    LoadingSpinner: {
      component: ({ $disabled }) => <Spinner color={getSpinnerColor(kind, $disabled)} size={getSpinnerSize(size)} />,
    },
    LoadingSpinnerContainer: {
      style: {
        marginTop: "0px",
        marginBottom: "0px",
        paddingLeft: shape !== "square" ? "10px" : "0px",
        paddingRight: shape !== "square" ? "10px" : "0px",
      },
    },
  };
};
