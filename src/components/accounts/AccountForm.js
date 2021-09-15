import React, {useState} from 'react';
import {Formik} from 'formik';
import '../../styles/FormValidation.css';
import { FormContainer } from '../../template/FormContainer';
import { Button, Form } from 'react-bootstrap';

const AccountForm = () => {

    const [formSent, setformSent] = useState(false);

    return (
        <FormContainer>
            <Formik 
                initialValues={{
                    accountName: "",
                    category: ""
                }}
                onSubmit={(values, {resetForm})=>{
                    resetForm();
                    console.log(values);
                    setformSent(true);
                    setTimeout(()=> setformSent(false),3000);

                }}
                validate={(valuesToValidate)=>{
                    let errors = {};

                    //validate name
                    if(!valuesToValidate.accountName){
                        errors.accountName = "Account name is required";
                    }
                    else if(!/^[a-zA-Z\s]{1,40}$/.test(valuesToValidate.accountName)){
                        errors.accountName = "Account Name only can have characters and spaces between 1 and 40 characters";
                    }

                    // validate category
                    if(!valuesToValidate.category){
                        errors.category ="Please type category";
                    }

                    //validate email example
                    /*if(!values.email){
                        errors.email ="Please type email";
                    }
                    else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                        errors.email = "Email only can have charracters, numbers and under scores and middle scores";
                    }*/
                    return errors;
                }}
             >
                {({handleSubmit, values, handleChange, errors, handleBlur,touched}) => (
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formAccountName" >
                            <Form.Label>Account Name</Form.Label>
                            <Form.Control 
                                id="accountName"
                                name="accountName"
                                type="text" 
                                placeholder="Enter Account Name" 
                                aria-describedby="accountNameMessage"
                                value={values.accountName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.accountName && errors.accountName && <small id="accountNameMessage" class="form-text text-danger">{errors.accountName}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control 
                                id="category"
                                name="category"
                                type="text" 
                                placeholder="Category" 
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.category && errors.category && <small class="form-text text-danger">{errors.category}</small>}
                        </Form.Group>
                        <Button type="submit" variant="primary">Save</Button>
                        {formSent && <p>Form was succesfully sent</p>}
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
}

export default AccountForm
