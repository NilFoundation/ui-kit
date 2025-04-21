import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { ROLE } from "baseui/modal";
import { render } from "../../test-utils/render";
import { createComponentSSRTest } from "../../test-utils/createComponentSSRTest";
import { describe, expect, it, vi } from "vitest";

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
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} role={ROLE.dialog}>
        Test Modal
      </Modal>
    );

    const closeButton = screen.getByRole("button");
    userEvent.click(closeButton);

    await waitFor(() => expect(handleClose).toHaveBeenCalledTimes(1));
  });

  it("renders ssr without crashing", () => {
    createComponentSSRTest(
      <Modal isOpen={true} onClose={() => {}} role={ROLE.dialog}>
        Test Modal
      </Modal>
    );
  });

  // Add more tests as needed
});
