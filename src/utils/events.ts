import { shoppingListNameButtonId } from './constants';

const addEvents = (rootElement: HTMLElement) => {
  rootElement
    .querySelector(`#${shoppingListNameButtonId}`)
    ?.addEventListener('click', (event) => {
      console.log(event);
    });
};

export default addEvents;
