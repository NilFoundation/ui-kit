import { FC } from "react";
import { Accordion as BaseAccordion, AccordionProps as BaseAccordionProps } from "baseui/accordion";
import { getAccordionOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type AccordionProps = BaseAccordionProps;

const Accordion: FC<AccordionProps> = ({ overrides: baseOverrides, ...props }) => {
  const accordionOverrides = getAccordionOverrides();
  const overrides = getMergedOverrides(accordionOverrides, baseOverrides);

  return <BaseAccordion {...props} overrides={overrides} />;
};

export default Accordion;
