import {
  deleteLiveShoppingListsFromStorage,
  updateShoppingListNumberStatus,
} from './helpers';

const save = (key: string, data: object) => {
  if (window.localStorage.getItem(key)) {
    console.error(
      `You already have a stored item for << ${key} >>. Please use the .update() method if you need to update a value`,
    );
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(data));
  updateShoppingListNumberStatus();
};

const read = (key: string) => {
  return window.localStorage.getItem(key);
};

const exists = (key: string) => {
  return window.localStorage.getItem(key) !== null;
};

const update = (key: string, data: object) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

const remove = (key: string) => {
  window.localStorage.removeItem(key);
  updateShoppingListNumberStatus();
};

const clearAllLists = () => {
  deleteLiveShoppingListsFromStorage();
  updateShoppingListNumberStatus();
};

const Storage = {
  save,
  read,
  exists,
  update,
  remove,
  clearAllLists,
};

export default Storage;
