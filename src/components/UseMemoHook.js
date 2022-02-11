import React from "react";
import Header from "../utility-components/Header";
import Heading from "../utility-components/Heading";

export default function UseMemoHook() {
  const [counterOne, setCounterOne] = React.useState(0);
  const [counterTwo, setCounterTwo] = React.useState(0);

  const getRandomSumOne = () => {
    return counterOne + Math.random();
  };

  //   const getRandomSumTwo = () => {
  //     return counterTwo + Math.random();
  //   };

  const getRandomSumTwo = React.useMemo(() => {
    return counterTwo + Math.random();
  }, [counterTwo]);

  return (
    <>
      <Header headerTitle="React Hooks - (useMemo)" />

      <div className="h5 pt-3 pb-3">
        The React useMemo Hook returns a memoized value. Think of memoization as
        caching a value so that it does not need to be recalculated. The useMemo
        Hook only runs when one of its dependencies update. <br />This can improve
        performance.<br /> The useMemo and useCallback Hooks are similar. The main
        difference is that useMemo returns a memoized value and useCallback
        returns a memoized function.
      </div>

      <Heading headingTitle="Let's see what will happen without using useMemo" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <button
            type="button"
            className="btn btn-success m-3"
            onClick={() => {
              setCounterOne(counterOne + 1);
            }}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-danger m-3"
            onClick={() => {
              setCounterOne(counterOne - 1);
            }}
          >
            Decrement
          </button>
          <h4>Counter value : {counterOne}</h4>
          <h4>Sum value : {getRandomSumOne()}</h4>
        </div>
      </div>

      <Heading headingTitle="Let's see what will happen with using useMemo" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <button
            type="button"
            className="btn btn-success m-3"
            onClick={() => {
              setCounterTwo(counterTwo + 1);
            }}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-danger m-3"
            onClick={() => {
              setCounterTwo(counterTwo - 1);
            }}
          >
            Decrement
          </button>
          <h4>Counter value : {counterTwo}</h4>
          {/* <h4>Sum value : {getRandomSumTwo()}</h4> */}
          <h4>Sum value : {getRandomSumTwo}</h4>
        </div>
      </div>
    </>
  );
}
