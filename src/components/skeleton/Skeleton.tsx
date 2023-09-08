import { FC } from "react";
import { PatternLayout } from "../pattern-layout";
import { containerStyles, getWrapperStyles, rowItemStyles } from "./styles";
import { useStyletron, styled } from "baseui";
import type { SkeletonPropsT } from "baseui/skeleton";
import { getArrayFromN } from "../../shared/utils/getArrayFromN";

export type SkeletonProps = SkeletonPropsT;

const Container = styled("div", containerStyles);

const Skeleton: FC<SkeletonProps> = ({ height, animation, rows, ...props }) => {
  const [css] = useStyletron();
  const SkeletonWrapper = styled("div", getWrapperStyles(!!animation));

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
      <PatternLayout {...props} height={height}>
        <SkeletonWrapper />
      </PatternLayout>
    </Container>
  );
};

export default Skeleton;
