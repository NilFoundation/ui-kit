import { FC, ReactNode } from "react";
import { useStyletron } from "baseui";
import { PRIMITIVE_COLORS } from "../../../shared";

type TableStoryWrapperProps = {
  children: ReactNode;
};

const TableStoryWrapper: FC<TableStoryWrapperProps> = ({ children }) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        maxWidth: "650px",
        backgroundColor: PRIMITIVE_COLORS.primary700,
        padding: "24px",
        borderRadius: "8px",
      })}
    >
      {children}
    </div>
  );
};

export default TableStoryWrapper;
