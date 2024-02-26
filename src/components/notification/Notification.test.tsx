import { render, screen } from "@testing-library/react";
import Notification from "./Notification";
import { NOTIFICATION_KIND } from "./types";

describe("Notification", () => {
  it("renders without crashing", () => {
    render(<Notification kind={NOTIFICATION_KIND.info}>Test Notification</Notification>);

    const notificationElement = screen.getByText(/Test Notification/i);
    expect(notificationElement).toBeInTheDocument();
  });

  it("handles kind prop", () => {
    const { rerender } = render(<Notification kind={NOTIFICATION_KIND.info}>Test Notification</Notification>);

    let notificationElement = screen.getByText(/Test Notification/i);
    expect(notificationElement).toBeInTheDocument();

    rerender(<Notification kind={NOTIFICATION_KIND.negative}>Test Notification</Notification>);

    notificationElement = screen.getByText(/Test Notification/i);
    expect(notificationElement).toBeInTheDocument();
  });

  // Add more tests as needed
});
