import { FC, memo, useContext } from "react";
import { useStyletron } from "baseui";
import { PRIMITIVE_COLORS } from "../../../shared";
import { ChevronDownIcon } from "../../icons";
import SelectContext from "../SelectContext";

type SelectArrowProps = {
  isRotated?: boolean;
  color?: string;
};

const SelectArrow: FC<SelectArrowProps> = ({ color = PRIMITIVE_COLORS.white, isRotated, ...restProps }) => {
  const [css] = useStyletron();
  const { controlRef } = useContext(SelectContext);
  const onClick = () => {
    if (!controlRef?.current) {
      return;
    }

    controlRef.current.setDropdownOpen(!isRotated);
  };

  return (
    <ChevronDownIcon
      {...restProps}
      size={18}
      color={color}
      className={css({
        transform: isRotated ? "rotate(180deg)" : "unset",
        marginLeft: "8px",
        cursor: "pointer",
      })}
      // @ts-ignore
      onClick={onClick}
    />
  );
};

export default memo(SelectArrow);
