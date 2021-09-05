import { connect } from "react-redux"
import { Impact } from "./Impact";

const mapDispatchToProps = (dispatch) => {
    return {
      addOne: () => {
        dispatch({ type: "ADD_ONE" });
      },
      addPlus: () => {
        dispatch({ type: "ADD_PLUS"})
      },
      addMinus: () => {
        dispatch({ type: "ADD_MINUS"})
      },
      addEqual: () => {
        dispatch({ type: "ADD_EQUAL"})
      },
      addTwo: () => {
        dispatch({ type: "ADD_TWO" });
      },
      addThree: () => {
        dispatch({ type: "ADD_THREE" });
      },
      addFour: () => {
        dispatch({ type: "ADD_FOUR" });
      },
      addFive: () => {
        dispatch({ type: "ADD_FIVE" });
      },
      addSix: () => {
        dispatch({ type: "ADD_SIX" });
      },
      addSeven: () => {
        dispatch({ type: "ADD_SEVEN" });
      },
      addEight: () => {
        dispatch({ type: "ADD_EIGHT" });
      },
      addNine: () => {
        dispatch({ type: "ADD_NINE" });
      },
      addZero: () => {
        dispatch({ type: "ADD_ZERO" });
      },
      addClear: () => {
        dispatch({ type: "ADD_CLEAR" });
      },
      addBack: () => {
        dispatch({ type: "ADD_BACK"})
      },
      addMultiply: () => {
        dispatch({ type: "ADD_MULTIPLY"})
      },
      addDivide: () => {
        dispatch({ type: "ADD_DIVIDE"})
      }
    };
  };

export const ImpactCounter = connect(null, mapDispatchToProps)(Impact);