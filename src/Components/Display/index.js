import { connect } from "react-redux";
import { Display } from "./Display";

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

export const DisplayCounter = connect(mapStateToProps)(Display);
