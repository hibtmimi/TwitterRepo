// frontend/screens/redux/actions.js

// Creates Redux functions that edit the Redux variables to be used by any React connected component

export const signup = (x) => {
  return {
    type: "signup",
    signup: x,
  };
};

export const date = (x) => {
  return {
    type: "date",
    date: x,
  };
};
