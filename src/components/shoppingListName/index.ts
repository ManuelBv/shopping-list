import {
  shoppingListNameButtonString,
  shoppingListNameId,
  shoppingListNameString,
} from '@/utils/constants';
import createComponent from '@/utils/helpers';

export const shoppingListLabel = createComponent({
  tag: 'label',
  props: {
    for: shoppingListNameId,
  },
  childComponents: [shoppingListNameString],
});

export const shoppingListInput = createComponent({
  tag: 'input',
  props: {
    id: shoppingListNameId,
  },
});

export const shoppingListButton = createComponent({
  tag: 'button',
  props: {
    id: 'shopping-list-button',
  },
  childComponents: [shoppingListNameButtonString],
});
