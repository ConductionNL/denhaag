import React from 'react'
import MaterialStep from '@material-ui/core/Step'

export interface StepProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object

  /**
   * Should be Step sub-components such as StepLabel, StepContent.
   */
  children: React.ReactNode

  /**
   * Sets the step as active.
   * Is passed to child components.
   */
  active?: boolean

  /**
   * Mark the step as completed.
   * Is passed to child components.
   */
  completed?: boolean

  /**
   * Mark the step as disabled,
   * will also disable the button if StepButton is a child of Step.
   * Is passed to child components.
   */
  disabled?: boolean

  /**
   * Expand the step.
   */
  expanded?: boolean
}

/**
 * Represents a single Step in a Stepper component.
 * @param props The properties of a Step component.
 * @constructor Constructs an instance of Step.
 */
export const Step: React.FC<StepProps> = (props: StepProps) => {
  return <MaterialStep {...props}>{props.children}</MaterialStep>
}

export default Step