import React, { FC, ReactElement, ReactNode } from "react";
import { useStyletron } from "baseui";
import { COLORS } from "../../../shared";
import { ParagraphSmall } from "baseui/typography";

type PanelTitle = {
  title: ReactNode;
  description?: string;
  icon?: ReactNode;
};

const containerStyles = {
  display: "flex",
  alignItems: "center",
};

const iconStyles = {
  marginRight: "16px",
};

const descriptionStyles = {
  marginBottom: "0",
  marginTop: "4px",
};

const PanelTitle: FC<PanelTitle> = ({ title, description, icon }) => {
  const [css] = useStyletron();

  return (
    <div className={css(containerStyles)}>
      {icon &&
        React.cloneElement(icon as ReactElement, {
          size: "20px",
          color: COLORS.gray50,
          className: css(iconStyles),
        })}
      <div>
        {title}
        {description && (
          <ParagraphSmall color={COLORS.gray50} className={css(descriptionStyles)}>
            {description}
          </ParagraphSmall>
        )}
      </div>
    </div>
  );
};

export default PanelTitle;
