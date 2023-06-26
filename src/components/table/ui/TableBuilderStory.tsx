import { FC, useState } from "react";
import { Checkbox } from "../../checkbox";
import { StyledLink as Link } from "baseui/link";
import TableBuilder from "../TableBuilder";
import TableBuilderColumn from "../TableBuilderColumn";
import { TableBuilderProps } from "../types";

type Row = {
  foo: number;
  bar: string;
  url: string;
  selected: boolean;
};

const TABLE_BUILDER_DATA = [
  {
    foo: 10,
    bar: "banana",
    url: "https://example.com/b",
    selected: true,
  },
  {
    foo: 1,
    bar: "carrot",
    url: "https://example.com/c",
    selected: false,
  },
  {
    foo: 2,
    bar: "apple",
    url: "https://example.com/a",
    selected: false,
  },
];

const TableBuilderStory: FC<TableBuilderProps> = ({ ...props }) => {
  const [data, setData] = useState<Row[]>(TABLE_BUILDER_DATA);
  const [sortAsc, setSortAsc] = useState(true);

  const hasAny = Boolean(data.length);
  const hasAll = hasAny && data.every((x) => x.selected);
  const hasSome = hasAny && data.some((x) => x.selected);
  function toggleAll() {
    setData((data) =>
      data.map((row) => ({
        ...row,
        selected: !hasAll,
      }))
    );
  }
  function toggle(event: any) {
    const { name, checked } = event.currentTarget;
    setData((data) =>
      data.map((row) => ({
        ...row,
        selected: String(row.foo) === name ? checked : row.selected,
      }))
    );
  }
  return (
    <TableBuilder {...props} data={data} sortOrder={sortAsc ? "ASC" : "DESC"} onSort={() => setSortAsc(!sortAsc)}>
      <TableBuilderColumn
        header={<Checkbox checked={hasAll} isIndeterminate={!hasAll && hasSome} onChange={toggleAll} />}
      >
        {(row: Row) => <Checkbox name={"" + row.foo} checked={row.selected} onChange={toggle} />}
      </TableBuilderColumn>
      <TableBuilderColumn header="Produce" sortable>
        {(row: Row) => <Link href={row.url}>{row.bar}</Link>}
      </TableBuilderColumn>
      <TableBuilderColumn header="Quantity" numeric>
        {(row: Row) => row.foo}
      </TableBuilderColumn>
    </TableBuilder>
  );
};

export default TableBuilderStory;
