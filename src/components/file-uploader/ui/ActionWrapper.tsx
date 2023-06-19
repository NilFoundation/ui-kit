import { forwardRef } from "react";
import { Button, ButtonProps } from "../../button";
import { useStyletron } from "baseui";

type ActionWrapperProps = ButtonProps & {
  isDragActive?: boolean;
};

const ActionWrapper = forwardRef<HTMLDivElement, ActionWrapperProps>(({ isDragActive, children, ...props }, ref) => {
  const [css] = useStyletron();

  return (
    <div ref={ref} className={css({ marginTop: "10px", display: isDragActive ? "none" : "block" })}>
      <Button {...props} shape="default" size="compact">
        {children}
      </Button>
    </div>
  );
});
ActionWrapper.displayName = "ActionWrapper";

export default ActionWrapper;
