import { ButtonOverrides, ButtonProps, Button as OriginButton  } from "baseui/button";
import { FC } from "react";

// that's test example of what type of overriding do we need

export const buttonOverrides: ButtonOverrides = {
  BaseButton: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.dark100,
      ":hover": {
        backgroundColor: $theme.colors.positive400,
      }
    })
  }
}

export const Button: FC<ButtonProps> = (props) => {
  return <OriginButton
  overrides={buttonOverrides}
  {...props}
  >Button</OriginButton>;
}
