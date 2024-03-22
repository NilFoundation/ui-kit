import { FC, useState } from "react";
import { Checkbox } from "../../checkbox";
import { StyledLink as Link } from "baseui/link";
import TableSemanticBuilder from "../TableSemanticBuilder";
import TableSemanticBuilderColumn from "../TableSemanticBuilderColumn";
import { TableSemanticBuilderProps } from "../types";

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

const TableSemanticBuilderStory: FC<TableSemanticBuilderProps> = ({ ...props }) => {
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
    <TableSemanticBuilder
      {...props}
      data={data}
      sortOrder={sortAsc ? "ASC" : "DESC"}
      onSort={() => setSortAsc(!sortAsc)}
    >
      <TableSemanticBuilderColumn
        header={<Checkbox checked={hasAll} isIndeterminate={!hasAll && hasSome} onChange={toggleAll} />}
      >
        {(row: Row) => <Checkbox name={"" + row.foo} checked={row.selected} onChange={toggle} />}
      </TableSemanticBuilderColumn>
      <TableSemanticBuilderColumn header="Produce" sortable>
        {(row: Row) => <Link href={row.url}>{row.bar}</Link>}
      </TableSemanticBuilderColumn>
      <TableSemanticBuilderColumn header="Quantity" numeric>
        {(row: Row) => row.foo}
      </TableSemanticBuilderColumn>
    </TableSemanticBuilder>
  );
};

export default TableSemanticBuilderStory;
