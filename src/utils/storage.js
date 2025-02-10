//function to store the data to the local storage
export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
  
//function to access the data to the local storage
export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};
  