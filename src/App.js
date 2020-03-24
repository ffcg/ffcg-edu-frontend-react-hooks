import React, { useState } from 'react';
import UseState from './Components/1-useState'
import UseEffect from './Components/2-useEffect'
import UseStateAndUseEffect from './Components/3-combine-useState-useEffect'
import CustomHooks from './Components/4-custom-hooks'
import UseStateWithUseReducer from './Components/5-useState-with-useReducer'
import UseReducer from './Components/6-useReducer'
import UseContext from './Components/7-useContext'
import UseContext2 from './Components/8-useContext2'
import UseReducerAndContext from './Components/9-useReducer-with-useContext'
import './App.css';

function App() {
  const [assignment, setAssignment] = useState(0)

  const changeAssignment = (e) => {
    console.log(e.target.value)
    switch (e.target.value) {
      case '1':
        setAssignment(1)
        break;
      case '2':
        setAssignment(2)
        break;
      case '3':
        setAssignment(3)
        break;
      case '4':
        setAssignment(4)
        break;
      case '5':
        setAssignment(5)
        break;
      case '6':
        setAssignment(6)
        break;
      case '7':
        setAssignment(7)
        break;
      case '8':
        setAssignment(8)
        break;
      case '9':
        setAssignment(9)
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button value={1} onClick={changeAssignment}>Use state</button>
        <button value={2} onClick={changeAssignment}>Use Effect</button>
        <button value={3} onClick={changeAssignment}>Combine state and effect</button>
        <button value={4} onClick={changeAssignment}>Use custom hooks</button>
        <button value={5} onClick={changeAssignment}>Use reducer</button>
        <button value={6} onClick={changeAssignment}>Combine reducer and state</button>
        <button value={7} onClick={changeAssignment}>Use context</button>
        <button value={8} onClick={changeAssignment}>Use even more context </button>
        <button value={9} onClick={changeAssignment}>Use reducer with use context</button>
      </header>
      <div className="AssignmentBlock">
      {assignment === 1 && (
        <UseState />
      )}
      {assignment === 2 && (
        <UseEffect />
      )}
      {assignment === 3 && (
        <UseStateAndUseEffect />
      )}
      {assignment === 4 && (
        <CustomHooks />
      )}
      {assignment === 5 && (
        <UseReducer />

      )}
      {assignment === 6 && (
        <UseStateWithUseReducer />
      )}
      {assignment === 7 && (
        <UseContext />
      )}
      {assignment === 8 && (
        <UseContext2 />
      )}
      {assignment === 9 && (
        <UseReducerAndContext />
      )}
      </div>
    </div>
  );
}
        {/* Extra credit: */}
        {/* Patterns to fetch data: https://www.robinwieruch.de/react-hooks-fetch-data */}
        {/* Learn more about useRef and how to retrieve previous state https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/ */}
        {/* Good practices https://techblog.commercetools.com/five-practical-tips-when-using-react-hooks-in-production-990a79745229 */}
        {/* React docs on "advanced hooks" https://reactjs.org/docs/hooks-reference.html#additional-hooks */}

export default App;




