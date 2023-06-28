import { FC, useState } from "react";
import { TreeView, toggleIsExpanded, TreeNodeData } from "baseui/tree-view";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { CaretDownIcon, CaretUpIcon } from "../../../icons";
import { expandProperty } from "inline-style-expand-shorthand";

type SideNavigationListProps = {
  items: Array<any>;
  onItemClick?: (item: any) => void;
};

const SideNavigationList: FC<SideNavigationListProps> = ({ onItemClick, items }) => {
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
            style: ({ $hasChildren, $isSelected }) => {
              return {
                ...expandProperty("padding", "16px 8px"),
                ...expandProperty("borderBottom", `1px solid ${PRIMITIVE_COLORS.primary100}`),
                color: $isSelected ? PRIMITIVE_COLORS.primary500 : PRIMITIVE_COLORS.primary800,
                marginLeft: !$hasChildren ? "-20px" : "0",

                ":hover": {
                  backgroundColor: PRIMITIVE_COLORS.white,
                  color: $isSelected ? PRIMITIVE_COLORS.primary500 : PRIMITIVE_COLORS.primary600,
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
