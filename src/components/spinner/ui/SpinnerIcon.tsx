import { forwardRef } from "react";
import { styled, useStyletron } from "baseui";
import { PRIMITIVE_COLORS } from "../../../shared";

type SpinnerIconProps = {
  size?: string;
  color?: string;
  animation?: boolean;
};

type TRect = {
  x: string;
  y?: string;
  opacity?: string;
  transform?: string;
};

const rectList: TRect[] = [
  {
    x: "5.625",
  },
  {
    x: "4.07483",
    y: "1.91528",
    opacity: "0.93",
    transform: "rotate(150 4.07483 1.91528)",
  },
  {
    x: "2.29028",
    y: "3.42517",
    opacity: "0.81",
    transform: "rotate(120 2.29028 3.42517)",
  },
  {
    x: "1.5",
    y: "5.625",
    opacity: "0.73",
    transform: "rotate(90 1.5 5.625)",
  },
  {
    x: "1.91528",
    y: "7.92517",
    opacity: "0.65",
    transform: "rotate(60 1.91528 7.92517)",
  },
  {
    x: "3.42517",
    y: "9.70953",
    opacity: "0.56",
    transform: "rotate(30 3.42517 9.70953)",
  },
  {
    x: "5.625",
    y: "10.5",
    opacity: "0.48",
  },
  {
    x: "9.32483",
    y: "11.0085",
    opacity: "0.4",
    transform: "rotate(150 9.32483 11.0085)",
  },
  {
    x: "11.3837",
    y: "8.67517",
    opacity: "0.32",
    transform: "rotate(120 11.3837 8.67517)",
  },
  {
    x: "12",
    y: "5.625",
    opacity: "0.24",
    transform: "rotate(90 12 5.625)",
  },
  {
    x: "11.0087",
    y: "2.67517",
    opacity: "0.16",
    transform: "rotate(60 11.0087 2.67517)",
  },
  {
    x: "8.67517",
    y: "0.616333",
    opacity: "0.08",
    transform: "rotate(30 8.67517 0.616333)",
  },
];

const SpinnerIcon = forwardRef<SVGSVGElement, SpinnerIconProps>(
  ({ size = "12", color = PRIMITIVE_COLORS.white, animation }, ref) => {
    const [css] = useStyletron();

    const RectItem = styled("rect", {
      animationDuration: "1.2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationName: animation
        ? {
            from: {
              opacity: "1",
            },
            to: {
              opacity: "0",
            },
          }
        : "unset",
    });

    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_22275_878)">
          {rectList.map((rectItem, index) => (
            <RectItem
              key={index.toString()}
              {...rectItem}
              className={css({
                animationDelay: `${-1.2 + index * 0.1}s`,
              })}
              opacity={animation ? "1" : rectItem.opacity}
              width="0.75"
              height="1.5"
              fill={color}
            />
          ))}
        </g>
        <defs>
          <clipPath id="clip0_22275_878">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

SpinnerIcon.displayName = "SpinnerIcon";

export default SpinnerIcon;
