
import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components

import InputTodo from './components/inputTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
  <Fragment>
    <div className="container">
    <InputTodo />
    <ListTodo />
    </div>
  </Fragment>
  );
}

export default App;
