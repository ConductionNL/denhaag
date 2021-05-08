import React from "react";
import { Meta, Story } from "@storybook/react";
import MenuList, { MenuListProps } from ".";
import MenuItem from "../../MenuItem";
import pkg from "../package.json";

export default {
  title: 'Components/Navigation/Menu/MenuList',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: MenuList,
} as Meta;

const Template: Story<MenuListProps> = (args: MenuListProps) => (
  <MenuList {...args}>
    <MenuItem>
      <p>This is a MenuItem in a MenuList.</p>
    </MenuItem>
  </MenuList>
);

/**
 * Implementation of MenuList
 */
export const Default = Template.bind({});

/**
 * Implementation of MenuList with menu variant.
 */
export const MenuVariant = Template.bind({});
MenuVariant.args = {
  variant: 'menu',
};