import React from 'react';


function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  react.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      };
      setItem(parsedItem);
      setLoading(false);

    }, 1000);
  })

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem)
  };
  return {
    item: todos, saveItem:saveTod, loading
  }
}
export default useLocalStorage;