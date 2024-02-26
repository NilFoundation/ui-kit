import { render, screen, waitFor } from "@testing-library/react";
import Table from "./Table";
import { TABLE_DIVIDER, TABLE_SIZE } from "./types";

export const data = [
  ["Sarah Brown", 31, "100 Broadway st. New York City, New York"],
  ["Jane Smith", 32, "100 Market st. San Francisco, California"],
  ["Joe Black", 33, "100 Macquarie st. Sydney, Australia"],
];
export const columns = ["Name", "Age", "Address"];

describe("Table", () => {
  it("renders without crashing", () => {
    render(<Table divider={TABLE_DIVIDER.horizontal} size={TABLE_SIZE.default} data={data} columns={columns}></Table>);

    const tableElement = screen.getByText(/Sarah Brown/i);
    expect(tableElement).toBeInTheDocument();
  });

  it("handles custom divider and size", async () => {
    const { rerender } = render(
      <Table divider={TABLE_DIVIDER.horizontal} size={TABLE_SIZE.default} data={data} columns={columns}></Table>
    );

    let tableElement = screen.getByText(/Sarah Brown/i);
    expect(tableElement).toBeInTheDocument();

    rerender(<Table divider={TABLE_DIVIDER.vertical} size={TABLE_SIZE.compact} data={data} columns={columns}></Table>);

    tableElement = screen.getByText(/Sarah Brown/i);
    await waitFor(() => {
      expect(tableElement).toBeInTheDocument();
    });
  });

  // Add more tests as needed
});
