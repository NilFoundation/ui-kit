import { FC } from "react";
import { Table as BaseTable } from "baseui/table-semantic";
import { getTableOverrides } from "./overrides";
import { TABLE_DIVIDER, TABLE_SIZE, TableProps } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

const Table: FC<TableProps> = ({
  divider = TABLE_DIVIDER.horizontal,
  size = TABLE_SIZE.default,
  overrides: baseOverrides,
  ...props
}) => {
  const tableOverrides = getTableOverrides();
  const overrides = getMergedOverrides(tableOverrides, baseOverrides);

  return <BaseTable {...props} divider={divider} size={size} overrides={overrides} />;
};

export default Table;
