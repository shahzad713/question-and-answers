import React,{useState} from "react"
const Counter = ()=>{
    const [counter,setCounter] = useState(0)

        return(
            <>
            <div>
                <p>{counter}</p>

            </div>
            <button onClick={()=>{setCounter(counter+1)}}> increase</button>
            <button onClick={()=>{setCounter(0)}}> reset</button>
            <button disabled={counter===0} onClick={()=>{setCounter(counter-1)}}> decrease</button>


        </>
        )

}
export default Counter