import { FC, memo, useContext } from "react";
import { useStyletron } from "baseui";
import { COLORS } from "../../../shared";
import { ChevronDownIcon } from "../../icons";
import SelectContext from "../SelectContext";

type SelectArrowProps = {
  isRotated?: boolean;
  color?: string;
  searchable?: boolean;
};

const SelectArrow: FC<SelectArrowProps> = ({ color = COLORS.gray50, isRotated, searchable, ...restProps }) => {
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
      onClick={searchable ? onClick : undefined}
    />
  );
};

export default memo(SelectArrow);
