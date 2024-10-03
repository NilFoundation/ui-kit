import { FC } from "react";
import { TableBuilderColumn as BaseTableSemanticBuilderColumn } from "baseui/table-semantic";
import { TableSemanticBuilderColumnProps } from "./types";
import { getTableSemanticOverrides } from "./overrides";

const TableSemanticBuilderColumn: FC<TableSemanticBuilderColumnProps> = ({ ...props }) => {
  const overrides = getTableSemanticOverrides();

  return <BaseTableSemanticBuilderColumn {...props} overrides={overrides} />;
};

export default TableSemanticBuilderColumn;
