import { FC, ReactNode } from "react";
import AvatarBlock from "./AvatarBlock";
import LoginBlock from "../LoginBlock";

type AuthBlockProps = {
  isAuth?: boolean;
  onLogin?: () => void;
  authDropdownContainer?: ReactNode;
  username?: string;
};

const AuthBlock: FC<AuthBlockProps> = ({ username, authDropdownContainer, onLogin, isAuth }) => {
  if (isAuth) {
    return <AvatarBlock username={username} authDropdownContainer={authDropdownContainer} />;
  }

  return <LoginBlock onClick={onLogin} />;
};

export default AuthBlock;
