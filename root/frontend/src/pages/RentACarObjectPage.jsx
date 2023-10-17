import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RentACarObjectPage = () => {
    
    const {objectId} = useParams();

    const [Object, setObject] = useState("");

    const fetchObject = async() => {
        const object = await axios.get(`/rentObjects/getObjectById/${objectId}`);
        setObject(object);
    };

    useEffect(() => {
        fetchObject();
        console.log(Object);
    }, []);

    return (
        <>
            <div className='mt-[100px]'>
                <p></p>
            </div>
        </>
    )
}

export default RentACarObjectPage