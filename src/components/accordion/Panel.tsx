import { FC, ReactNode } from "react";
import { Panel as BasePanel, PanelProps as BasePanelProps } from "baseui/accordion";
import PanelTitle from "./ui/PanelTitle";

export type PanelProps = BasePanelProps & {
  description?: string;
  icon?: ReactNode;
};

const Panel: FC<PanelProps> = ({ icon, title, description, ...props }) => {
  return <BasePanel {...props} title={<PanelTitle title={title} icon={icon} description={description} />} />;
};

export default Panel;
