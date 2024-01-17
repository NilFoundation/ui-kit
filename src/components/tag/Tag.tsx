import { FC } from "react";
import { Tag as BaseTag } from "baseui/tag";
import { TAG_KIND, TAG_SIZE, TagProps } from "./types";
import { getTagOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

const Tag: FC<TagProps> = ({
  kind = TAG_KIND.gray,
  size = TAG_SIZE.s,
  overrides: baseOverrides,
  fill = true,
  ...props
}) => {
  const tagOverrides = getTagOverrides(kind, size, fill);
  const overrides = getMergedOverrides(tagOverrides, baseOverrides);

  return <BaseTag {...props} overrides={overrides} closeable={false} />;
};

export default Tag;
