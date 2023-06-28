import { FC, ReactNode } from "react";
import { useStyletron } from "baseui";
import AuthAvatar from "./AuthAvatar";
import { LabelSmall } from "baseui/typography";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { LogoutIcon } from "../../../icons";
import { Button, BUTTON_SIZE } from "../../../button";

export type AuthDropdownContainerProps = {
  username: string;
  children?: ReactNode;
  onLogout?: () => void;
};

const containerStyles = {
  minWidth: "280px",
};

const wrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
};

const authWrapperStyles = {
  display: "flex",
  alignItems: "center",
};

const labelStyles = {
  marginLeft: "8px",
};

const AuthDropdownContainer: FC<AuthDropdownContainerProps> = ({ username, children, onLogout }) => {
  const [css] = useStyletron();

  return (
    <div className={css(containerStyles)}>
      <div className={css(wrapperStyles)}>
        <div className={css(authWrapperStyles)}>
          <AuthAvatar username={username} />
          <LabelSmall className={css(labelStyles)} color={PRIMITIVE_COLORS.primary800}>
            {username}
          </LabelSmall>
        </div>
        <Button onClick={onLogout} size={BUTTON_SIZE.mini}>
          <LogoutIcon color={PRIMITIVE_COLORS.primary800} />
          <LabelSmall className={css(labelStyles)} color={PRIMITIVE_COLORS.primary800}>
            Log Out
          </LabelSmall>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default AuthDropdownContainer;
