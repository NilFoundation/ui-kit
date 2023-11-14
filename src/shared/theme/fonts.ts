import type { StandardEngine } from "styletron-standard";
import { DefaultFonts } from "./types";

const InterRegularUrl =
  "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2";
const InterSemiBoldUrl =
  "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2";
const InterMediumUrl =
  "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZJhiJ-Ek-_EeAmM.woff2";
const RobotoMonoRegularUrl =
  "https://fonts.gstatic.com/s/robotomono/v22/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4AJi8SJQt.woff2";

export const getDefaultFonts = (instance: StandardEngine): DefaultFonts => {
  const InterRegular = instance.renderFontFace({
    src: `url("${InterRegularUrl}")`,
    fontStyle: "normal",
    fontWeight: 400,
  });

  const InterSemiBold = instance.renderFontFace({
    src: `url("${InterSemiBoldUrl}")`,
    fontStyle: "normal",
    fontWeight: 600,
  });

  const InterMedium = instance.renderFontFace({
    src: `url("${InterMediumUrl})`,
    fontStyle: "normal",
    fontWeight: 500,
  });

  const RobotoMonoRegular = instance.renderFontFace({
    src: `url("${RobotoMonoRegularUrl}")`,
    fontStyle: "normal",
    fontWeight: 400,
  });

  return {
    defaultRegularFont: InterRegular,
    defaultSemiBoldFont: InterSemiBold,
    defaultMonoRegularFont: RobotoMonoRegular,
    defaultMediumFont: InterMedium,
  };
};
