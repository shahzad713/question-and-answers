import React from 'react'
import emoji from '../Profile/imgesProfile/emooi.jpg'
import { useState } from 'react';
import axios from 'axios';

const Jokes = () => {
    const url = 'http://api.icndb.com/jokes/random'
    const [isLoding,setIsLoading]= useState(true)
    const [joke,setJoke]= useState({})
    
    async function getJoks(){
        // const responce = await fetch(url)
        // const data = await responce.json();
        // console.log(data)
        axios.get(url).then((res)=>{
            const data = res.data
            setJoke(data)
            console.log('this is with axios')
        setIsLoading(false)
        })

    }
  return (
    <div>
        <section className='generate_random-section'>
            <div className='heading-random'>
          <h2>  This is the section of Random jokes</h2>
            </div>
            <div>
                <h3>Random jookes ganerator</h3>
            </div>
            <img className='raondom_jokes_img' src={emoji} alt="emoji" />
            <hr />
            {isLoding?(
                <h3>Loading ...</h3>
            ):
            <p>{joke.value.joke}</p>}
            <button onClick={getJoks}>Generate Random Jokes</button>
        </section>

    </div>
  )
}

export default Jokes