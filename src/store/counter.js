const initialState = { value: "" };

export const counter = (state = initialState, action) => {
  const lastElem = state.value.slice(-1);

  switch (action.type) {
    case "ADD_NUMBER":
      return { ...state, value: state.value + action.payload };

    case "ADD_ZERO":
      if (lastElem === "" || lastElem === "+" || lastElem === "") {
        return state;
      } else return { ...state, value: state.value + 0 };

    case "ADD_PLUS":
      if (lastElem === "-" || lastElem === "*" || lastElem === "/") {
        return { ...state, value: state.value.slice(0, -1) + "+" };
      } else if (lastElem === "+" || lastElem === "") {
        return state;
      } else return { value: eval(state.value) + "+" };

    case "ADD_MINUS":
      if (lastElem === "*" || lastElem === "+" || lastElem === "/") {
        return { ...state, value: state.value.slice(0, -1) + "-" };
      } else if (state.value === "") {
        return { value: "-" };
      } else if (state.value.slice(-1) !== "-") {
        return { value: eval(state.value) + "-" };
      } else return state;

    case "ADD_MULTIPLY":
      if (lastElem === "-" || lastElem === "+" || lastElem === "/") {
        return { ...state, value: state.value.slice(0, -1) + "*" };
      } else if (lastElem === "*" || lastElem === "") {
        return state;
      } else return { value: eval(state.value) + "*" };

    case "ADD_DIVIDE":
      if (lastElem === "-" || lastElem === "+" || lastElem === "*") {
        return { ...state, value: state.value.slice(0, -1) + "/" };
      } else if (lastElem === "/" || lastElem === "") {
        return state;
      } else return { value: eval(state.value) + "/" };

    case "ADD_EQUAL":
      if (
        lastElem === "" ||
        lastElem === "+" ||
        lastElem === "-" ||
        lastElem === "*" ||
        lastElem === "/"
      ) {
        return state;
      } else return { value: eval(state.value) + "" };

    case "ADD_CLEAR":
      return { value: "" };

    case "ADD_BACK":
      return { value: state.value.slice(0, -1) };

    default:
      return state;
  }
};
