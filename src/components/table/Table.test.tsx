import { screen, waitFor } from "@testing-library/react";
import TableSemantic from "./TableSemantic";
import TableSemanticBuilder from "./TableSemanticBuilder";
import TableSemanticBuilderColumn from "./TableSemanticBuilderColumn";
import { TABLE_DIVIDER, TABLE_SIZE } from "./types";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { SORT_DIRECTIONS } from "baseui/data-table";
import {
  StyledTableSemanticRoot,
  StyledTableSemantic,
  StyledTableSemanticHeadRow,
  StyledTableSemanticHeadCell,
  StyledTableSemanticBodyRow,
  StyledTableSemanticBodyCell,
} from "./TableSemanticStyledElements";

const data = [
  ["Sarah Brown", 31, "100 Broadway st. New York City, New York"],
  ["Jane Smith", 32, "100 Market st. San Francisco, California"],
  ["Joe Black", 33, "100 Macquarie st. Sydney, Australia"],
];
const columns = ["Name", "Age", "Address"];

describe("Table", () => {
  it("renders without crashing", () => {
    render(
      <TableSemantic
        divider={TABLE_DIVIDER.horizontal}
        size={TABLE_SIZE.default}
        data={data}
        columns={columns}
      ></TableSemantic>
    );

    const tableElement = screen.getByText(/Sarah Brown/i);
    expect(tableElement).toBeInTheDocument();
  });

  it("handles custom divider and size", async () => {
    const { rerender } = render(
      <TableSemantic
        divider={TABLE_DIVIDER.horizontal}
        size={TABLE_SIZE.default}
        data={data}
        columns={columns}
      ></TableSemantic>
    );

    let tableElement = screen.getByText(/Sarah Brown/i);
    expect(tableElement).toBeInTheDocument();

    rerender(
      <TableSemantic
        divider={TABLE_DIVIDER.vertical}
        size={TABLE_SIZE.compact}
        data={data}
        columns={columns}
      ></TableSemantic>
    );

    tableElement = screen.getByText(/Sarah Brown/i);
    await waitFor(() => {
      expect(tableElement).toBeInTheDocument();
    });
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <TableSemantic
        divider={TABLE_DIVIDER.horizontal}
        size={TABLE_SIZE.default}
        data={data}
        columns={columns}
      ></TableSemantic>
    );
  });

  it("renders TableSemanticBuilder without crashing", () => {
    render(
      <TableSemanticBuilder data={data} sortOrder={SORT_DIRECTIONS.ASC}>
        <TableSemanticBuilderColumn header="Name">{(row) => <div>{row[0]}</div>}</TableSemanticBuilderColumn>
      </TableSemanticBuilder>
    );

    const tableElement = screen.getByText(/Sarah Brown/i);
    expect(tableElement).toBeInTheDocument();
  });

  it("renders Table semantic styled elements without crashing", () => {
    render(
      <StyledTableSemanticRoot>
        <StyledTableSemantic>
          <StyledTableSemanticHeadRow>
            <StyledTableSemanticHeadCell>Name</StyledTableSemanticHeadCell>
            <StyledTableSemanticHeadCell>Age</StyledTableSemanticHeadCell>
            <StyledTableSemanticHeadCell>Address</StyledTableSemanticHeadCell>
          </StyledTableSemanticHeadRow>
          <StyledTableSemanticBodyRow>
            <StyledTableSemanticBodyCell>Sarah Brown</StyledTableSemanticBodyCell>
            <StyledTableSemanticBodyCell>31</StyledTableSemanticBodyCell>
            <StyledTableSemanticBodyCell>100 Broadway st. New York City, New York</StyledTableSemanticBodyCell>
          </StyledTableSemanticBodyRow>
        </StyledTableSemantic>
      </StyledTableSemanticRoot>
    );

    const tableElement = screen.getByText(/Sarah Brown/i);
    expect(tableElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
