const defaultState = {
  token: sessionStorage.getItem("token")
};

export default (state = defaultState, action) => {
  switch(action.type) {
      case "AUTH_TOKEN":
          return { token: action.payload };
      default:
          return state;
  }
}