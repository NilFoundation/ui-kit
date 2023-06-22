import { forwardRef } from "react";
import { Button, BUTTON_SHAPE, BUTTON_SIZE, ButtonProps } from "../../button";
import { useStyletron } from "baseui";

type ActionWrapperProps = ButtonProps & {
  isDragActive?: boolean;
};

const ActionWrapper = forwardRef<HTMLDivElement, ActionWrapperProps>(({ isDragActive, children, ...props }, ref) => {
  const [css] = useStyletron();

  return (
    <div ref={ref} className={css({ marginTop: "22px", display: isDragActive ? "none" : "block" })}>
      <Button {...props} shape={BUTTON_SHAPE.default} size={BUTTON_SIZE.compact}>
        {children}
      </Button>
    </div>
  );
});
ActionWrapper.displayName = "ActionWrapper";

export default ActionWrapper;
