import React, { useRef,useContext, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
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
        <div id="loginContainer" className="text-center">
            <Form onSubmit={handleLogin} className="form-signin">
                {
                    error &&
                    <Alert variant="warning">
                        {error}
                    </Alert>
                }    
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control id="emailID" type="email" placeholder="Enter email" ref={emailRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Link to="/register" label="create account" title="create account" >Create account</Link>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-lg btn-block">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
