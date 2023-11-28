/* eslint-disable */
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import data from '../data/questionsData';

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

function QuestionsApp() {
  /* eslint-disable-next-line */
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h4>questions and answers about login</h4>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default QuestionsApp;
