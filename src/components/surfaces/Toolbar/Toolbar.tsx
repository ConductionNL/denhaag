import React from 'react'
import MaterialToolbar from '@material-ui/core/Toolbar'

export interface ToolbarProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode

  /**
   * Override or extend the styles of the component.
   */
  classes?: object

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ElementType

  /**
   * If true, disables gutter padding.
   */
  disableGutters?: boolean

  /**
   * The variant to use.
   */
  variant?: 'regular' | 'dense'
}

/**
 * An element in which content accepting input can be displayed.
 * @param props The properties of a Toolbar component.
 * @constructor Constructs an instance of Toolbar.
 */
export const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
  return <MaterialToolbar {...props}>{props.children}</MaterialToolbar>
}

export default Toolbar
