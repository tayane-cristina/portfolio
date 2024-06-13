import React from 'react';
import data from './Data'

const  Quiz = () => {

    console.log(data.map((ask) => (ask.question)))
    console.log(data.map((ask) => (ask.options[0])))
  return (
    <div className='principal-div div-quiz'>
      <h1>Quiz</h1>
      {data.map((ask, index) => (
        <li key={index}>
            <h2>{ask.question}</h2>
            {ask.options.map((option, i) => <li key={i}>{option.opt}</li>)}
        </li>
      ))}
    </div>
  );
};

export default Quiz;