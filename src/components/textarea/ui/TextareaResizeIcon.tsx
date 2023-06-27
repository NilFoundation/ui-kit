import { FC } from "react";
import { useStyletron } from "baseui";
import { ResizeIcon } from "../../icons";
import { PRIMITIVE_COLORS } from "../../../shared";

const TextareaResizeIcon: FC = () => {
  const [css] = useStyletron();

  return (
    <div className={css({ position: "absolute", bottom: "0", right: "4px", pointerEvents: "none" })}>
      <ResizeIcon size={20} color={PRIMITIVE_COLORS.primary500} />
    </div>
  );
};

export default TextareaResizeIcon;
