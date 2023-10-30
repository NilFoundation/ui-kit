import { forwardRef } from "react";
import { ToggleGroupOption, ToggleGroupProps } from "./types";
import { useStyletron } from "styletron-react";
import { BUTTON_KIND, BUTTON_SIZE, Button } from "../button";
import { styles as s } from "./style";
import { LabelMedium } from "baseui/typography";

const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ options, selectedOptions, onToggle, disabled, label, multiple, className, size = BUTTON_SIZE.compact }, ref) => {
    const [css] = useStyletron();
    const onToggleHandler = (option: ToggleGroupOption) => {
      const isSelected = selectedOptions.some((x) => x.key === option.key);

      if (multiple) {
        const newSelectedOptions = isSelected
          ? selectedOptions.filter((x) => x.key !== option.key)
          : [...selectedOptions, option];

        onToggle(newSelectedOptions);
      } else {
        onToggle(isSelected ? [] : [option]);
      }
    };

    return (
      <div ref={ref} className={className}>
        {label && <LabelMedium className={css(s.labelStyles)}>{label}</LabelMedium>}
        <div className={css(s.toggleGroupStyles)}>
          {options.map((option) => (
            <Button
              key={option.key}
              disabled={disabled}
              kind={BUTTON_KIND.toggle}
              size={size}
              checked={selectedOptions.some((x) => x.key === option.key)}
              onClick={() => onToggleHandler(option)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>
    );
  }
);

ToggleGroup.displayName = "ToggleGroup";

export default ToggleGroup;
