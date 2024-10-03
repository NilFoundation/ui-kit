import { FC, ReactNode } from "react";
import { useStyletron } from "baseui";
import LoginBlock from "../LoginBlock";
import { expandProperty } from "inline-style-expand-shorthand";

type SideNavigationFooterProps = {
  isAuth?: boolean;
  onLogin?: () => void;
  authDropdownContainer?: ReactNode;
};

const SideNavigationFooter: FC<SideNavigationFooterProps> = ({ isAuth, onLogin, authDropdownContainer }) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        marginTop: "auto",
        ...expandProperty("padding", isAuth ? "0" : "16px 8px"),
      })}
    >
      {isAuth ? <>{authDropdownContainer}</> : <LoginBlock onClick={onLogin} />}
    </div>
  );
};

export default SideNavigationFooter;
