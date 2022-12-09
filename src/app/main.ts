import createComponent from '../components/utils';

const runShoppingApp = (rootElement: HTMLElement) => {
  const titleBarText = createComponent({
    tag: 'div',
    className: 'title-bar-text',
    childComponents: ['Add your shopping list'],
  });

  const titleBar = createComponent({
    tag: 'div',
    className: 'title-bar',
    childComponents: [titleBarText],
  });

  const shoppingListLabel = createComponent({
    tag: 'label',
    props: {
      for: 'shopping-list-name',
    },
    childComponents: ['Shopping List Name'],
  });

  const shoppingListInput = createComponent({
    tag: 'input',
    props: {
      id: 'shopping-list-name',
    },
  });

  const fieldRow = createComponent({
    tag: 'div',
    className: 'field-row',
    childComponents: [shoppingListLabel, shoppingListInput],
  });

  const shoppingListApp = createComponent({
    tag: 'div',
    className: 'shopping-app-wrapper',
    childComponents: [titleBar, fieldRow],
  });

  rootElement.appendChild(shoppingListApp);
};

export default runShoppingApp;
