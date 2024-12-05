const initialState = {
  product: [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_TO_FAVORITE":
      let res = [...state.favorite, action.payload];
      localStorage.setItem("favorite", JSON.stringify(res));
      return {
        ...state,
        favorite: res,
      };
    case "DEL_FAV":
      let del = state.favorite.filter((el) => el.id !== action.payload);
      localStorage.setItem("favorite", JSON.stringify(del));
      return { ...state, favorite: del };
    default:
      return state;
  }
};
