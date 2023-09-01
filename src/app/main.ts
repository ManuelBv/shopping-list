import { createComponent } from '@/utils/helpers';
import { shoppingListAppLayoutConfig } from '@/config/layout';
import Events from '@/utils/events';

const addWrapperContent = (rootElement: HTMLElement) => {
  const shoppingListApp = createComponent({
    tag: 'div',
    className: 'window',
    childComponents: shoppingListAppLayoutConfig,
  });

  rootElement.appendChild(shoppingListApp);
};

const runShoppingApp = (rootElement: HTMLElement) => {
  addWrapperContent(rootElement);
  Events.addAllEvents();
};

export default runShoppingApp;
