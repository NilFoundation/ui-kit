import { FC } from "react";
import { Skeleton as BaseSkeleton } from "baseui/skeleton";
import { SkeletonProps as BaseSkeletonProps } from "baseui/skeleton/types";

export type SkeletonProps = BaseSkeletonProps;

const Skeleton: FC<SkeletonProps> = ({ ...props }) => {
  return <BaseSkeleton width="200px" height="100px" {...props} />;
};

export default Skeleton;
