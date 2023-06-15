import { ComponentProps, FC, ReactNode } from "react";
import { LabelLarge, LabelMedium, LabelSmall, ParagraphSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { MENU_SIZE } from "../types";
import { headerModifiedStyles } from "../styles";

type MenuHeader = {
  size: MENU_SIZE;
  children: ReactNode;
};

type TypographyProps = ComponentProps<typeof ParagraphSmall>;

const paragraphComponent = {
  [MENU_SIZE.small]: (props: TypographyProps) => <LabelSmall color="primary300" as="li" {...props} />,
  [MENU_SIZE.medium]: (props: TypographyProps) => <LabelMedium color="primary300" as="li" {...props} />,
  [MENU_SIZE.large]: (props: TypographyProps) => <LabelLarge color="primary300" as="li" {...props} />,
};

const MenuHeader: FC<MenuHeader> = ({ size, children }) => {
  const [css] = useStyletron();

  const TypographyComponent = paragraphComponent[size];

  return (
    <TypographyComponent className={css(headerModifiedStyles[size])} as="li">
      {children}
    </TypographyComponent>
  );
};

export default MenuHeader;
