import { FC } from "react";
import { TableBuilder as BaseTableSemanticBuilder } from "baseui/table-semantic";
import { TableSemanticBuilderProps, TABLE_DIVIDER, TABLE_SIZE } from "./types";
import { getTableSemanticOverrides } from "./overrides";

const TableSemanticBuilder: FC<TableSemanticBuilderProps> = ({
  divider = TABLE_DIVIDER.horizontal,
  size = TABLE_SIZE.default,
  ...props
}) => {
  const overrides = getTableSemanticOverrides();

  return <BaseTableSemanticBuilder {...props} divider={divider} size={size} overrides={overrides} />;
};

export default TableSemanticBuilder;
