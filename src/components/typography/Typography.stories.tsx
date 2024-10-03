import React from "react";
import { ComponentMeta, Story } from "@storybook/react";

import ParagraphStory from "./ui/ParagraphStory";
import LabelStory from "./ui/LabelStory";
import HeadingStory from "./ui/HeadingStory";
import DisplayStory from "./ui/DisplayStory";

export default {
  title: "Typography/Typography",
  component: ParagraphStory,
} as ComponentMeta<typeof ParagraphStory>;

type TemplateType = {
  storyComponent: React.ReactNode;
  children: React.ReactNode;
};

// eslint-disable-next-line react/prop-types
const Template: Story<TemplateType> = ({ storyComponent, children }) => {
  return (
    <>
      {/*@ts-ignore*/}
      {React.cloneElement(storyComponent, {
        children,
      })}
    </>
  );
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  storyComponent: <ParagraphStory />,
  children: "Lorem Ipsum is simply",
};

export const Label = Template.bind({});
Label.args = {
  storyComponent: <LabelStory />,
  children: "Lorem Ipsum is simply",
};

export const Heading = Template.bind({});
Heading.args = {
  storyComponent: <HeadingStory />,
  children: "Lorem Ipsum is simply",
};

export const Display = Template.bind({});
Display.args = {
  storyComponent: <DisplayStory />,
  children: "Lorem",
};
