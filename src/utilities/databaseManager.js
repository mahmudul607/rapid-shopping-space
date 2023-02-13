



const getUser = () => {
    const existingUser = localStorage.getItem('userData');
    if (existingUser) {
      const userData = JSON.parse(existingUser);
      const username = userData.username;
      return username;
    } 
}
const getUserDataKey =() => {
  const dataOfUser = getUser();
  return `rapid/user/${dataOfUser}`
}

const getDataKey = () => {
    const userData = getUser();
    return `rapid/carts/${userData}`
}

// push to local storage: a temporary place for database

// for user
const getUserDatabase = () =>{
  const userDataKey = getUserDataKey();
  const data = localStorage.getItem(userDataKey) || "{}";
  return JSON.parse(data);
}
// for cart
const getDatabaseCart = () => {
    const dataKey = getDataKey();
      const data = localStorage.getItem(dataKey) || "{}";
    return JSON.parse(data);
}
//for user
const addToDatabaseUser = (key, password, email) => {
    const currentUser = getUserDatabase();
    currentUser[key] = password;
    localStorage.setItem(getUserDataKey(), JSON.stringify(currentUser));
}
// for cart
const addToDatabaseCart = (key, count) => {
    const currentCart = getDatabaseCart();
    currentCart[key] = count;
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = key => {
    const currentCart = getDatabaseCart();
    delete currentCart[key];
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const clearLocalShoppingCart = (cart) => {
    localStorage.removeItem(getDataKey());
}


export { addToDatabaseCart, addToDatabaseUser, getDatabaseCart, getUserDatabase, removeFromDatabaseCart, clearLocalShoppingCart};


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

// end of poly fill