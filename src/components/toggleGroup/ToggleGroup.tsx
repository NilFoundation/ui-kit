import { ForwardedRef, forwardRef } from "react";
import { ToggleGroupOption, ToggleGroupProps } from "./types";
import { useStyletron } from "styletron-react";
import { BUTTON_KIND, BUTTON_SIZE, Button } from "../button";
import { styles as s } from "./style";
import { LabelMedium } from "baseui/typography";

const ToggleGroupInner = <T extends ToggleGroupOption>(
  { options, value, onChange, disabled, label, multiple, className, size = BUTTON_SIZE.compact }: ToggleGroupProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [css] = useStyletron();
  const onToggleHandler = ({ key }: ToggleGroupOption) => {
    const isSelected = value.some((x) => x === key);

    if (multiple) {
      const newSelectedOptions = isSelected ? value.filter((x) => x !== key) : [...value, key];
      onChange(newSelectedOptions);
    } else {
      onChange(isSelected ? [] : [key]);
    }
  };

  return (
    <div ref={ref} className={className}>
      {label && <LabelMedium className={css(s.labelStyles)}>{label}</LabelMedium>}
      <div className={css(s.toggleGroupStyles)}>
        {options.map((option) => (
          <Button
            key={option.key}
            disabled={disabled || option.disabled}
            kind={BUTTON_KIND.toggle}
            size={size}
            checked={value.some((x) => x === option.key)}
            onClick={() => onToggleHandler(option)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

const ToggleGroup = forwardRef(ToggleGroupInner) as <T extends ToggleGroupOption>(
  props: ToggleGroupProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof ToggleGroupInner>;

export default ToggleGroup;
