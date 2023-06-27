import { ChangeEventHandler, FC, useState } from "react";
import { Textarea as BaseTextarea, TextareaProps as BaseTextareaProps } from "baseui/textarea";
import { getTextareaOverrides } from "./overrides";
import { TEXTAREA_SIZE } from "./types";
import TextareaResizeIcon from "./ui/TextareaResizeIcon";
import { useStyletron } from "baseui";
import TextareaSpinner from "./ui/TextareaSpinner";

export type TextareaProps = BaseTextareaProps & {
  size?: TEXTAREA_SIZE;
  isLoading?: boolean;
};

const Textarea: FC<TextareaProps> = ({
  value: baseValue,
  size = TEXTAREA_SIZE.medium,
  resize,
  isLoading,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<string | number>(baseValue ?? "");
  const [css] = useStyletron();

  const overrides = getTextareaOverrides(size, isLoading);
  const isResizable = resize && ["both", "horizontal", "vertical"].includes(resize);

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  return (
    <div className={css({ position: "relative" })}>
      <BaseTextarea {...props} overrides={overrides} resize={resize} value={value} onChange={onChangeHandler} />
      {isResizable && <TextareaResizeIcon />}
      {isLoading && <TextareaSpinner size={size} />}
    </div>
  );
};

export default Textarea;