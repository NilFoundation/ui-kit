import { FC, ReactNode, useState } from "react";
import { Button, BUTTON_SIZE } from "../../../button";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { CaretDownIcon, CaretUpIcon } from "../../../icons";
import AuthAvatar from "./AuthAvatar";
import NavPopover from "../NavPopover";
import { getPopoverOverrides } from "./overrides";

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

  const popoverOverrides = getPopoverOverrides();

  return (
    <NavPopover
      content={authDropdownContainer}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      overrides={popoverOverrides}
    >
      <Button size={BUTTON_SIZE.compact}>
        {username && <AuthAvatar username={username} />}
        {isOpen ? <CaretUpIcon {...iconProps} /> : <CaretDownIcon {...iconProps} />}
      </Button>
    </NavPopover>
  );
};

export default AvatarBlock;
