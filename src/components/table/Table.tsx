import { FC } from "react";
import { Table as BaseTable, TableProps as BaseTableProps } from "baseui/table";

export type TableProps = BaseTableProps;

const Table: FC<TableProps> = ({ ...props }) => {
  return <BaseTable {...props} />;
};

export default Table;
