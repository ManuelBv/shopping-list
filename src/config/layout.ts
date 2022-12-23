import titleBar from '@/components/titleBar';
import {
  shoppingListInput,
  shoppingListLabel,
  shoppingListButton,
} from '@/components/shoppingListName';
import fieldRow from '@/components/fieldRow';

export const shoppingListAppLayoutConfig = [
  titleBar,
  fieldRow([shoppingListLabel, shoppingListInput, shoppingListButton]),
];
