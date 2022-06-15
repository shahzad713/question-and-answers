    import React from 'react'

import { useState } from 'react';
import data from './questionData';

    const Question = ({question,answer}) => {
        const [faq,setfaq] = useState(false)
      return (
        <>
      <h4>{question}</h4>
      <button onClick={()=>setfaq(!faq)}>
        {faq?'seemore':'showless'}
      </button>
      <div>
        {faq&& <p>
            {answer}
            </p>}
      </div>
        </>
      )
    }

    export default Question