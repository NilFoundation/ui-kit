import { TagOverrides } from "baseui/tag";
import { tagRootBaseStyles, tagRootDisabledStyles, tagRootKindModifiedStyles, tagRootLightStyles } from "./styles";
import { TAG_KIND, TAG_VARIANT } from "./types";
import { CloseIcon } from "../icons";

export const getTagOverrides = (kind: TAG_KIND, variant: TAG_VARIANT): TagOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => {
        return {
          ...tagRootBaseStyles,
          ...tagRootKindModifiedStyles[kind],
          ...(variant === TAG_VARIANT.light ? tagRootLightStyles[kind] : {}),
          ...($disabled ? tagRootDisabledStyles[kind] : {}),
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
