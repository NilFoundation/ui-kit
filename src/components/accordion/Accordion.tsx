import { FC } from "react";
import { Accordion as BaseAccordion, AccordionProps as BaseAccordionProps } from "baseui/accordion";
import { getAccordionOverrides } from "./overrides";

export type AccordionProps = BaseAccordionProps;

const Accordion: FC<AccordionProps> = ({ ...props }) => {
  const overrides = getAccordionOverrides();

  return <BaseAccordion {...props} overrides={overrides} />;
};

export default Accordion;
