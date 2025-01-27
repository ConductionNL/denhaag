import React from 'react';
import { ListItemSecondaryAction as MaterialListItemSecondaryAction } from '@material-ui/core';
import { BaseChildrenProps } from '@gemeente-denhaag/baseprops';

import { listitemsecondaryaction_classes as classes } from './bem-mapping';

export type ListItemSecondaryActionProps = BaseChildrenProps;

/**
 * Primary UI component for user interaction
 */
export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props: ListItemSecondaryActionProps,
) => {
  return (
    <MaterialListItemSecondaryAction {...props} classes={classes}>
      {props.children}
    </MaterialListItemSecondaryAction>
  );
};

export default ListItemSecondaryAction;
