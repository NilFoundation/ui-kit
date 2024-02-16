import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { ROLE } from "baseui/modal";

describe("Modal", () => {
  it("renders without crashing", () => {
    render(
      <Modal isOpen={true} onClose={() => {}} role={ROLE.dialog}>
        Test Modal
      </Modal>
    );

    const modalElement = screen.getByText(/Test Modal/i);
    expect(modalElement).toBeInTheDocument();
  });

  it("handles close events", async () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} role={ROLE.dialog}>
        Test Modal
      </Modal>
    );

    const closeButton = screen.getByRole("button");
    userEvent.click(closeButton);

    await waitFor(() => expect(handleClose).toHaveBeenCalledTimes(1));
  });

  // Add more tests as needed
});
