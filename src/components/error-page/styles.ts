import { PRIMITIVE_COLORS } from "../../shared";

const containerStyles = {
  width: "100%",
  height: "100%",
  color: PRIMITIVE_COLORS.white,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
};

const btnStyles = {
  display: "flex",
  alignItems: "center",
};

const errorCodeStyles = {
  fontSize: "330px",
  lineHeight: "340px",
  letterSpacing: "-0.04em",
};

const iconStyles = {
  width: "18px",
  height: "14px",
  marginRight: "6px",
  transform: "rotate(270deg)",
};

const whiteRectangleStyles = {
  width: "100%",
  height: "30px",
  flexShrink: 0,
  background: PRIMITIVE_COLORS.white,
};

export const styles = {
  containerStyles,
  errorCodeStyles,
  iconStyles,
  btnStyles,
  whiteRectangleStyles,
};

const symbols = /[\r\n"%#()<>?[\\\]^`{|}]/g;

function addNameSpace(data: any) {
  if (data.indexOf("http://www.w3.org/2000/svg") < 0) {
    data = data.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }

  return data;
}

function encodeSVG(data: any) {
  // Use single quotes instead of double to avoid encoding.
  if (data.indexOf('"') >= 0) {
    data = data.replace(/"/g, "'");
  }

  data = data.replace(/>\s{1,}</g, "><");
  data = data.replace(/\s{2,}/g, " ");

  return data.replace(symbols, encodeURIComponent);
}

const encode = function (svg: any, fill: any) {
  if (fill) {
    svg = svg.replace(/<svg/g, `<svg fill="${fill}"`);
  }
  const namespaced = addNameSpace(svg);
  const dimensionsRemoved = namespaced
    .replace(/height="\w*" /g, "")
    .replace(/width="\w*" /g, "")
    .replace(/height='\w*' /g, "")
    .replace(/width='\w*' /g, "");
  const encoded = encodeSVG(dimensionsRemoved);

  const header = "data:image/svg+xml,";
  const dataUrl = header + encoded;

  return `url("${dataUrl}")`;
};
