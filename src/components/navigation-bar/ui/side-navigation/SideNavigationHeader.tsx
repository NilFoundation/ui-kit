import { FC, ReactNode } from "react";
import { useStyletron } from "baseui";
import { Button, BUTTON_SIZE } from "../../../button";
import { CloseIcon } from "../../../icons";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

type SideNavigationHeaderProps = {
  onClose?: ((a: { closeSource?: "closeButton" | "backdrop" | "escape" | undefined }) => unknown) | undefined;
  brand?: ReactNode;
};

const SideNavigationHeader: FC<SideNavigationHeaderProps> = ({ brand, onClose }) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
        ...expandProperty("padding", "8px"),
      })}
    >
      {brand}
      <Button size={BUTTON_SIZE.mini} onClick={() => onClose?.({ closeSource: "closeButton" })}>
        <CloseIcon color={PRIMITIVE_COLORS.primary800} size={24} />
      </Button>
    </div>
  );
};

export default SideNavigationHeader;
