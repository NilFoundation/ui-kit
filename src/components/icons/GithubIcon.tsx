import { FC, memo } from "react";
import { IconProps } from "./types";
import { getPreparedSvgProps } from "./utils";
import { Svg } from "baseui/icon/styled-components";

const GithubIcon: FC<IconProps> = ({ title, ...props }) => {
  const svgProps = getPreparedSvgProps(props);
  return (
    <Svg {...props} {...svgProps} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.99996C12.6763 2.00041 9.46111 3.18334 6.92968 5.33716C4.39824 7.49097 2.71564 10.4752 2.18288 13.7559C1.65012 17.0366 2.30195 20.3999 4.02177 23.2441C5.74158 26.0883 8.41719 28.2278 11.57 29.28C12.27 29.41 12.57 28.98 12.57 28.61C12.57 28.24 12.57 27.4 12.57 26.23C8.67998 27.07 7.85998 24.35 7.85998 24.35C7.58643 23.4928 7.0107 22.7642 6.23998 22.3C4.96998 21.44 6.33998 21.45 6.33998 21.45C6.78358 21.5126 7.207 21.6758 7.57789 21.9271C7.94878 22.1785 8.25733 22.5112 8.47998 22.9C8.86732 23.5947 9.51471 24.1072 10.2798 24.3247C11.0449 24.5422 11.8651 24.447 12.56 24.06C12.6164 23.3504 12.9292 22.6857 13.44 22.19C10.34 21.83 7.06998 20.63 7.06998 15.27C7.04731 13.8779 7.5632 12.5308 8.50998 11.51C8.08144 10.3042 8.13154 8.97994 8.64998 7.80996C8.64998 7.80996 9.81998 7.42996 12.5 9.23996C14.7915 8.61491 17.2085 8.61491 19.5 9.23996C22.17 7.42996 23.34 7.80996 23.34 7.80996C23.8584 8.97994 23.9085 10.3042 23.48 11.51C24.4268 12.5308 24.9426 13.8779 24.92 15.27C24.92 20.65 21.65 21.83 18.53 22.18C18.8642 22.5187 19.1219 22.9252 19.2858 23.372C19.4497 23.8187 19.5159 24.2954 19.48 24.77C19.48 26.64 19.48 28.15 19.48 28.61C19.48 29.07 19.73 29.42 20.48 29.28C23.6369 28.2265 26.3153 26.0828 28.0348 23.2334C29.7544 20.384 30.4026 17.0152 29.8633 13.7311C29.324 10.4471 27.6324 7.46254 25.0918 5.31273C22.5513 3.16292 19.328 1.98846 16 1.99996Z"
      />
    </Svg>
  );
};

export default memo(GithubIcon);