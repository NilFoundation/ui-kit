import { FC, ReactNode, useCallback, useEffect, useRef, useState, memo } from "react";
import { styled } from "baseui";
import { contentWrapperStyles, dotsWrapperStyles, getContainerStyles, getRowWrapperStyles } from "./styles";
import { debounce } from "../../shared/utils/debounce";
import { getArrayFromN } from "../../shared/utils/getArrayFromN";
import { PATTERN_KIND } from "./types";

type PatternLayoutProps = {
  width?: string | number;
  height?: string | number;
  kind?: PATTERN_KIND;
  className?: string;
  children?: ReactNode;
};

const DotsWrapper = styled("div", dotsWrapperStyles);
const ContentWrapper = styled("div", contentWrapperStyles);

const PatternLayout: FC<PatternLayoutProps> = ({
  width = "100%",
  height = "100%",
  kind = PATTERN_KIND.pattern700,
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rowCount, setRowCount] = useState(0);

  const Container = styled("div", getContainerStyles(width.toString(), height.toString(), kind));
  const RowWrapper = styled("div", getRowWrapperStyles(kind));

  const onResizeHandler = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const { offsetHeight } = container;
      setRowCount(Math.floor(offsetHeight / 4));
    }
  }, [containerRef]);

  useEffect(() => {
    onResizeHandler();

    const debouncedResizeHandler = debounce(onResizeHandler, 200);

    window.addEventListener("resize", debouncedResizeHandler);
    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
    };
  }, [onResizeHandler]);

  return (
    <Container ref={containerRef} className={className}>
      <DotsWrapper>
        {getArrayFromN(rowCount).map((rowIndex) => (
          <RowWrapper key={rowIndex.toString()} />
        ))}
      </DotsWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default memo(PatternLayout);
