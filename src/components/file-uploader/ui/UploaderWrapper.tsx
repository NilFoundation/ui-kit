import { forwardRef, ReactNode } from "react";
import { useStyletron } from "styletron-react";
import { contentWrapperStyles, getUploaderContainerStyles, uploaderPatternStyles } from "../styles";
import { PATTERN_KIND, PatternLayout } from "../../pattern-layout";

type UploaderWrapperProps = {
  children: ReactNode;
  isDragActive?: boolean;
  isProgress?: boolean;
  isError?: boolean;
};

const UploaderWrapper = forwardRef<HTMLDivElement, UploaderWrapperProps>(
  ({ isDragActive, isProgress, isError, children, ...props }, ref) => {
    const [css] = useStyletron();

    return (
      <div ref={ref} {...props} className={css(getUploaderContainerStyles(isDragActive))}>
        {!isProgress && !isError && (
          <div className={css(uploaderPatternStyles)}>
            <PatternLayout kind={PATTERN_KIND.pattern800} />
          </div>
        )}
        <div className={css(contentWrapperStyles)}>{children}</div>
      </div>
    );
  }
);
UploaderWrapper.displayName = "UploaderWrapper";

export default UploaderWrapper;
