import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
import styles from '../style';


const LogIn = (props) => {
    const navigate = useNavigate();
    const {authenticate} = props;
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleClick = async ()=> {
    
        try{
            const config = {
                headers:{
                    "Content-type":"application/json"
                }
            }
            setLoading(true);
            const {data} = await axios.post('/users/login',{Username,Password},config);
            localStorage.setItem('userInfo',JSON.stringify(data));  
            authenticate();
            navigate("/");
            setLoading(false);
        }catch(error){
            setError(error.response.data.message);
        }
    } 

    return (
        <>
            <div className='relative flex overflow-hidden shadow-2xl
                            flex-col bg-[#f5f6fa] h-[750px] w-[500px] 
                            items-center m-auto my-[50px] rounded-[20px]'>
                <div className='bg-third h-[750px] w-[160%] justify-start 
                                rounded-[50%] absolute flex flex-col top-[-420px] left-[-200px] '>
                    <h1 className='text-[36px] font-poppins text-primary 
                                    mt-[520px] z-10 ml-[250px] font-semibold'>Welcome</h1>
                    <h1 className='text-[36px] font-poppins text-primary 
                                    z-10 ml-[250px] font-semibold leading-[25px]'>Back</h1>
                    <p className='text-[16px] font-poppins text-primary 
                                    z-10 ml-[250px] font-medium leading-[75px]'>Please sign in to contiune</p>
                </div>
                <div className='flex flex-col w-[60%]
                                justify-center items-center absolute 
                                mt-[400px]'>
                    <input id="Username" className="bg-primary text-[#000000] h-[40px] font-poppins
                                                    w-[100%] border-[0px] rounded-[10px] pl-[10px]" 
                            type={"text"} 
                            placeholder="Username"
                            value={Username}
                            onChange={(u)=>setUsername(u.target.value)}/>

                    <input id="Password" className="bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
                                                    w-[100%] border-[0px] rounded-[10px] mt-[10px]" 
                            type={"password"} 
                            placeholder="Password" 
                            value={Password}
                            onChange={(p)=>setPassword(p.target.value)}/>
                    <button className="mt-[20px] mb-[10px] w-[100%] text-primary ease-in-out
                                        rounded-[10px] bg-third text-[20px] py-[5px] duration-150
                                        cursor-pointer font-poppins hover:bg-[#037f85]" 
                            type="button"
                            onClick={handleClick}>Log In</button>
                    <div className='flex flex-col items-center mt-[20px]'>
                        <p className='font-poppins text-secondary text-[16px]'>
                            Dont have an account?
                        </p>
                        <Link to="/register">
                            <a href="/register" className='font-poppins hover:text-third
                                            cursor-pointer text-secondary text-[18px]'>
                                Register for free
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn