import React from 'react'
import Question from './Question'
import data from './questionData'

const QuestrionMap = () => {
  return (
    <div>
   <p>this is the question and answer section</p>
   <div>
    {data.map((data)=>{
        return  <Question key={data.id} question={data.question} answer={data.answer}/>

    })}
   </div>
    </div>
  )
}

export default QuestrionMap