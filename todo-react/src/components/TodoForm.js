import React, { useEffect } from 'react'
import  { useState } from "react";

function TodoForm(props) {
    const [input, setInput] = useState('');

    // const inputRef = useRef(null) 

    // useEffect(()=>{
    //     inputRef.current.focus()
    // })

    const handleChange=e=>{
        setInput(e.target.value)
    }


    const handleSubmit=e=>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        
        });
        setInput('')

    }
    return (
        <div>

<form  className='todo-form'onSubmit={handleSubmit} >
<input placeholder="Add todo" value={input} name="text" className="todo-input" onChange={handleChange} />

<button className="todobutton">Add todo</button>

</form>

            
        </div>
    )
}

export default TodoForm
