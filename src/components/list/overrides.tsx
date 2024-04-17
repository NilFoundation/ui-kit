import { HeadingOverrides, LabelOverrides, ListOverrides } from "baseui/list";
import {
  listHeadingContainerStyles,
  listHeadingContentStyles,
  listHeadingEnhancerStyles,
  listItemContentActiveStyles,
  listItemContentDisabledStyles,
  listItemContentStyles,
} from "./styles";
import { COLORS } from "../../shared";

export const getListItemOverrides = (isActive: boolean, isDisabled: boolean): ListOverrides => {
  return {
    Content: {
      style: () => {
        return {
          ...listItemContentStyles,
          ...(isActive ? listItemContentActiveStyles : {}),
          ...(isDisabled ? listItemContentDisabledStyles : {}),
        };
      },
    },
    ArtworkContainer: {
      style: () => {
        return {
          color: COLORS.white,
          size: "40px",
        };
      },
    },
  };
};

export const getListItemLabelOverrides = (isDisabled: boolean): LabelOverrides => {
  return {
    LabelContent: {
      style: () => {
        return {
          color: "inherit",
        };
      },
    },
    LabelDescription: {
      style: () => {
        return {
          color: isDisabled ? COLORS.gray600 : COLORS.gray500,
        };
      },
    },
  };
};

export const getListHeadingOverrides = (): HeadingOverrides => {
  return {
    Content: {
      style: {
        ...listHeadingContentStyles,
      },
    },
    HeadingContainer: {
      style: {
        ...listHeadingContainerStyles,
      },
    },
    EndEnhancerContainer: {
      style: {
        ...listHeadingEnhancerStyles,
      },
    },
  };
};
