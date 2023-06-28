import { FC, ReactNode } from "react";
import AvatarBlock from "./AvatarBlock";
import LoginBlock from "../LoginBlock";

type AuthItemProps = {
  isAuth?: boolean;
  onLogin?: () => void;
  authDropdownContainer?: ReactNode;
  username?: string;
};

const AuthItem: FC<AuthItemProps> = ({ username, authDropdownContainer, onLogin, isAuth }) => {
  if (isAuth) {
    return <AvatarBlock username={username} authDropdownContainer={authDropdownContainer} />;
  }

  return <LoginBlock onClick={onLogin} />;
};

export default AuthItem;
