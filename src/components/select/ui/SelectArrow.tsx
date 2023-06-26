import { forwardRef, memo } from "react";
import { useStyletron } from "baseui";
import { PRIMITIVE_COLORS } from "../../../shared";

type SelectArrowProps = {
  isRotated?: boolean;
  color?: string;
};

const SelectArrow = forwardRef<SVGSVGElement, SelectArrowProps>(
  ({ color = PRIMITIVE_COLORS.white, isRotated }, ref) => {
    const [css] = useStyletron();

    return (
      <svg
        ref={ref}
        className={css({
          transform: isRotated ? "rotate(180deg)" : "unset",
          marginLeft: "16px",
        })}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 11L3 6.00005L3.7 5.30005L8 9.60005L12.3 5.30005L13 6.00005L8 11Z" fill={color} />
      </svg>
    );
  }
);
SelectArrow.displayName = "SelectArrow";

export default memo(SelectArrow);
