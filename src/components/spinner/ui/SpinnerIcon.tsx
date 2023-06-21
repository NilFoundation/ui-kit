import { forwardRef } from "react";

type SpinnerIconProps = {
  size?: string;
};

const SpinnerIcon = forwardRef<SVGSVGElement, SpinnerIconProps>(({ size = "12" }, ref) => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_22275_878)">
      <rect x="5.625" width="0.75" height="1.5" fill="white" />
      <rect opacity="0.48" x="5.625" y="10.5" width="0.75" height="1.5" fill="white" />
      <rect opacity="0.73" x="1.5" y="5.625" width="0.75" height="1.5" transform="rotate(90 1.5 5.625)" fill="white" />
      <rect opacity="0.24" x="12" y="5.625" width="0.75" height="1.5" transform="rotate(90 12 5.625)" fill="white" />
      <rect
        opacity="0.08"
        x="8.67517"
        y="0.616333"
        width="0.75"
        height="1.5"
        transform="rotate(30 8.67517 0.616333)"
        fill="white"
      />
      <rect
        opacity="0.56"
        x="3.42517"
        y="9.70953"
        width="0.75"
        height="1.5"
        transform="rotate(30 3.42517 9.70953)"
        fill="white"
      />
      <rect
        opacity="0.81"
        x="2.29028"
        y="3.42517"
        width="0.75"
        height="1.5"
        transform="rotate(120 2.29028 3.42517)"
        fill="white"
      />
      <rect
        opacity="0.32"
        x="11.3837"
        y="8.67517"
        width="0.75"
        height="1.5"
        transform="rotate(120 11.3837 8.67517)"
        fill="white"
      />
      <rect
        opacity="0.16"
        x="11.0087"
        y="2.67517"
        width="0.75"
        height="1.5"
        transform="rotate(60 11.0087 2.67517)"
        fill="white"
      />
      <rect
        opacity="0.65"
        x="1.91528"
        y="7.92517"
        width="0.75"
        height="1.5"
        transform="rotate(60 1.91528 7.92517)"
        fill="white"
      />
      <rect
        opacity="0.93"
        x="4.07483"
        y="1.91528"
        width="0.75"
        height="1.5"
        transform="rotate(150 4.07483 1.91528)"
        fill="white"
      />
      <rect
        opacity="0.4"
        x="9.32483"
        y="11.0085"
        width="0.75"
        height="1.5"
        transform="rotate(150 9.32483 11.0085)"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_22275_878">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

SpinnerIcon.displayName = "SpinnerIcon";

export default SpinnerIcon;
