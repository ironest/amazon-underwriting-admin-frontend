const defaultState = {};

export default (state = defaultState, action) => {
  switch(action.type) {
      case "GET_INFO":
          return action.payload;
      default:
          return state;
  }
}
