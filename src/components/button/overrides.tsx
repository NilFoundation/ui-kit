import { ButtonOverrides } from "baseui/button";
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "./Button";
import { PRIMITIVE_COLORS } from "../../shared";
import { Spinner } from "../spinner";
import {
  getBackgroundColor,
  getHoverBackgroundColor,
  getSpinnerColor,
  getSpinnerSize,
  getSquareButtonPaddings,
} from "./style";

export const getButtonOverrides = (
  kind: BUTTON_KIND | undefined,
  shape: BUTTON_SHAPE | undefined,
  size: BUTTON_SIZE | undefined
): ButtonOverrides => {
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
        padding: getSquareButtonPaddings(size, shape),
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
