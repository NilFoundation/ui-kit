import { forwardRef } from "react";
import { Button, BUTTON_SIZE, ButtonProps } from "../../button";
import { useStyletron } from "baseui";

type ActionWrapperProps = ButtonProps & {
  isDragActive?: boolean;
};

const ActionWrapper = forwardRef<HTMLDivElement, ActionWrapperProps>(
  ({ isDragActive, children, kind, disabled, onClick }, ref) => {
    const [css] = useStyletron();

    return (
      <div ref={ref} className={css({ marginTop: "22px", display: isDragActive ? "none" : "block" })}>
        <Button kind={kind} size={BUTTON_SIZE.compact} onClick={onClick} disabled={disabled}>
          {children}
        </Button>
      </div>
    );
  }
);
ActionWrapper.displayName = "ActionWrapper";

export default ActionWrapper;
