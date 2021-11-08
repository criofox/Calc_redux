import { connect } from "react-redux";
import { Impact } from "./Impact";

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => {
      dispatch({ type: "ADD_NUMBER", payload: "1" });
    },
    addPlus: () => {
      dispatch({ type: "ADD_PLUS" });
    },
    addMinus: () => {
      dispatch({ type: "ADD_MINUS" });
    },
    addEqual: () => {
      dispatch({ type: "ADD_EQUAL" });
    },
    addTwo: () => {
      dispatch({ type: "ADD_NUMBER", payload: "2" });
    },
    addThree: () => {
      dispatch({ type: "ADD_NUMBER", payload: "3" });
    },
    addFour: () => {
      dispatch({ type: "ADD_NUMBER", payload: "4" });
    },
    addFive: () => {
      dispatch({ type: "ADD_NUMBER", payload: "5" });
    },
    addSix: () => {
      dispatch({ type: "ADD_NUMBER", payload: "6" });
    },
    addSeven: () => {
      dispatch({ type: "ADD_NUMBER", payload: "7" });
    },
    addEight: () => {
      dispatch({ type: "ADD_NUMBER", payload: "8" });
    },
    addNine: () => {
      dispatch({ type: "ADD_NUMBER", payload: "9" });
    },
    addZero: () => {
      dispatch({ type: "ADD_ZERO" });
    },
    addClear: () => {
      dispatch({ type: "ADD_CLEAR" });
    },
    addBack: () => {
      dispatch({ type: "ADD_BACK" });
    },
    addMultiply: () => {
      dispatch({ type: "ADD_MULTIPLY" });
    },
    addDivide: () => {
      dispatch({ type: "ADD_DIVIDE" });
    },
  };
};

export const ImpactCounter = connect(null, mapDispatchToProps)(Impact);
