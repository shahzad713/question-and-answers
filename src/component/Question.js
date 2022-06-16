    import React from 'react'

import { useState } from 'react';


    const Question = ({question,answer}) => {
        const [faq,setfaq] = useState(false)
      return (
        <>
        <div className='questionbtn'>
      <h4>{question}</h4>
      <button onClick={()=>setfaq(!faq)}>
        {faq?'showless':'showmore'}
      </button>
      </div>
      <div className='anser'>
        {faq&& <p>
            {answer}
            </p>}
      </div>
        </>
      )
    }

    export default Question