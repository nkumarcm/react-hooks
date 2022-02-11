import React from "react";
import Heading from "../utility-components/Heading";

const UserContext = React.createContext();

export default function WithUseContextHook() {
  const [user, setUser] = React.useState("Nikhil Kumar");
  return (
    <>
      <Heading headingTitle="Let's see what will happen with using useContext" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <UserContext.Provider value={user}>
            <h4>{`Hello ${user}!`}</h4>
            <Component2 user={user} />
          </UserContext.Provider>
        </div>
      </div>
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h4>Component 2 {user}</h4>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h4>Component 3</h4>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h4>Component 4</h4>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = React.useContext(UserContext);

  return (
    <>
      <h4>Component 5</h4>
      <h3>{`Hello ${user} again!`}</h3>
    </>
  );
}
