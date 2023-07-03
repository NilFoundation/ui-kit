import { FC } from "react";
import { Tag as BaseTag } from "baseui/tag";
import { TAG_KIND, TAG_VARIANT, TagProps } from "./types";
import { getTagOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

const Tag: FC<TagProps> = ({
  kind = TAG_KIND.primary,
  variant = TAG_VARIANT.solid,
  overrides: baseOverrides,
  ...props
}) => {
  const tagOverrides = getTagOverrides(kind, variant);
  const overrides = getMergedOverrides(tagOverrides, baseOverrides);

  return <BaseTag {...props} overrides={overrides} />;
};

export default Tag;
