import { FC, ReactNode } from "react";
import { TreeLabel, TreeLabelProps, TreeNodeData } from "baseui/tree-view";
import { NavigationItem } from "../../types";
import { StyledLink } from "baseui/link";
import { useStyletron } from "baseui";
import { getTreeLabelStyles } from "../../styles";

type ExpandedTreeNodeData = TreeNodeData & {
  disabled?: boolean;
};

type NavTreeLabelProps = Omit<TreeLabelProps, "node"> & {
  node: ExpandedTreeNodeData;
  onClick?: () => void;
  itemAs?: (item: NavigationItem) => ReactNode;
};

const getLabelValue = (item: NavigationItem, styles: string, itemAs?: (item: NavigationItem) => ReactNode) => {
  if (itemAs) {
    return <>{typeof itemAs === "function" ? itemAs(item) : itemAs}</>;
  }
  if (item?.href) {
    return (
      <StyledLink className={styles} href={!item.disabled ? item.href : undefined}>
        {item.label}
      </StyledLink>
    );
  }
  return item.label;
};

const NavTreeLabel: FC<NavTreeLabelProps> = ({ node, onClick, isSelected, itemAs, ...props }) => {
  const [css] = useStyletron();

  const treeLabelStyles = getTreeLabelStyles(!!isSelected, !!node?.disabled);

  const labelValue = getLabelValue(node as NavigationItem, css(treeLabelStyles), itemAs);

  return (
    <div className={css(treeLabelStyles)}>
      {/*@ts-ignore*/}
      <TreeLabel {...props} label={labelValue} node={node} onClick={!node?.disabled ? onClick : undefined} />
    </div>
  );
};

export default NavTreeLabel;
