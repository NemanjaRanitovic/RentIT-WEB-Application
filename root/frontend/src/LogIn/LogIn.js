import {Container} from "react-bootstrap"
import React, { useEffect } from 'react'
import {Row} from 'react-bootstrap'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import {Button} from "react-bootstrap";
import "./LogIn.css"
import axios from 'axios';

const LogIn = () => {

  const getUser = async() => {
    const data = await axios.get("/getUser")
    console.log(data);
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div className='login'>        
        <Container className="inputFields">
            <Container className="usernameBox">
                <MDBInput placeholder='Username' id='Username' type='text' />
            </Container>

            <Container className="passwordBox">
                <MDBInput placeholder='Password' id='Password' type='text' />
            </Container>
            
            <Container className="logInBtn">
                <Button>Log In</Button>
            </Container>
        </Container>
    </div>
  );
};

export default LogIn