import { TagOverrides } from "baseui/tag";
import { tagRootBaseStyles, tagRootKindModifiedStyles, mediumStyles } from "./styles";
import { TAG_KIND, TAG_SIZE } from "./types";
import { CloseIcon } from "../icons";

export const getTagOverrides = (kind: TAG_KIND, size: TAG_SIZE): TagOverrides => {
  return {
    Root: {
      style: ({}) => {
        return {
          ...tagRootBaseStyles,
          ...tagRootKindModifiedStyles[kind],
          ...(size === TAG_SIZE.m ? mediumStyles : {}),
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
