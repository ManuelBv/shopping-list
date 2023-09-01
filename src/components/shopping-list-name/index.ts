import {
  shoppingListNameButtonString,
  shoppingListNameId,
  shoppingListNameString,
  shoppingListNameButtonId,
  fieldRowClass,
} from '@/utils/constants';
import { createComponent } from '@/utils/helpers';

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
    'data-js': shoppingListNameId,
  },
});

export const shoppingListButton = createComponent({
  tag: 'button',
  props: {
    id: shoppingListNameButtonId,
    'data-js': shoppingListNameButtonId,
  },
  childComponents: [shoppingListNameButtonString],
});

export const shoppingListName = createComponent({
  tag: 'div',
  className: fieldRowClass,
  childComponents: [shoppingListLabel, shoppingListInput, shoppingListButton],
});
