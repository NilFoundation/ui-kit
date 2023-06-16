import { FC } from "react";
import { PatternLayout } from "../pattern-layout";
import { styled } from "styletron-react";
import { containerStyles, getWrapperStyles, rowItemStyles } from "./styles";
import { SKELETON_SIZE } from "./types";
import { useStyletron } from "baseui";
import { getArrayFromN } from "../../shared/utils/getArrayFromN";

export type SkeletonProps = {
  width: string | number;
  height: string | number;
  size?: SKELETON_SIZE;
  rows?: number;
  animation?: boolean;
  className?: string;
};

const Container = styled("div", containerStyles);

const skeletonHeightBySize = {
  [SKELETON_SIZE.xSmall]: "40px",
  [SKELETON_SIZE.small]: "40px",
  [SKELETON_SIZE.medium]: "80px",
  [SKELETON_SIZE.large]: "160px",
  [SKELETON_SIZE.xLarge]: "414px",
};

const Skeleton: FC<SkeletonProps> = ({ size, height, animation, rows, ...props }) => {
  const [css] = useStyletron();
  const SkeletonWrapper = styled("div", getWrapperStyles(!!animation));

  const skeletonHeight = size ? skeletonHeightBySize[size] : height;

  if (rows) {
    return (
      <Container>
        {getArrayFromN(rows).map((index) => (
          <PatternLayout key={index.toString()} {...props} height="18px" className={css(rowItemStyles)}>
            <SkeletonWrapper />
          </PatternLayout>
        ))}
      </Container>
    );
  }

  return (
    <Container>
      <PatternLayout {...props} height={skeletonHeight}>
        <SkeletonWrapper />
      </PatternLayout>
    </Container>
  );
};

export default Skeleton;
