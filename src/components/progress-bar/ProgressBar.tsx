import { ComponentProps, FC, useCallback, useRef, useState } from "react";
import {
  dashedBlockStyles,
  dashedBlockActiveStyles,
  dashedBlockNotActiveStyles,
  getProgressWrapperStyles,
  containerStyles,
  labelStyles,
  dashedBlockErrorStyles,
  getDashedBlockInfiniteStyles,
} from "./styles";
import { getArrayFromN } from "../../shared/utils/getArrayFromN";
import { useStyletron, styled } from "baseui";
import { debounce } from "../../shared/utils/debounce";
import { PROGRESS_BAR_SIZE, ProgressBarProps } from "./types";
import { LabelLarge, LabelMedium, LabelSmall } from "baseui/typography";
import { useOnWindowResize } from "../../shared/hooks/useOnWindowResize";
import { PRIMITIVE_COLORS } from "../../shared";

type TypographyProps = ComponentProps<typeof LabelSmall>;

const getProgressedDashedCount = (value: number, minValue: number, maxValue: number, dashedCount: number): number => {
  const normalizedMaxValue = maxValue - minValue;
  const normalizedValue = value - minValue;
  const percent = Math.floor((normalizedValue * 100) / normalizedMaxValue);
  return Math.floor((dashedCount * percent) / 100);
};

const progressBarLabelComponent = {
  [PROGRESS_BAR_SIZE.small]: (props: TypographyProps) => <LabelSmall as="span" {...props} />,
  [PROGRESS_BAR_SIZE.medium]: (props: TypographyProps) => <LabelMedium as="span" {...props} />,
  [PROGRESS_BAR_SIZE.large]: (props: TypographyProps) => <LabelLarge as="span" {...props} />,
};

const ProgressBar: FC<ProgressBarProps> = ({
  value = 0,
  minValue = 0,
  maxValue = 100,
  getProgressLabel,
  showLabel,
  errorMessage,
  size = PROGRESS_BAR_SIZE.medium,
  className,
  infinite,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dashedCount, setDashedCount] = useState<number>(0);
  const [css] = useStyletron();

  const progressedCount = getProgressedDashedCount(value, minValue, maxValue, dashedCount);

  const ProgressWrapper = styled("div", getProgressWrapperStyles(size));
  const Container = styled("div", containerStyles);
  const DashedBlock = styled("div", dashedBlockStyles);
  const TypographyComponent = progressBarLabelComponent[size];

  const onResizeHandler = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const { offsetWidth } = container;
      setDashedCount(Math.floor(offsetWidth / 4));
    }
  }, [containerRef]);

  const debouncedResizeHandler = debounce(onResizeHandler, 200);

  useOnWindowResize(debouncedResizeHandler);

  const getDashedBlockClassName = (index: number) => {
    if (infinite) {
      return css(getDashedBlockInfiniteStyles(index, dashedCount));
    }

    return css(
      index < progressedCount
        ? errorMessage
          ? dashedBlockErrorStyles
          : dashedBlockActiveStyles
        : dashedBlockNotActiveStyles
    );
  };

  return (
    <Container className={className} ref={containerRef}>
      <ProgressWrapper role="progressbar">
        {getArrayFromN(dashedCount).map((index) => (
          <DashedBlock key={index.toString()} className={getDashedBlockClassName(index)} />
        ))}
      </ProgressWrapper>
      {showLabel && (
        <TypographyComponent
          className={css(labelStyles)}
          color={errorMessage ? PRIMITIVE_COLORS.red400 : PRIMITIVE_COLORS.gray400}
        >
          {errorMessage
            ? errorMessage
            : getProgressLabel
            ? // @ts-ignore
              getProgressLabel(value, minValue, maxValue)
            : "Uploading..."}
        </TypographyComponent>
      )}
    </Container>
  );
};

export default ProgressBar;
