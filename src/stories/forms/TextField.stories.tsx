import React from 'react'
import { Meta, Story } from '@storybook/react'
import TextField, { TextFieldProps } from '../../components/forms/TextField/TextField'

export default {
  title: 'Components/Forms/TextField',
  component: TextField
} as Meta

const Template: Story<TextFieldProps> = (args: TextFieldProps) => {
  return <TextField {...args} />
}

/**
 * Primary TextField
 */
export const Primary: Story<TextFieldProps> = Template.bind({})
Primary.args = {
  label: 'Primary text field'
}
/**
 * Secondary TextField
 */
export const Secondary: Story<TextFieldProps> = Template.bind({})
Secondary.args = {
  label: 'Secondary text field',
  color: 'secondary'
}
/**
 * Outlined TextField
 */
export const Outlined: Story<TextFieldProps> = Template.bind({})
Outlined.args = {
  label: 'Outlined text field',
  variant: 'outlined'
}
/**
 * Filled TextField
 */
export const Filled: Story<TextFieldProps> = Template.bind({})
Filled.args = {
  label: 'Filled text field',
  variant: 'filled'
}
/**
 * Disabled TextField
 */
export const Disabled: Story<TextFieldProps> = Template.bind({})
Disabled.args = {
  label: 'Disabled text field',
  disabled: true
}
/**
 * Textfield using a Select input component
 */
const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

export const Select = (props: TextFieldProps) => (
  <TextField
    select
    SelectProps={{ native: true }}
    helperText='Please select an option'
    {...props}
  >
    {currencies.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </TextField>
)