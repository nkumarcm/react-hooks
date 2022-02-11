import React from "react";
import Header from "../utility-components/Header";
import Heading from "../utility-components/Heading";

export default function UseRefHook() {
  const [age, setAge] = React.useState(0);
  const inputOne = React.useRef();
  const inputTwo = React.useRef();
  function getTextBox() {
    console.log("Hello...");
    console.log(inputTwo.current);
    inputTwo.current.style.width = "250px";
    inputOne.current.style.width = "100%";
  }
  function getNumBox() {
    console.log("World...");
    console.log(inputOne.current);
    inputTwo.current.style.width = "100%";
    inputOne.current.style.width = "250px";
  }
  return (
    <>
      <Header headerTitle="React Hooks - (useRef)" />

      <div className="h5 pt-3 pb-3">
        The useRef Hook allows you to persist values between renders. It can be
        used to store a mutable value that does not cause a re-render when
        updated. It can be used to access a DOM element directly.
      </div>

      <Heading headingTitle="Let's see what will happen without using useRef" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-4 border rounded p-3">
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="please enter age..."
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="please enter age..."
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <h6>My age is : {age}</h6>
          </div>
        </div>
      </div>

      <Heading headingTitle="Let's see what will happen with using useRef" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-4 border rounded p-3">
          <div className="mb-3">
            <input
              ref={inputOne}
              type="number"
              className="form-control"
              placeholder="please enter age..."
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                getNumBox();
              }}
            />
          </div>
          <div className="mb-3">
            <input
              ref={inputTwo}
              type="text"
              className="form-control"
              placeholder="please enter age..."
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                getTextBox();
              }}
            />
          </div>
          <div className="mb-3">
            <h6>My age is : {age}</h6>
          </div>
        </div>
      </div>
    </>
  );
}
