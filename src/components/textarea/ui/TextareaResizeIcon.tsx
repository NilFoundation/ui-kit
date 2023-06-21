import { FC } from "react";
import { useStyletron } from "baseui";

const TextareaResizeIcon: FC = () => {
  const [css] = useStyletron();

  return (
    <div className={css({ position: "absolute", bottom: "0", right: "4px", pointerEvents: "none" })}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7494 11.2549V9.27246L9.27179 18.7501H11.2542L18.7494 11.2549ZM13.022 18.7501L18.7494 13.0227V15.0049L15.0042 18.7501H13.022ZM16.772 18.7501H18.7494V16.7727L16.772 18.7501Z"
          fill="#757575"
        />
      </svg>
    </div>
  );
};

export default TextareaResizeIcon;
