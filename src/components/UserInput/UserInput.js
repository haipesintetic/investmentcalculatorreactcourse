import React, { useState } from "react";
import classes from "./UserInput.module.css";
const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
function UserInput(props) {
  const [userInput, setUserInput] = useState({
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  });
  function submitHandler(event) {
    event.preventDefault();
    props.onCalculate(userInput);
  }
  function resetHandler() {
    setUserInput(initialUserInput);
  }
  function inputChangeHandler(input, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]:+value,
      };
    });
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            type="number"
            value={userInput["current-savings"]}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            type="number"
            value={userInput["expected-return"]}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            type="number"
            value={userInput["duration"]}
            id="duration"
          />
        </p>
      </div>
      <p className={classes["actions"]}>
        <button type="reset" onClick={resetHandler} className={classes["buttonAlt"]}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
export default UserInput;
