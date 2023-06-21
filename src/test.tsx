import ReactDOM from "react-dom";
import { ParagraphMedium } from "baseui/typography";
import { ThemeWrapper } from "./shared/theme";

ReactDOM.render(
  <div>
    <ThemeWrapper>
      <ParagraphMedium>Hello World</ParagraphMedium>
    </ThemeWrapper>
  </div>,
  document.getElementById("root") as HTMLElement
);
