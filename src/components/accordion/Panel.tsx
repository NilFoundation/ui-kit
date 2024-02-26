import { ReactNode, forwardRef } from "react";
import { Panel as BasePanel, PanelProps as BasePanelProps } from "baseui/accordion";
import PanelTitle from "./ui/PanelTitle";

export type PanelProps = BasePanelProps & {
  description?: string;
  icon?: ReactNode;
};

const Panel = forwardRef<HTMLElement, PanelProps>(({ icon, title, description, ...props }, ref) => {
  return <BasePanel ref={ref} {...props} title={<PanelTitle title={title} icon={icon} description={description} />} />;
});

Panel.displayName = "Panel";
export default Panel;
