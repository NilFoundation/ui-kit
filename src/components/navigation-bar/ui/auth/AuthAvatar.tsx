import { FC } from "react";
import { Avatar } from "baseui/avatar";
import { getAvatarOverrides } from "./overrides";

type AuthAvatarProps = {
  username: string;
};

const AuthAvatar: FC<AuthAvatarProps> = ({ username }) => {
  const avatarOverrides = getAvatarOverrides();

  return <Avatar name={username} size="24px" overrides={avatarOverrides} />;
};

export default AuthAvatar;
