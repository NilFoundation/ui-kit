import { FC, ReactNode, useState } from "react";
import { Button, BUTTON_SIZE } from "../../../button";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { CaretDownIcon, CaretUpIcon } from "../../../icons";
import AuthAvatar from "./AuthAvatar";
import NavPopover from "../NavPopover";
import { expandProperty } from "inline-style-expand-shorthand";
import { navbarPadding } from "../../styles";

type AvatarBlockProps = {
  authDropdownContainer?: ReactNode;
  username?: string;
};

const iconProps = {
  size: 16,
  color: PRIMITIVE_COLORS.primary800,
};

const AvatarBlock: FC<AvatarBlockProps> = ({ username, authDropdownContainer }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavPopover
      content={authDropdownContainer}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      overrides={{
        Body: {
          style: {
            marginRight: `${navbarPadding + 16}px`,
            boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
          },
        },
        Inner: {
          style: {
            backgroundColor: PRIMITIVE_COLORS.white,
            ...expandProperty("borderRadius", "0"),
          },
        },
      }}
    >
      <Button size={BUTTON_SIZE.compact}>
        {username && <AuthAvatar username={username} />}
        {isOpen ? <CaretUpIcon {...iconProps} /> : <CaretDownIcon {...iconProps} />}
      </Button>
    </NavPopover>
  );
};

export default AvatarBlock;
