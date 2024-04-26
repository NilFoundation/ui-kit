import { ComponentProps, FC, ReactNode } from "react";
import { HeadingMedium, HeadingSmall, HeadingXSmall, ParagraphSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { MENU_SIZE } from "../types";
import { headerModifiedStyles } from "../styles";
import { COLORS } from "../../../shared";

type MenuHeader = {
  size: MENU_SIZE;
  children: ReactNode;
};

type TypographyProps = ComponentProps<typeof ParagraphSmall>;

const paragraphComponent = {
  [MENU_SIZE.small]: (props: TypographyProps) => <HeadingXSmall as="li" {...props} />,
  [MENU_SIZE.medium]: (props: TypographyProps) => <HeadingSmall as="li" {...props} />,
  [MENU_SIZE.large]: (props: TypographyProps) => <HeadingMedium as="li" {...props} />,
};

const MenuHeader: FC<MenuHeader> = ({ size, children }) => {
  const [css] = useStyletron();

  const TypographyComponent = paragraphComponent[size];

  return (
    <TypographyComponent color={COLORS.gray400} className={css(headerModifiedStyles[size])}>
      {children}
    </TypographyComponent>
  );
};

export default MenuHeader;
