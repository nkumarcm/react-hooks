import React from "react";
import Header from "../utility-components/Header";
import Heading from "../utility-components/Heading";

export default function WithOutUseContextHook() {
  const [user, setUser] = React.useState("Nikhil Kumar");
  return (
    <>
      <Header headerTitle="React Hooks - (useContext & createContext)" />
      <div className="h5 pt-3 pb-3">
        React Context is a way to manage state globally. It can be used together
        with the useState Hook to share state between deeply nested components
        more easily than with useState alone.
      </div>
      <Heading headingTitle="Let's see what will happen without using useContext" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <h4>{`Hello ${user}!`}</h4>
          <Component2 user={user} />
        </div>
      </div>
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h4>Component 2 {user}</h4>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h4>Component 3 {user}</h4>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h4>Component 4 {user}</h4>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h4>Component 5 {user}</h4>
      <h3>{`Hello ${user} again!`}</h3>
    </>
  );
}
