import createComponent from '@/utils/helpers';

import { shoppingAppWrapperClass } from '@/utils/constants';
import { shoppingListAppLayoutConfig } from '@/config/layout';
import addEvents from '@/utils/events';

const addWrapperContent = (rootElement: HTMLElement) => {
  const shoppingListApp = createComponent({
    tag: 'div',
    className: shoppingAppWrapperClass,
    childComponents: shoppingListAppLayoutConfig,
  });

  rootElement.appendChild(shoppingListApp);
};

const runShoppingApp = (rootElement: HTMLElement) => {
  addWrapperContent(rootElement);
  addEvents(rootElement);
};

export default runShoppingApp;
