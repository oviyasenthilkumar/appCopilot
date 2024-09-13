import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["group-30", "group-1410082888"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "group-30",
    className: {},
    pullDataClassName: {},
  },
};
