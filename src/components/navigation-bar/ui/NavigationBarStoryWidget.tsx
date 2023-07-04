import { FC } from "react";
import { NavigationBarProps } from "../types";
import NavigationBar from "../NavigationBar";
import AuthDropdownContainer from "../AuthDropdownContainer";
import AuthItem from "../AuthItem";
import { useStyletron } from "baseui";

const container = {
  width: "100%",
  height: "240px",
  transform: "scale(1)",
};

const NavigationBarStoryWidget: FC<NavigationBarProps> = ({ username, ...props }) => {
  const [css] = useStyletron();

  return (
    <div className={css(container)}>
      <NavigationBar
        {...props}
        username={username}
        authDropdownContainer={
          <AuthDropdownContainer username={username}>
            <AuthItem amount="1069" cents="34" currency="USD" />
          </AuthDropdownContainer>
        }
      />
    </div>
  );
};

export default NavigationBarStoryWidget;
