export const setStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const getStorage = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
};
