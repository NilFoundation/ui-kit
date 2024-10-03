import { FC } from "react";
import { Textarea as BaseTextarea, TextareaProps as BaseTextareaProps } from "baseui/textarea";
import { getTextareaOverrides } from "./overrides";
import { TEXTAREA_KIND, TEXTAREA_SIZE } from "./types";
import TextareaResizeIcon from "./ui/TextareaResizeIcon";
import { useStyletron } from "baseui";
import TextareaSpinner from "./ui/TextareaSpinner";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type TextareaProps = Omit<BaseTextareaProps, "positive"> & {
  size?: TEXTAREA_SIZE;
  isLoading?: boolean;
  kind?: TEXTAREA_KIND;
};

const Textarea: FC<TextareaProps> = ({
  size = TEXTAREA_SIZE.medium,
  kind = TEXTAREA_KIND.primary,
  resize,
  isLoading,
  overrides: baseOverrides,
  ...props
}) => {
  const [css] = useStyletron();

  const textareaOverrides = getTextareaOverrides(size, kind);
  const overrides = getMergedOverrides(textareaOverrides, baseOverrides);

  const isResizable = resize && ["both", "horizontal", "vertical"].includes(resize);

  return (
    <div className={css({ position: "relative" })}>
      <BaseTextarea {...props} overrides={overrides} resize={resize} />
      {isResizable && <TextareaResizeIcon />}
      {isLoading && <TextareaSpinner size={size} />}
    </div>
  );
};

export default Textarea;
