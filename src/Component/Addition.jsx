import { useState } from "react";

const Addition = () => {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [r, setR] = useState(null);

  const calculate = () => {
    if (!A || !B) {
      alert("Please enter both numbers");
      return;
    }
    const result = parseFloat(A) + parseFloat(B);
    setR(result);
  };
  return (
    <div className="container">
      <p>
        In this application you can add two numbers. <br></br>Please fill the
        boxes with you favorite numbers and have fun <br></br> with this thing
        :D
      </p>{" "}
      <p>
        {" "}
        The sum is the result of adding two or more numbers together. <br></br>{" "}
        Addition is one of the oldest arithmetic operations,<br></br> and
        mathematicians have used it for about 6,000 years.
      </p>
      <div className="boxes">
        <label>
          Number A =
          <input
            className="cuadro"
            type="number"
            value={A}
            onChange={(e) => setA(e.target.value)}
            placeholder="Enter number"
          ></input>
        </label>
      </div>
      <br></br>
      <div className="boxes">
        <label>
          Number B =
          <input
            className="cuadro"
            type="number"
            value={B}
            onChange={(e) => setB(e.target.value)}
            placeholder="Enter number"
          ></input>
        </label>
      </div>
      <br></br>
      <button className="btn" onClick={calculate}>
        Calculate
      </button>
      {r !== null && (
        <div className="newvalue">
          <h2>Congrats!</h2>
          <h3>Your result is:{r}</h3>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Addition;
