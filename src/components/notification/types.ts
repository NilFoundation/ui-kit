import React from "react";
import { Notification as BaseNotification } from "baseui/notification";

export enum NOTIFICATION_KIND {
  info = "info",
  warning = "warning",
  positive = "positive",
  negative = "negative",
}

type BaseNotificationProps = Omit<React.ComponentProps<typeof BaseNotification>, "kind">;

export type NotificationProps = BaseNotificationProps & {
  children: React.ReactNode;
  hideIcon?: boolean;
  kind?: NOTIFICATION_KIND;
  icon?: React.ReactNode;
  isAction?: boolean;
  actionLabel?: string;
};
