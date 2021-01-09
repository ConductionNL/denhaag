import MaterialPaper from '@material-ui/core/Paper'
import React from 'react'
import { BasePaperProps } from './BasePaperProps'

export interface PaperProps extends BasePaperProps {}

export const Paper: React.FC<PaperProps> = (props: PaperProps) => {
  return <MaterialPaper {...props}>{props.children}</MaterialPaper>
}

/**
 * Default export for Paper
 */
export default Paper