import React, { useState } from 'react'
import Values from 'values.js';


const Form = ({ addColor }) => {
    const [color, setColor] = useState('');

    console.log(color)

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(color);

    }

    return (
        <div className='container'>

            <form className='color-form' onSubmit={handleSubmit}>

                <input disabled type="text" name='text' value={color} id='text' onChange={(e) => setColor(e.target.value)} />
                <input type="color" name='color' id='color' value={color} onChange={(e) => setColor(e.target.value)} />
                <button className='btn' style={{ background: `${color}`, height: '40px', borderRadius: '4px' }}>Submit</button>
            </form>
        </div>

    )
}

export default Form