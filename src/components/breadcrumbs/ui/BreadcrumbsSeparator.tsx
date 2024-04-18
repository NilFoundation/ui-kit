import { FC, memo } from "react";
import { useStyletron } from "baseui";
import { COLORS } from "../../../shared";

const containerStyles = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "4px",
  marginRight: "4px",
  width: "20px",
  height: "20px",
};

const squareStyles = {
  width: "5px",
  height: "5px",
  backgroundColor: COLORS.white,
};

const BreadcrumbsSeparator: FC = () => {
  const [css] = useStyletron();

  return (
    <div className={css(containerStyles)}>
      <div className={css(squareStyles)} />
    </div>
  );
};

export default memo(BreadcrumbsSeparator);
