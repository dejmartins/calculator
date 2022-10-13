import { useState } from "react";

function Table() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value));
    }
  };

  const backSpace = () => {
    setCalc(calc.slice(0, -1));
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // const addSign = () => {
  //   if (result[0] != "-") setResult("-" + result);
  //   else setResult(result.slice(1));
  // };

  return (
    <div className="calculator">
      <div className="display">
        {calc ? <span>({result})</span> : ""}
        {calc ? calc : "0"}
      </div>
      <div className="keys">
        <div className="firstRow">
          <button id="other-ops" onClick={() => setCalc("")}>
            A/C
          </button>
          <button id="other-ops" onClick={() => backSpace()}>
            C
          </button>
          <button id="other-ops" onClick={() => updateCalc("%")}>
            %
          </button>
          <button id="ops" onClick={() => updateCalc("/")}>
            /
          </button>
        </div>

        <div className="secondRow">
          <button id="nums" onClick={() => updateCalc("7")}>
            7
          </button>
          <button id="nums" onClick={() => updateCalc("8")}>
            8
          </button>
          <button id="nums" onClick={() => updateCalc("9")}>
            9
          </button>
          <button id="ops" onClick={() => updateCalc("*")}>
            x
          </button>
        </div>

        <div className="thirdRow">
          <button id="nums" onClick={() => updateCalc("4")}>
            4
          </button>
          <button id="nums" onClick={() => updateCalc("5")}>
            5
          </button>
          <button id="nums" onClick={() => updateCalc("6")}>
            6
          </button>
          <button id="ops" onClick={() => updateCalc("-")}>
            --
          </button>
        </div>

        <div className="fourthRow">
          <button id="nums" onClick={() => updateCalc("1")}>
            1
          </button>
          <button id="nums" onClick={() => updateCalc("2")}>
            2
          </button>
          <button id="nums" onClick={() => updateCalc("3")}>
            3
          </button>
          <button id="ops" onClick={() => updateCalc("+")}>
            +
          </button>
        </div>

        <div className="fifthRow">
          <button id="zero" onClick={() => updateCalc("0")}>
            0
          </button>
          <button id="nums" onClick={() => updateCalc(".")}>
            .
          </button>
          <button id="ops" onClick={() => calculate()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
