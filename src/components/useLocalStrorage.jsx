export const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    try {
      const itemss = window.localStorage.getItem("value");
      return itemss ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };

  return { setItem };
};
