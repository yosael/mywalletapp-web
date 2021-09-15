import React, {useState} from 'react';
import {Formik} from 'formik';
import '../../styles/FormValidation.css';
import { FormContainer } from '../../template/FormContainer';

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
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="accountName" >Account Name</label>
                            <input 
                                className="form-control"
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
                        </div>
                        <div className="form-group">
                            <label htmlFor="category" >Category</label>
                            <input 
                                className="form-control"
                                id="category"
                                name="category"
                                type="text" 
                                placeholder="Category" 
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.category && errors.category && <small class="form-text text-danger">{errors.category}</small>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" >Save</button>
                        {formSent && <p>Form was succesfully sent</p>}
                    </form>
                )}
            </Formik>
        </FormContainer>
    )
}

export default AccountForm
