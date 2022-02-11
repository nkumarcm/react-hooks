import axios from "axios";
import React from "react";
import Header from "../utility-components/Header";
import Heading from "../utility-components/Heading";

export default function UseEffectHook() {
  const [userData, setUserData] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  // useEffect as componentDidMount
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    console.log("I am inside useEffect and working as componentDidMount");
    fetchData();
  }, []);

  // useEffect as componentDidUpdate
  React.useEffect(() => {
    console.log("I am inside useEffect and working as componentDidUpdate");
  }, [counter]);

  // useLayoutEffect as componentWillUnmount
  React.useLayoutEffect(() => {
    // alert("I am going to fight for Justice");
    console.log("I am inside useEffect and working as componentWillUnmount");
  }, []);
  return (
    <>
      <Header headerTitle="React Hooks - (useEffect & useLayoutEffect)" />

      <div className="h5 pt-3 pb-3">
        The useEffect Hook allows you to perform side effects in your
        components. Some examples of side effects are: fetching data, directly
        updating the DOM, and timers.<br /> useEffect accepts two arguments. The
        second argument is optional. useEffect(function, dependency)
      </div>

      <Heading headingTitle="useEffect as componentDidMount" />
      <div className="row text-center justify-content-center pt-3">
        <div className="col-6 border rounded p-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Heading headingTitle="useEffect as componentDidUpdate" />
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
    </>
  );
}
