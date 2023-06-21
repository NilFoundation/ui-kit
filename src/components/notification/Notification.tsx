import React from "react";
import { Notification as BaseNotification } from "baseui/notification";

export type NotificationProps = React.ComponentProps<typeof BaseNotification> & {
  children: React.ReactNode;
};

const Notification: React.FC<NotificationProps> = ({ children, ...props }) => {
  return <BaseNotification {...props}>{children}</BaseNotification>;
};

export default Notification;
