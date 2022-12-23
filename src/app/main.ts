import createComponent from '@/utils/helpers';

import { shoppingAppWrapperClass } from '@/utils/constants';
import { shoppingListAppLayoutConfig } from '@/config/layout';

const runShoppingApp = (rootElement: HTMLElement) => {
  const shoppingListApp = createComponent({
    tag: 'div',
    className: shoppingAppWrapperClass,
    childComponents: shoppingListAppLayoutConfig,
  });

  rootElement.appendChild(shoppingListApp);
};

export default runShoppingApp;
