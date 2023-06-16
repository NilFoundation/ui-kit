import { FC, ReactNode, useCallback, useEffect, useRef, useState, memo } from "react";
import { styled } from "styletron-react";
import { dotStyles, dotsWrapperStyles, getContainerStyles, rowWrapperStyles } from "./styles";
import { debounce } from "../../shared/utils/debounce";
import { getArrayFromN } from "../../shared/utils/getArrayFromN";

type PatternLayoutProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
  children?: ReactNode;
};

const Dot = styled("div", dotStyles);
const DotsWrapper = styled("div", dotsWrapperStyles);
const RowWrapper = styled("div", rowWrapperStyles);

const PatternLayout: FC<PatternLayoutProps> = ({ width = "100%", height = "100%", className, children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [columnCount, setColumnCount] = useState(0);
  const [rowCount, setRowCount] = useState(0);

  const Container = styled("div", getContainerStyles(width.toString(), height.toString()));

  const onResizeHandler = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const { offsetWidth, offsetHeight } = container;
      setColumnCount(Math.ceil(offsetWidth / 8));
      setRowCount(Math.ceil(offsetHeight / 4));
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
          <RowWrapper key={rowIndex.toString()}>
            {getArrayFromN(columnCount - (rowIndex % 2 == 1 ? 0 : 1)).map((columnIndex) => (
              <Dot key={columnIndex.toString()} />
            ))}
          </RowWrapper>
        ))}
      </DotsWrapper>
      {children}
    </Container>
  );
};

export default memo(PatternLayout);
