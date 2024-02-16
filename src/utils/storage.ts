import {
  deleteLiveShoppingListsFromStorage,
  updateShoppingListNumberStatus,
} from './helpers';

let db: IDBDatabase;
const setupDB = window.indexedDB.open('shoppingListDB', 1);

setupDB.addEventListener('error', () => {
  console.log('Error opening DB!');
})

setupDB.addEventListener('success', () => {
  console.log('Yay, we have DB!');
  db = setupDB.result;
})

setupDB.addEventListener('upgradeneeded', (init: any) => {
  db = init.target.result;

  db.onerror = () => {
    console.log('Error loading DB!');
  }

  const table = db.createObjectStore('shoppingListTable', { keyPath: 'name', autoIncrement:true });
  table.createIndex('name', 'name', { unique: true });
})


const save = (key: string, data: object) => {
  if (window.localStorage.getItem(key)) {
    console.error(
      `You already have a stored item for << ${key} >>. Please use the .update() method if you need to update a value`,
    );
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(data));

  const transaction = db.transaction(['shoppingListTable'], 'readwrite');
  const objectStoreTable = transaction.objectStore('shoppingListTable');
  objectStoreTable.add(data);

  // continue https://blog.logrocket.com/using-indexeddb-complete-guide/

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
