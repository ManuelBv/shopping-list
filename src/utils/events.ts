import {
  shoppingListNameSelector,
  shoppingListNameButtonSelector,
  nukeListsButtonSelector,
  liveListString,
} from '@/utils/constants';
import Storage from '@/utils/storage';

const saveNewShoppingList = () => {
  const saveShoppingListInput = <HTMLInputElement>(
    document.querySelector(shoppingListNameSelector)
  );
  const listName = saveShoppingListInput?.value;

  if (!listName) {
    alert(`Please enter a name for the list!`);
    return;
  }

  const savedList = `${liveListString}${listName}`;

  if (Storage.exists(savedList)) {
    alert(
      `A list with name "${listName.toUpperCase()}" exists already. Please create a new list or check for the already existing list in history!`,
    );
    return;
  }

  Storage.save(savedList, {
    name: listName,
    createdAtUnix: Date.now(),
    items: [],
  });

  alert(`New list added: ${listName.toUpperCase()}`);
};

const nukeAllShoppingLists = () => {
  const approveAllShoppingListsDeletion = confirm(
    'Are you sure you want to nuke all shoppign lists? All contents will be deleted!',
  );

  if (approveAllShoppingListsDeletion) {
    Storage.clearAllLists();
  }
};

const addAllEvents = () => {
  const saveShoppingListInput = <HTMLInputElement>(
    document.querySelector(shoppingListNameSelector)
  );

  const saveShoppingListButton = <HTMLButtonElement>(
    document.querySelector(shoppingListNameButtonSelector)
  );

  const nukeListsButton = <HTMLButtonElement>(
    document.querySelector(nukeListsButtonSelector)
  );

  saveShoppingListButton?.addEventListener('click', (event) => {
    saveNewShoppingList();
  });

  saveShoppingListInput?.addEventListener('keydown', (event) => {
    if ((event as KeyboardEvent).code === 'Enter') {
      saveNewShoppingList();
    }
  });

  nukeListsButton?.addEventListener('click', (event) => {
    nukeAllShoppingLists();
  });
};

const Events = {
  addAllEvents,
};

export default Events;
