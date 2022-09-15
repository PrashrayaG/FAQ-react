import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => { // accesing title(questions) and info from the data

const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>

        {/* // toggling button for  */}
        <button className='btn' onClick={()=> setShowInfo(!showInfo)}>
           {showInfo? <AiOutlineMinus/>: <AiOutlinePlus/>} {/* if showInfo is true use minus btn. if not , plus btn */}
          </button>
      </header>

      {
        showInfo && <p>{info}</p> // if showInfo is true then show the info
      }
      
    </article>
  );
};

export default Question;
