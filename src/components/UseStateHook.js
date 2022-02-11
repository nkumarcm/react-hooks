import React from "react";
import Header from "../utility-components/Header";
import Heading from "../utility-components/Heading";

export default function UseStateHook() {
  const friendList = [
    { name: "Arya Bharti", age: 22 },
    { name: "Pankaj Kumar Dwivedi", age: 25 },
    { name: "Nikhil Dwivedi", age: 24 },
  ];

  const [myName, setMyName] = React.useState("Ethan Hunt");
  const [myFriends, setFriends] = React.useState(friendList);

  return (
    <>
      <Header headerTitle="React Hooks - (useState)" />

      <div className="h5 pt-3 pb-3">
        The React useState Hook allows us to track state in a function
        component. State generally refers to data or properites that need to be
        tracking in an application.
      </div>
      
      {/* Primitive Data Type Example */}
      <Heading headingTitle="Primitive Data Type Example [ String ]" />

      <div className="row text-center justify-content-center pt-3">
        <div className="col-4 border rounded p-3">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="please enter name..."
              value={myName}
              onChange={(e) => {
                setMyName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <h6>My Name is : {myName}</h6>
          </div>
        </div>
      </div>

      {/* Non-Primitive Data Type Example [Array] */}
      <Heading headingTitle="Non-Primitive Data Type Example [ Array ]" />

      <div className="row text-center justify-content-center pt-3">
        <div className="col-4 border rounded p-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {myFriends.map((friend, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{friend.name}</td>
                    <td>{friend.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
