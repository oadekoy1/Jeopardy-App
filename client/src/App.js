import './App.css';
import { useEffect, useState } from 'react'
import getQuestions from './components/getQuestions'

const getQuestions = async (props) => {
  const res = await fetch(`http://jservice.io/api/random`)
  const data = await res.json()
  console.log(data);
  setQuestion(data) // set the data into our state
}

const App = () => {
  return (
    <div className="App">
     <h1>Welcome to Jeopardy</h1>
    </div>
  );
}

export default App;
