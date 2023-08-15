import { FC, ReactNode, useState } from "react";
import { TreeView, toggleIsExpanded, TreeNodeData, TreeLabel, TreeLabelProps } from "baseui/tree-view";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { CaretDownIcon, CaretUpIcon } from "../../../icons";
import { expandProperty } from "inline-style-expand-shorthand";
import { useStyletron } from "baseui";
import { getTreeLabelStyles } from "../../styles";
import { NavigationItem } from "../../types";

type ExpandedTreeNodeData = TreeNodeData & {
  disabled?: boolean;
};

type SideNavigationListProps = {
  items: Array<any>;
  onItemClick?: (item: any) => void;
  itemAs?: (item: NavigationItem) => ReactNode;
};

type NavTreeLabelProps = Omit<TreeLabelProps, "node"> & {
  node: ExpandedTreeNodeData;
  onClick?: () => void;
  itemAs?: (item: NavigationItem) => ReactNode;
};

const NavTreeLabel: FC<NavTreeLabelProps> = ({ node, onClick, isSelected, itemAs, ...props }) => {
  const [css] = useStyletron();

  const treeLabelStyles = getTreeLabelStyles(!!isSelected, !!node?.disabled);

  const labelValue = itemAs ? (typeof itemAs === "function" ? itemAs(node as NavigationItem) : itemAs) : node.label;

  return (
    <div className={css(treeLabelStyles)}>
      {/*@ts-ignore*/}
      <TreeLabel {...props} label={labelValue} node={node} onClick={!node?.disabled ? onClick : undefined} />
    </div>
  );
};

const SideNavigationList: FC<SideNavigationListProps> = ({ onItemClick, items, itemAs }) => {
  const [data, setData] = useState<TreeNodeData[]>(items);

  const onToggleHandler = (node: TreeNodeData) => {
    if (!node?.children) {
      onItemClick?.(node);
    }
    setData((prevData) => toggleIsExpanded(prevData, node));
  };

  return (
    <div>
      <TreeView
        data={data}
        onToggle={onToggleHandler}
        overrides={{
          TreeItemList: {
            style: {
              ...expandProperty("margin", "0 !important"),
            },
          },
          TreeItem: {
            style: {
              cursor: "pointer",
            },
          },
          TreeLabel: {
            component: ({ ...props }) => <NavTreeLabel {...props} itemAs={itemAs} />,
            style: ({ $hasChildren }) => {
              return {
                ...expandProperty("padding", "16px 8px"),
                ...expandProperty("borderBottom", `1px solid ${PRIMITIVE_COLORS.primary100}`),
                color: "inherit",
                marginLeft: !$hasChildren ? "-20px" : "0",
                backgroundColor: PRIMITIVE_COLORS.white,

                ":hover": {
                  backgroundColor: PRIMITIVE_COLORS.white,
                },
              };
            },
          },
          IconContainer: {
            style: {
              order: "2",
              marginLeft: "4px",
            },
          },
          CollapseIcon: {
            component: CaretUpIcon,
          },
          ExpandIcon: {
            component: CaretDownIcon,
          },
        }}
      />
    </div>
  );
};

export default SideNavigationList;
