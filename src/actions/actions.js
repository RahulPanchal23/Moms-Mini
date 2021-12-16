export const logIn = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};

export const addToCart = (item) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item,
  };
};
