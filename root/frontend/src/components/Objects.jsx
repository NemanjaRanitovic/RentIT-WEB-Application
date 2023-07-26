import React from 'react'
import Dropdown from './Dropdown'
import { useState } from 'react';

const Objects = () => {

    const[selected, setSelected] = useState("");

    return (
        <div>
            <Dropdown selected={selected} setSelected={setSelected}/>
        </div>
    )
}

export default Objects