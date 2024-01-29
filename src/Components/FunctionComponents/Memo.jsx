import React, { useState, useMemo } from "react";

const Memo = () => {
  const [number, updateNumber] = useState(0);
//   const list = [10, 20];
  const [dark, updateTheme] = useState(false);

  const doubleNumber = useMemo(() => {
    return doubleNumberSlow(number);
  }, [number]);

  function doubleNumberSlow(num) {
    console.log("It is calling");
    for (let i = 0; i < 100000; i++) {}
    return num * 2;
  }

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div>
      <h1>This is a Dangerous hook which is called use Memo</h1>
      <br></br>
      <input
        type="number"
        value={number}
        onChange={(event) => updateNumber(event.target.value)}
      ></input>
      <h2>The doubled number is {doubleNumber}</h2>
      <button onClick={() => updateTheme((prevdark) => !prevdark)}>
        Change Theme
      </button>
      <h2 style={theme}>Can you see the change!<span>{'\u{1F600}'}</span>
</h2>
    </div>
  );
};

export default Memo;
