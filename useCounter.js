import { useState } from "react"

export default function useCounter(init){
  
    const [counter,setCounter] = useState(init);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if(counter <= 0){
            return;
        }
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(init);
    }
    

    return{
        counter,
        increment,
        decrement,
        reset
    }
}
