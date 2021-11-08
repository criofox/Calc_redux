import "./Impact.css";

export const Impact = ({
  addOne,
  addPlus,
  addMinus,
  addEqual,
  addTwo,
  addThree,
  addFour,
  addFive,
  addSix,
  addSeven,
  addEight,
  addNine,
  addZero,
  addClear,
  addBack,
  addMultiply,
  addDivide,
}) => (
  <div className="calc">
    <button className="button" onClick={addOne}>
      1
    </button>
    <button className="button" onClick={addTwo}>
      2
    </button>
    <button className="button" onClick={addThree}>
      3
    </button>
    <button className="button" onClick={addPlus}>
      +
    </button>
    <button className="button" onClick={addFour}>
      4
    </button>
    <button className="button" onClick={addFive}>
      5
    </button>
    <button className="button" onClick={addSix}>
      6
    </button>
    <button className="button" onClick={addMinus}>
      -
    </button>
    <button className="button" onClick={addSeven}>
      7
    </button>
    <button className="button" onClick={addEight}>
      8
    </button>
    <button className="button" onClick={addNine}>
      9
    </button>
    <button className="button" onClick={addMultiply}>
      *
    </button>
    <button className="button" onClick={addZero}>
      0
    </button>
    <button className="button" onClick={addBack}>
      ←
    </button>
    <button className="button" onClick={addClear}>
      C
    </button>
    <button className="button" onClick={addDivide}>
      /
    </button>
    <button className="button" onClick={addEqual}>
      =
    </button>
  </div>
);
