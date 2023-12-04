import { FC, memo } from "react";
import { Spinner, SPINNER_SIZE } from "../../spinner";
import { TEXTAREA_SIZE } from "../types";
import { useStyletron } from "baseui";

type TextareaSpinnerProps = {
  size?: TEXTAREA_SIZE;
};

const spinnerSize = {
  [TEXTAREA_SIZE.small]: SPINNER_SIZE.small,
  [TEXTAREA_SIZE.medium]: SPINNER_SIZE.medium,
};

const TextareaSpinner: FC<TextareaSpinnerProps> = ({ size = TEXTAREA_SIZE.medium }) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        position: "absolute",
        top: "16px",
        right: "16px",
      })}
    >
      <Spinner animation size={spinnerSize[size]} />
    </div>
  );
};

export default memo(TextareaSpinner);
