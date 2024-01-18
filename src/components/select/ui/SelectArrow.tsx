import { FC, memo } from "react";
import { useStyletron } from "baseui";
import { PRIMITIVE_COLORS } from "../../../shared";
import { ChevronDownIcon } from "../../icons";

type SelectArrowProps = {
  isRotated?: boolean;
  color?: string;
};

const SelectArrow: FC<SelectArrowProps> = ({ color = PRIMITIVE_COLORS.white, isRotated }) => {
  const [css] = useStyletron();

  return (
    <ChevronDownIcon
      size={18}
      color={color}
      className={css({
        transform: isRotated ? "rotate(180deg)" : "unset",
        marginLeft: "8px",
        cursor: "pointer",
      })}
    />
  );
};

export default memo(SelectArrow);
