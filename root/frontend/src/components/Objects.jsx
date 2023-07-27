import React from 'react'
import Dropdown from './Dropdown'
import Search from './Search';
import { useState } from 'react';
import styles from '../style';

const Objects = () => {

    const[selected, setSelected] = useState("");

    return (
        <section id='objects'>
            <div className='flex items-center justify-center'>
                <div className=''>
                    <Dropdown selected={selected} setSelected={setSelected}/>
                </div>
                <div className='ml-[10px]'>
                    <Search/>
                </div>
            </div>

            <div className={`h-[1000px] flex ${styles.boxWidth}`}>
                <div className='filters_left'>

                </div>
                <div className='Cards'>

                </div>
            </div>

        </section>
    )
}

export default Objects