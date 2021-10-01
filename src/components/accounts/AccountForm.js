import React, {useState} from 'react';
import {Formik} from 'formik';
import '../../styles/FormValidation.css';
import FormContainer from '../../template/FormContainer';
import { Button, Form } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';


const AccountForm = () => {

    const [formSent, setformSent] = useState(false);
    const history = useHistory();

    return (
        <FormContainer>
            <Formik 
                initialValues={{
                    accountName: "",
                    currentBalance: 0,
                    type: "",
                    currency: "USD"
                }}
                onSubmit={(values, {resetForm})=>{
                    resetForm();
                    console.log(values);
                    setformSent(true);
                    setTimeout(()=> setformSent(false),3000);
                    history.push("/accounts");

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

                    if(!valuesToValidate.currentBalance || valuesToValidate.currentBalance<=0){
                        errors.currentBalance = "Please Enter Current Balance";
                    }

                    // validate category
                    if(!valuesToValidate.type || valuesToValidate.type == "Select Type"){
                        errors.type ="Please enter the type";
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
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="accountName" >Account Name</Form.Label>
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
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="currentBalance" >Current Balance</Form.Label>
                            <Form.Control 
                                id="currentBalance"
                                name="currentBalance"
                                type="number" 
                                placeholder="Enter Current Balance" 
                                aria-describedby="currentBalanceMessage"
                                value={values.currentBalance}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.currentBalance && errors.currentBalance && <small id="currentBalanceMessage" class="form-text text-danger">{errors.currentBalance}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="type" >Type</Form.Label>
                            <Form.Select aria-label="Select Type"
                                id="type"
                                name="type"
                                value={values.type}
                                onChange={handleChange}
                            >
                                <option>Select Type</option>
                                <option value="general">General</option>
                                <option value="cash">Cash</option>
                                <option value="savingAccount">Saving Account</option>
                                <option value="bonus">Bonus</option>
                            </Form.Select>
                            {touched.type && errors.type && <small class="form-text text-danger">{errors.type}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="currency" >Currency</Form.Label>
                            <Form.Control 
                                id="currency"
                                name="currency"
                                type="text" 
                                placeholder="currency" 
                                readOnly
                                value={values.currency}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.currency && errors.currency && <small class="form-text text-danger">{errors.currency}</small>}
                        </Form.Group>
                        <Button type="submit" variant="primary" >Save
                            <ArrowRightCircle style={{marginLeft:'3px'}} size={20} />
                        </Button>
                        
                        {formSent && <p>Form was succesfully sent</p>}
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
}

export default AccountForm
