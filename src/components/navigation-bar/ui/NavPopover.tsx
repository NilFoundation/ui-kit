import { FC } from "react";
import { StatefulPopover, StatefulPopoverProps } from "baseui/popover";

const NavPopover: FC<StatefulPopoverProps> = ({ ...props }) => {
  return <StatefulPopover {...props} placement="bottom" />;
};

export default NavPopover;
