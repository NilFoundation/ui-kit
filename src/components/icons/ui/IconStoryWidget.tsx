import React from "react";
import { useStyletron } from "baseui";

type IconsWidgetProps = {
  icon: React.ReactNode;
  size?: number;
  color?: string;
};

const listStyles = {
  display: "flex",
  alignItems: "center",
  gridGap: "12px",
  margin: "0",
  padding: "0",
  listStyle: "none",
};

const IconStoryWidget: React.FC<IconsWidgetProps> = ({ color, size, icon }) => {
  const [css] = useStyletron();

  return (
    <ul className={css(listStyles)}>
      {["16px", "20px", "24px", "32px"].map((sizeItem) => (
        <li key={sizeItem}>
          {React.cloneElement(icon as any, {
            size: size ?? sizeItem,
            color,
          })}
        </li>
      ))}
    </ul>
  );
};

export default IconStoryWidget;
