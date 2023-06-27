import { FC } from "react";
import { Tag as BaseTag } from "baseui/tag";
import { TAG_KIND, TAG_VARIANT, TagProps } from "./types";
import { getTagOverrides } from "./overrides";

const Tag: FC<TagProps> = ({ kind = TAG_KIND.primary, variant = TAG_VARIANT.solid, ...props }) => {
  const overrides = getTagOverrides(kind, variant);

  return <BaseTag {...props} overrides={overrides} />;
};

export default Tag;
