export default function (state = {}, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return { ...state, ...action.payload };
    case "GET_VIDEOS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
