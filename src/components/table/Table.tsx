import { FC } from "react";
import { Table as BaseTable } from "baseui/table-semantic";
import { getTableOverrides } from "./overrides";
import { TABLE_DIVIDER, TABLE_SIZE, TableProps } from "./types";

const Table: FC<TableProps> = ({ divider = TABLE_DIVIDER.horizontal, size = TABLE_SIZE.default, ...props }) => {
  const overrides = getTableOverrides();

  return <BaseTable {...props} divider={divider} size={size} overrides={overrides} />;
};

export default Table;
