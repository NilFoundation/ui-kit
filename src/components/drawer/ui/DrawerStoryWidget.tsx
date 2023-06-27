import { FC, useState } from "react";
import Drawer, { DrawerProps } from "../Drawer";
import { Button, BUTTON_KIND, BUTTON_SIZE } from "../../button";

type DrawerStoryWidgetProps = DrawerProps & {
  buttonLabel: string;
};

const DrawerStoryWidget: FC<DrawerStoryWidgetProps> = ({ buttonLabel, ...props }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} size={BUTTON_SIZE.compact} kind={BUTTON_KIND.tertiary}>
        {buttonLabel}
      </Button>
      <Drawer {...props} isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};

export default DrawerStoryWidget;
