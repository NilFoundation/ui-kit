import { FC } from "react";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { Avatar } from "baseui/avatar";

type AuthAvatarProps = {
  username: string;
};

const AuthAvatar: FC<AuthAvatarProps> = ({ username }) => {
  return (
    <Avatar
      name={username}
      size="24px"
      overrides={{
        Root: {
          style: {
            backgroundColor: PRIMITIVE_COLORS.primary100,
            marginRight: "4px",
          },
        },
        Initials: {
          style: {
            fontSize: "14px",
            lineHeight: "16px",
            color: PRIMITIVE_COLORS.primary800,
          },
        },
      }}
    />
  );
};

export default AuthAvatar;
