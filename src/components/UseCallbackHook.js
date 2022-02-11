import React from "react";
import Header from "../utility-components/Header";
import Heading from "../utility-components/Heading";

export default function UseCallbackHook() {
  const [email, setEmail] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const displayEmailOne = () => {
    return email;
  };

  const displayEmailTwo = React.useCallback(() => {
    return email;
  }, [email]);
  return (
    <>
      <Header headerTitle="React Hooks - (useCallback)" />
      <div className="h5 pt-3 pb-3">
        The React useCallback Hook returns a memoized callback function. Think
        of memoization as caching a value so that it does not need to be
        recalculated. This allows us to isolate resource intensive functions so
        that they will not automatically run on every render. The useCallback
        Hook only runs when one of its dependencies update. This can improve
        performance.<br /> The useCallback and useMemo Hooks are similar. The main
        difference is that useMemo returns a memoized value and useCallback
        returns a memoized function
      </div>
      <Heading headingTitle="Let's see what will happen with using useCallback" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <button
            type="button"
            className="btn btn-success m-3"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-danger m-3"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decrement
          </button>
          <h4>Counter value : {counter}</h4>
        </div>
      </div>

      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="please enter email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <DisplayEmail
            displayEmail={displayEmailOne}
            title="Without useCallback"
          />
        </div>
      </div>

      <Heading headingTitle="Let's see what will happen without using useCallback" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <button
            type="button"
            className="btn btn-success m-3"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment
          </button>
          <button
            type="button"
            className="btn btn-danger m-3"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decrement
          </button>
          <h4>Counter value : {counter}</h4>
        </div>
      </div>

      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="please enter email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <DisplayEmail
            displayEmail={displayEmailTwo}
            title="With useCallback"
          />
        </div>
      </div>
    </>
  );
}

const DisplayEmail = ({ displayEmail, title }) => {
  const [email, setEmail] = React.useState("");
  React.useEffect(() => {
    setEmail(displayEmail());
    console.log(`DisplayEmail component is rendering ${title}`);
  }, [displayEmail]);
  return <h4>My email is : {email}</h4>;
};
