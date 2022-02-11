import React from "react";
import Header from "../utility-components/Header";
import Heading from "../utility-components/Heading";

export default function IntroPage() {
  return (
    <>
      <Header headerTitle="React Hooks" />
      <Heading headingTitle="What is a React Hooks?" />
      <div className="h5 pt-3 pb-3">
        Hooks were added to React in version 16.8. Hooks allow function
        components to have access to state and other React features. Because of
        this, class components are generally no longer needed. Although Hooks
        generally replace class components, there are no plans to remove classes
        from React.
      </div>
      <Heading headingTitle="Hook Rules" />
      <div className="h5 pt-3 pb-3">There are 3 rules for Hooks:</div>
      <ul>
          <li>Hooks can only be called inside React function components.</li>
          <li>Hooks can only be called at the top level of a component.</li>
          <li>Hooks cannot be conditional</li>
      </ul>
      <span><b>Note: </b>Hooks will not work in React class components.</span>
      <Heading headingTitle="Types of Hooks" />
      <div className="h5 pt-3 pb-3">Basic Hooks:</div>
      <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useContext</li>
      </ul>
      <div className="h5 pt-3 pb-3">Additional Hooks:</div>
      <ul>
          <li>useMemo</li>
          <li>useCallback</li>
          <li>useRef</li>
          <li>useLayoutEffect</li>
      </ul>
      <span>Please visit React site for <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">more details</a>.</span>

    </>
  );
}
