import { TagOverrides } from "baseui/tag";
import {
  tagRootBaseStyles,
  tagRootKindModifiedStyles,
  mediumStyles,
  smallStyles,
  tagRootFillKindModifiedStyles,
  tagRootFillBaseStyles,
} from "./styles";
import { TAG_KIND, TAG_SIZE } from "./types";
import { CloseIcon } from "../icons";

export const getTagOverrides = (kind: TAG_KIND, size: TAG_SIZE, fill: boolean): TagOverrides => {
  return {
    Root: {
      style: () => {
        return {
          ...tagRootBaseStyles,
          ...(size === TAG_SIZE.m ? mediumStyles : smallStyles),
          ...(fill ? tagRootFillBaseStyles : {}),
          ...(fill ? tagRootFillKindModifiedStyles[kind] : tagRootKindModifiedStyles[kind]),
        };
      },
    },
    Action: {
      style: {
        marginLeft: "4px",
      },
    },
    ActionIcon: {
      component: ({ ...props }) => <CloseIcon {...props} size={16} />,
    },
  };
};
