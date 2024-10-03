import { FC } from "react";
import { COLORS } from "../../shared";

export type BrandProps = {
  color?: string;
  className?: string;
};

export const Brand: FC<BrandProps> = ({ color = COLORS.gray800, className }) => {
  return (
    <svg
      className={className}
      width="160"
      height="28"
      viewBox="0 0 160 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.9889 21.9834V10.2465H28.8555V21.9834H31.9889ZM31.9889 9.09381V6.01477H28.8555V9.09381H31.9889ZM21.9099 12.5179C20.8618 12.5179 20.1427 12.9594 19.7524 13.8423C19.55 14.3089 19.4488 14.9047 19.4488 15.6298V21.9828H16.3696V10.2674H19.3512V11.9795C19.7488 11.3765 20.1246 10.9422 20.4788 10.6766C21.1148 10.2028 21.9208 9.96594 22.8966 9.96594C24.1181 9.96594 25.1156 10.2854 25.889 10.9243C26.6696 11.556 27.0599 12.6076 27.0599 14.0792V21.9828H23.894V14.8437C23.894 14.2264 23.8109 13.7526 23.6447 13.4224C23.3411 12.8194 22.7629 12.5179 21.9099 12.5179ZM13.2293 12.2167V15.0486H3.00024V12.2167H13.2293ZM3.00024 20.0771V17.2452H13.2293V20.0771H3.00024ZM33.9465 6.11218H37.0365V21.9839H33.9465V6.11218ZM40.0305 25.7199C40.2329 25.7199 40.5943 25.6123 41.1148 25.3969C41.6352 25.1815 42.0797 24.8693 42.4483 24.4601C42.8025 24.0725 43.0446 23.613 43.1747 23.0818C43.3049 22.5578 43.3699 22.0481 43.3699 21.5528V18.8796H40.2553V21.9835H41.9063C41.8557 22.6152 41.74 23.0961 41.5593 23.4264C41.2702 23.9576 40.7606 24.3273 40.0305 24.5355V25.7199ZM40.2044 13.9184H43.3035V10.7982H40.2044V13.9184ZM61.8845 8.9224H53.8721V12.5727H60.887V15.3292H53.8721V21.9837H50.5544V6.13354H61.8845V8.9224ZM74.1203 16.1363C74.1203 14.4421 73.6216 12.9741 72.6241 11.7322C71.6266 10.4903 70.1124 9.86938 68.0813 9.86938C66.0502 9.86938 64.5359 10.4903 63.5384 11.7322C62.541 12.9741 62.0422 14.4421 62.0422 16.1363C62.0422 17.859 62.541 19.3343 63.5384 20.5617C64.5359 21.7822 66.0502 22.3923 68.0813 22.3923C70.1124 22.3923 71.6266 21.7822 72.6241 20.5617C73.6216 19.3343 74.1203 17.859 74.1203 16.1363ZM65.9779 13.4227C66.4694 12.7839 67.1669 12.4644 68.0705 12.4644C68.9739 12.4644 69.6678 12.7839 70.1521 13.4227C70.6364 14.0545 70.8786 14.959 70.8786 16.1363C70.8786 17.3135 70.6364 18.2216 70.1521 18.8605C69.6678 19.4994 68.9739 19.8188 68.0705 19.8188C67.1669 19.8188 66.4694 19.4994 65.9779 18.8605C65.4937 18.2216 65.2515 17.3135 65.2515 16.1363C65.2515 14.959 65.4937 14.0545 65.9779 13.4227ZM82.8122 20.3249C82.7833 20.3607 82.711 20.4684 82.5953 20.6479C82.4797 20.8274 82.3423 20.9853 82.1833 21.1216C81.699 21.5524 81.2292 21.8467 80.7738 22.0046C80.3256 22.1625 79.7981 22.2415 79.1909 22.2415C77.4417 22.2415 76.2635 21.617 75.6563 20.3679C75.3166 19.6788 75.1467 18.663 75.1467 17.3207V10.2462H78.3126V17.3207C78.3126 17.9883 78.3922 18.4907 78.5512 18.8281C78.8331 19.4239 79.386 19.7219 80.2101 19.7219C81.2653 19.7219 81.9881 19.2984 82.3785 18.4513C82.5809 17.9918 82.6821 17.3853 82.6821 16.6315V10.2462H85.8154V21.9831H82.8122V20.3249ZM91.101 13.8423C91.491 12.9594 92.2105 12.5179 93.2586 12.5179C94.1117 12.5179 94.69 12.8194 94.9934 13.4224C95.1598 13.7526 95.2422 14.2264 95.2422 14.8437V21.9828H98.4083V14.0792C98.4083 12.6076 98.0183 11.556 97.2375 10.9243C96.4643 10.2854 95.4666 9.96594 94.2453 9.96594C93.2695 9.96594 92.4635 10.2028 91.8272 10.6766C91.4734 10.9422 91.0968 11.3765 90.6993 11.9795V10.2674H87.718V21.9828H90.7976V15.6298C90.7976 14.9047 90.8985 14.3089 91.101 13.8423ZM110.918 6.13354V21.9837H107.915V20.3578C107.474 21.0541 106.972 21.5602 106.408 21.876C105.844 22.1919 105.143 22.3498 104.304 22.3498C102.924 22.3498 101.76 21.7971 100.814 20.6916C99.8739 19.5789 99.4041 18.154 99.4041 16.4167C99.4041 14.414 99.8663 12.8383 100.792 11.6897C101.724 10.5412 102.967 9.96688 104.521 9.96688C105.237 9.96688 105.873 10.1248 106.43 10.4407C106.986 10.7493 107.438 11.18 107.785 11.7328V6.13354H110.918ZM102.591 16.1906C102.591 17.2746 102.808 18.1396 103.242 18.7857C103.669 19.4389 104.319 19.7655 105.193 19.7655C106.068 19.7655 106.733 19.4425 107.189 18.7964C107.643 18.1503 107.871 17.3141 107.871 16.2875C107.871 14.8519 107.506 13.8253 106.776 13.208C106.328 12.8347 105.808 12.6481 105.215 12.6481C104.312 12.6481 103.647 12.989 103.22 13.671C102.801 14.3458 102.591 15.1857 102.591 16.1906ZM117.277 9.96594C115.289 9.96594 113.888 10.4828 113.071 11.5165C112.557 12.1769 112.268 13.0204 112.203 14.0469H115.184C115.257 13.5947 115.401 13.2358 115.618 12.9701C115.922 12.6112 116.438 12.4318 117.169 12.4318C117.819 12.4318 118.311 12.5251 118.643 12.7117C118.983 12.8912 119.153 13.2214 119.153 13.7024C119.153 14.0972 118.932 14.3879 118.492 14.5745C118.245 14.6822 117.837 14.772 117.266 14.8437L116.215 14.9729C115.022 15.1237 114.119 15.3749 113.504 15.7267C112.384 16.3728 111.823 17.4173 111.823 18.8601C111.823 19.9728 112.17 20.8342 112.865 21.4444C113.566 22.0474 114.451 22.3489 115.521 22.3489C116.359 22.3489 117.111 22.1587 117.776 21.7782C118.333 21.4552 118.824 21.0639 119.251 20.6045C119.272 20.8701 119.301 21.107 119.337 21.3152C119.373 21.5233 119.438 21.7459 119.532 21.9828H122.893V21.5306C122.691 21.4372 122.54 21.3188 122.438 21.1752C122.337 21.0317 122.276 20.7588 122.254 20.3568C122.24 19.8256 122.232 19.3733 122.232 19.0001V13.6162C122.232 12.202 121.729 11.2401 120.725 10.7305C119.721 10.2208 118.571 9.96594 117.277 9.96594ZM116.432 20.12C116.012 20.12 115.658 20.0015 115.369 19.7646C115.073 19.5349 114.925 19.158 114.925 18.634C114.925 18.0454 115.163 17.6111 115.64 17.3311C115.922 17.166 116.388 17.026 117.039 16.9112L117.733 16.7819C118.08 16.7174 118.351 16.6491 118.546 16.5773C118.748 16.4984 118.946 16.3979 119.142 16.2759V17.4173C119.12 18.4438 118.828 19.1509 118.264 19.5385C117.708 19.9261 117.097 20.12 116.432 20.12ZM129.286 19.7976V22.091L127.822 22.1449C126.362 22.1952 125.365 21.9439 124.83 21.3912C124.483 21.0394 124.31 20.4974 124.31 19.7652V11.6995H122.662V9.51369H124.31V6.01477H127.367V9.51369H129.286V11.6995H127.367V18.7423C127.367 19.2233 127.428 19.5247 127.552 19.6468C127.674 19.7616 128.05 19.8191 128.679 19.8191H128.971L129.101 19.8103L129.286 19.7976ZM146.581 16.1363C146.581 14.4421 146.083 12.9741 145.085 11.7322C144.087 10.4903 142.573 9.86938 140.542 9.86938C138.511 9.86938 136.997 10.4903 135.999 11.7322C135.002 12.9741 134.503 14.4421 134.503 16.1363C134.503 17.859 135.002 19.3343 135.999 20.5617C136.997 21.7822 138.511 22.3923 140.542 22.3923C142.573 22.3923 144.087 21.7822 145.085 20.5617C146.083 19.3343 146.581 17.859 146.581 16.1363ZM138.438 13.4227C138.93 12.7839 139.628 12.4644 140.531 12.4644C141.435 12.4644 142.129 12.7839 142.613 13.4227C143.097 14.0545 143.339 14.959 143.339 16.1363C143.339 17.3135 143.097 18.2216 142.613 18.8605C142.129 19.4994 141.435 19.8188 140.531 19.8188C139.628 19.8188 138.93 19.4994 138.438 18.8605C137.954 18.2216 137.712 17.3135 137.712 16.1363C137.712 14.959 137.954 14.0545 138.438 13.4227ZM153.256 12.5179C152.208 12.5179 151.488 12.9594 151.098 13.8423C150.896 14.3089 150.795 14.9047 150.795 15.6298V21.9828H147.715V10.2674H150.697V11.9795C151.095 11.3765 151.471 10.9422 151.825 10.6766C152.461 10.2028 153.267 9.96594 154.243 9.96594C155.464 9.96594 156.462 10.2854 157.235 10.9243C158.016 11.556 158.406 12.6076 158.406 14.0792V21.9828H155.24V14.8437C155.24 14.2264 155.157 13.7526 154.991 13.4224C154.687 12.8194 154.109 12.5179 153.256 12.5179ZM133.33 21.9834V10.2465H130.197V21.9834H133.33ZM133.33 9.09381V6.01477H130.197V9.09381H133.33Z"
        fill={color}
      />
    </svg>
  );
};

export default Brand;
