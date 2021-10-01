import React, { useRef,useContext, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './Login.css';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const authCtx = useContext(AuthContext);
    const history = useHistory();
    const [error, setError] = useState("");

    const handleLogin = async (e)=> {
        e.preventDefault();

        try {
            
            setError("");
            const values = await authCtx.login(emailRef.current.value,passwordRef.current.value);
            console.log(values);
            history.push("/");

        } catch (error) {
            console.log(error);
            //setError(error);
        }

    }

    return (
        <div className="loginContainer text-center">
            <Form onSubmit={handleLogin} className="form-signin">
                {
                    error &&
                    <Alert variant="warning">
                        {error}
                    </Alert>
                }    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="sr-only" >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="sr-only">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-lg btn-block">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
