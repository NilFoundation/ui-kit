import { FC, ReactNode, useCallback, useRef, useState, memo } from "react";
import { styled } from "baseui";
import { dotsWrapperStyles, getContainerStyles, getRowWrapperStyles } from "./styles";
import { debounce } from "../../utils/debounce";
import { getArrayFromN } from "../../utils/getArrayFromN";
import { PATTERN_KIND } from "./types";
import { useOnWindowResize } from "../../hooks/useOnWindowResize";

type PatternLayoutProps = {
  width?: string | number;
  height?: string | number;
  kind?: PATTERN_KIND;
  className?: string;
  children?: ReactNode;
};

const DotsWrapper = styled("div", dotsWrapperStyles);

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

  const debouncedResizeHandler = debounce(onResizeHandler, 200);

  useOnWindowResize(debouncedResizeHandler);

  return (
    <Container ref={containerRef} className={className}>
      <DotsWrapper>
        {getArrayFromN(rowCount).map((rowIndex) => (
          <RowWrapper key={rowIndex.toString()} />
        ))}
      </DotsWrapper>
      {children}
    </Container>
  );
};

export default memo(PatternLayout);
