import { FC } from "react";
import { Table as BaseTable } from "baseui/table-semantic";
import { getTableSemanticOverrides } from "./overrides";
import { TABLE_DIVIDER, TABLE_SIZE, TableSemanticProps } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

const TableSemantic: FC<TableSemanticProps> = ({
  divider = TABLE_DIVIDER.horizontal,
  size = TABLE_SIZE.default,
  overrides: baseOverrides,
  ...props
}) => {
  const tableOverrides = getTableSemanticOverrides();
  const overrides = getMergedOverrides(tableOverrides, baseOverrides);

  return <BaseTable {...props} divider={divider} size={size} overrides={overrides} />;
};

export default TableSemantic;
