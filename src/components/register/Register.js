import React, { useState, useRef, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import { saveUserToDB } from './RegisterService';
import './register.css';


const Register = () => {

    const authCtx = useContext(AuthContext);
    const [error, setError] = useState('');
    const [disabledSubmit, setDisabledSubmit] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value ){
            return setError('Password not match...');
        }

        try {

            setError('');
            setDisabledSubmit(true);
            const userCredentials = await authCtx.register(emailRef.current.value,passwordRef.current.value);
            console.log(userCredentials);
            await saveUserToDB(userCredentials.user.uid,userCredentials.user.email);


            history.push('/');


        } catch (error) {
            console.log(error);
            setError('Fail to create account');
        }

        setDisabledSubmit(false);

    }

    return (
        <div id="registerContainer">
            <Form onSubmit={handleSubmit} className="formRegister">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" ref={emailRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" ref={passwordRef}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="passwordConfirm" ref={passwordConfirmRef} />
                </Form.Group>
                <Button type="submit">Create Account</Button>
            </Form>
        </div>
    )
}

export default Register
