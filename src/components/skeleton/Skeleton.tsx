import { FC } from "react";
import { PatternLayout } from "../../shared/ui/pattern-layout";
import { containerStyles, getWrapperStyles, rowItemStyles } from "./styles";
import { useStyletron, styled } from "baseui";
import type { SkeletonPropsT } from "baseui/skeleton";
import { getArrayFromN } from "../../shared/utils/getArrayFromN";

export type SkeletonProps = SkeletonPropsT;

const Container = styled("div", containerStyles);

const Skeleton: FC<SkeletonProps> = ({ height, animation, rows, ...props }) => {
  const [css] = useStyletron();
  const SkeletonWrapper = styled("div", getWrapperStyles(!!animation));
  const accessibilityProps = {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": 0,
    "aria-valuetext": "Loading",
    "aria-busy": true,
  };

  if (rows) {
    return (
      <Container {...accessibilityProps}>
        {getArrayFromN(rows).map((index) => (
          <PatternLayout key={index.toString()} {...props} height="18px" className={css(rowItemStyles)}>
            <SkeletonWrapper />
          </PatternLayout>
        ))}
      </Container>
    );
  }

  return (
    <Container {...accessibilityProps}>
      <PatternLayout {...props} height={height}>
        <SkeletonWrapper />
      </PatternLayout>
    </Container>
  );
};

export default Skeleton;
