import React, { useState } from 'react';
import data from './Data'

const  Quiz = () => {

    //The ideal way to print the project in the chomer is, take the states
    //of the question, the answer and the options, give their a space on the return and 
    // use a function to give the states the values who needs to apper in the screen, on the correct space

    //Maybe will be necessare create a function to decide what is the question who will be map in the function of show question

    const [answer, setAnswer] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState();
    const [options, setOptions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    //Func to map the question and the answer, and edit the state of the objcts
    const showQuestion = () => {
        const ask = data[currentIndex].question
    }

    console.log(data.map((ask) => (ask.question)))
    console.log(data.map((ask) => (ask.options[0])))
  return (
    <div className='principal-div div-quiz'>
      <h1>Quiz</h1>
      <h2>Pergunta: {data[currentIndex].question}</h2>
        <ul>
            {data.map((ask, index) => (ask[currentIndex].options.map((option) => console.log(option))))}
        </ul>
    </div>
  );
};

export default Quiz;