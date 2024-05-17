import { FC, ReactNode } from "react";
import { useStyletron } from "styletron-react";
import { StyleObject } from "styletron-standard";
import ColorPlate from "./ColorPlate";
import { COLORS } from "../../theme";
import { ParagraphMedium } from "baseui/typography";

type ColorsContainerProps = {
  children: ReactNode;
};

const styles: StyleObject = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
};

const ColorsContainer: FC<ColorsContainerProps> = () => {
  const [css] = useStyletron();

  const initialColorGroups = {
    gray: [<ParagraphMedium key="Gray">Gray</ParagraphMedium>],
    red: [<ParagraphMedium key="Red">Red</ParagraphMedium>],
    green: [<ParagraphMedium key="Green">Green</ParagraphMedium>],
    blue: [<ParagraphMedium key="Blue">Blue</ParagraphMedium>],
    yellow: [<ParagraphMedium key="Yellow">Yellow</ParagraphMedium>],
    purple: [<ParagraphMedium key="Purple">Purple</ParagraphMedium>],
    orange: [<ParagraphMedium key="Orange">Orange</ParagraphMedium>],
  };

  const colorNames = Object.keys(COLORS).filter((colorName) => colorName !== "black");

  const colors = colorNames.reduce((acc, current) => {
    const colorName = current;
    const colorValue = COLORS[current as keyof typeof COLORS];
    const colorNameIndex = colorName.split("").findIndex((char) => Number.isInteger(Number(char)));
    const colorType = colorName.slice(0, colorNameIndex);

    acc[colorType as keyof typeof initialColorGroups].push(
      <ColorPlate key={colorName} colorName={colorName} colorHex={colorValue} />
    );
    return acc;
  }, initialColorGroups);

  return (
    <div className={css(styles)}>
      <div>{colors.gray}</div>
      <div>{colors.red}</div>
      <div>{colors.green}</div>
      <div>{colors.blue}</div>
      <div>{colors.yellow}</div>
      <div>{colors.purple}</div>
      <div>{colors.orange}</div>
      <div>
        <ParagraphMedium key="Black">Black</ParagraphMedium>
        <ColorPlate key="black" colorName="black" colorHex={COLORS.black} />,
      </div>
    </div>
  );
};

export default ColorsContainer;
