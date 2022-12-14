import React, { useEffect, useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [questions, setQuestions] = useState(data); // passing data from data.js
  return (
    <>
    <main>
      <div className="container">
        <h3>FAQ's Movie Theatre</h3>

        <section className='info'>
          {
            questions.map((question)=> {
              return <SingleQuestion key={question.id} {...question}/>
            })

          }
        </section>
      </div>
    </main>
    </>
  );
}

export default App;
