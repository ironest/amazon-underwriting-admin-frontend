const defaultState = [];

export default (state = defaultState, action) => {
  switch(action.type) {
      case "GET_NEWS":
          return action.payload;
      default:
          return state;
  }
}
