import { shoppingListNameButtonId } from '@/utils/constants';
import Storage from '@/utils/storage';

const addAllEvents = (rootElement: HTMLElement) => {
  rootElement
    .querySelector(`#${shoppingListNameButtonId}`)
    ?.addEventListener('click', (event) => {
      console.log(event);
      Storage.save('hey', { boo: 'boo', hey: 'boooo' });
      console.log(Storage.read('hey'));
    });
};

const Events = {
  addAllEvents,
};

export default Events;
