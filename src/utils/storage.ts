const save = (key: string, data: object) => {
  if (window.localStorage.getItem(key)) {
    console.error(
      `You already have a stored item for << ${key} >>. Please use the .update() method if you need to update a value`,
    );
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(data));
};

const read = (key: string) => {
  return window.localStorage.getItem(key);
};

const update = (key: string, data: object) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

const remove = (key: string) => {
  window.localStorage.removeItem(key);
};

const Storage = {
  save,
  read,
  update,
  remove,
};

export default Storage;
