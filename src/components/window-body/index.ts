import { createComponent } from '@/utils/helpers';
import { nukeListsWrapper } from '../nuke-lists';
import { shoppingListName } from '../shopping-list-name';

export const windowBody = createComponent({
  tag: 'div',
  className: 'window-body',
  childComponents: [shoppingListName, nukeListsWrapper],
});
