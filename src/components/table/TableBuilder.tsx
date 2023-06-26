import { FC } from "react";
import { TableBuilder as BaseTableBuilder } from "baseui/table-semantic";
import { TableBuilderProps, TABLE_DIVIDER, TABLE_SIZE } from "./types";
import { getTableOverrides } from "./overrides";

const TableBuilder: FC<TableBuilderProps> = ({
  divider = TABLE_DIVIDER.horizontal,
  size = TABLE_SIZE.default,
  ...props
}) => {
  const overrides = getTableOverrides();

  return <BaseTableBuilder {...props} divider={divider} size={size} overrides={overrides} />;
};

export default TableBuilder;
