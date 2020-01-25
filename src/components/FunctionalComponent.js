import React, { useState, useEffect } from 'react';

const FunctionalComponent = props => {

    const [count, setCount] = useState(props.count);
    useEffect(() => {
        console.log("mounted"); //тази функция се извиква само веднъж, когато 
        return () => {
            console.log("unmounted");
        }
    }, [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + props.step)} type="button" className="btn btn-primary"> Increment </button>
            <button onClick={() => setCount(count - props.step)} type="button" className="btn btn-primary"> Decrement </button>
        </div>
    )
}
export default FunctionalComponent