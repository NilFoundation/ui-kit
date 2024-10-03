import { LabelMedium, LabelXSmall } from "baseui/typography";
import { useStyletron } from "styletron-react";
import { StyleObject } from "styletron-standard";
import { CopyButton } from "../../../components";
import { COLORS } from "../../theme";

type ColorPlateProps = {
  colorHex: string;
  colorName: string;
};

const containerStyles: StyleObject = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
  width: "200px",
  height: "48px",
};

const ColorPlate: React.FC<ColorPlateProps> = ({ colorHex, colorName }) => {
  const [css] = useStyletron();
  const colorInteger = hexToInteger(colorHex);
  const bgColor = colorInteger < 5000000 ? COLORS.gray300 : "transparent";

  return (
    <div className={css({ ...containerStyles, backgroundColor: bgColor })}>
      <LabelMedium color={colorHex}>
        {colorName}
        <CopyButton textToCopy={colorHex} />
      </LabelMedium>
      <LabelXSmall color={COLORS.gray500}>{colorHex}</LabelXSmall>
    </div>
  );
};

function hexToInteger(hex: string) {
  return parseInt(hex.replace("#", ""), 16);
}

export default ColorPlate;
