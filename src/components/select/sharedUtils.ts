import { TAG_KIND } from "../tag";

export const getTagKind = (isError: boolean, isFocused: boolean): TAG_KIND => {
  if (isFocused) {
    return TAG_KIND.gray;
  }
  if (isError) {
    return TAG_KIND.red;
  }
  return TAG_KIND.gray;
};

export const tagOverrides = {
  Root: {
    style: {
      marginRight: "8px",
    },
  },
};
