import React, { useState } from 'react';
import data from './Data'

const  Quiz = () => {

    //The ideal way to print in the project in the chomer is, take a 

    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);

    //Func to map the question and the answer, and edit the state of the objcts


    console.log(data.map((ask) => (ask.question)))
    console.log(data.map((ask) => (ask.options[0])))
  return (
    <div className='principal-div div-quiz'>
      <h1>Quiz</h1>
      {data.map((ask, index) => (
        <ul key={index}>
            <h2>{ask.question}</h2>
            {ask.options.map((option, i) => <li key={i}>{option.opt}</li>)}
        </ul>
      ))}
    </div>
  );
};

export default Quiz;