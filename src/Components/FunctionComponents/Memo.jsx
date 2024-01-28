import React, { useMemo, useState } from "react";

const Memo = () => {
  const [number, updateNumber] = useState(0);

  const doubleNumberSlow = (number) => {
    console.log("slow is calling");
    for (let i = 0; i < 10000; i++) {
      // Simulating a time-consuming operation
    }
    return number * 2;
  };

  const [dark, updateTheme] = useState(false);

  const doubleNumber = useMemo(() => {
    return doubleNumberSlow(number);
  }, [number]);

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div>
      <h3>This is a Dangerous Hook which is called Use Memo</h3>
      <input
        type="number"
        value={number}
        onChange={(event) => updateNumber(event.target.value)}
      ></input>
      <button onClick={() => updateTheme((dark) => !dark)}>
        Change Theme
      </button>
      <h2 style={theme}>The Doubled Number is: {doubleNumber}</h2>
    </div>
  );
};

export default Memo;
