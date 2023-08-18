import { FC, ReactNode, useState } from "react";
import { TreeView, toggleIsExpanded, TreeNodeData } from "baseui/tree-view";
import { NavigationItem } from "../../types";
import { getTreeViewOverrides } from "./overrides";

type SideNavigationListProps = {
  items: Array<any>;
  onItemClick?: (item: any) => void;
  itemAs?: (item: NavigationItem) => ReactNode;
};

const SideNavigationList: FC<SideNavigationListProps> = ({ onItemClick, items, itemAs }) => {
  const [data, setData] = useState<TreeNodeData[]>(items);

  const treeViewOverrides = getTreeViewOverrides(itemAs);

  const onToggleHandler = (node: TreeNodeData) => {
    if (!node?.children) {
      onItemClick?.(node);
    }
    setData((prevData) => toggleIsExpanded(prevData, node));
  };

  return (
    <div>
      <TreeView data={data} onToggle={onToggleHandler} overrides={treeViewOverrides} />
    </div>
  );
};

export default SideNavigationList;
