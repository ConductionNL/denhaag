import React from "react";
import { Meta, Story } from "@storybook/react";
import MenuItem, { MenuItemProps } from ".";
import Menu from "../../Menu";
import pkg from "../package.json";
import Button from "../../Button";

export default {
  title: 'Components/Navigation/Menu/MenuItem',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: MenuItem,
} as Meta;

const Template: Story<MenuItemProps> = (args: MenuItemProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button aria-controls="menu" onClick={handleClick}>
        Click me!
      </Button>
      <Menu {...args} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} id="menu">
        <MenuItem {...args}>
          <p>This is a MenuItem.</p>
        </MenuItem>
      </Menu>
    </div>
  );
};

/**
 * Implementation of MenuItem
 */
export const Default = Template.bind({});

/**
 * Implementation with compact virtual padding.
 */
export const DenseMenu = Template.bind({});
DenseMenu.args = {
  dense: true,
};

/**
 * Implementation without gutters
 */
export const DisabledGutter = Template.bind({});
DisabledGutter.args = {
  disableGutters: true,
};