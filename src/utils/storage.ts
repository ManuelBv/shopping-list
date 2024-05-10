import {
  deleteLiveShoppingListsFromStorage,
  updateShoppingListNumberStatus,
} from './helpers';

const dbName = 'todoListApp';
const storeName = 'tasks';

interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

class IndexedDBService {
  private db: IDBDatabase | null = null;

  async openDB() {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);

      request.onupgradeneeded = event => {
        this.db = (event.target as IDBOpenDBRequest).result;
        if (!this.db.objectStoreNames.contains(storeName)) {
          this.db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = event => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve();
      };

      request.onerror = event => {
        console.error('Database error:', request.error);
        reject(request.error);
      };
    });
  }

  async addTask(task: Task) {
    return new Promise<number>((resolve, reject) => {
      const transaction = this.db!.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(task);

      request.onsuccess = () => {
        console.log('Task added:', request.result);
        resolve(request.result as number);
      };

      request.onerror = () => {
        console.error('Error adding task:', request.error);
        reject(request.error);
      };
    });
  }
}

export const dbService = new IndexedDBService();

async function addNewTask(title: string) {
  await dbService.openDB();
  await dbService.addTask({ title, completed: false });
}


const save = (key: string, data: object) => {
  if (window.localStorage.getItem(key)) {
    console.error(
      `You already have a stored item for << ${key} >>. Please use the .update() method if you need to update a value`,
    );
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(data));

  addNewTask('Complete IndexedDB tutorial');

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
