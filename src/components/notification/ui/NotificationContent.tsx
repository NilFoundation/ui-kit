import { FC, ReactNode } from "react";
import { LabelMedium } from "baseui/typography";
import { useStyletron } from "baseui";
import { buttonWrapperStyles, containerStyles, iconStyles, wrapperStyles } from "../styles";

type NotificationContentProps = {
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
};

const NotificationContent: FC<NotificationContentProps> = ({ action, icon, children }) => {
  const [css] = useStyletron();
  return (
    <div className={css(containerStyles)}>
      <div className={css(wrapperStyles)}>
        {icon && <span className={css(iconStyles)}>{icon}</span>}
        <LabelMedium>{children}</LabelMedium>
      </div>
      <div className={css(buttonWrapperStyles)}>{action}</div>
    </div>
  );
};

export default NotificationContent;
