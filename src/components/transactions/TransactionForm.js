import { Formik } from 'formik';
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import FormContainer from '../../template/FormContainer';
import CategoryOptions from '../category/CategoryOptions';

const TransactionForm = () => {

    const history = useHistory();

    return (
        <FormContainer>
            <Formik
            initialValues={{
                transactionType: "",
                account: "",
                amount: 0,
                currency: "USD",
                category: "",
                note: ""

            }}
            onSubmit={(values, {resetForm})=>{
                resetForm();
                console.log(values);
                history.push("/transactions");

            }}

            validate={(valuesToValidate)=>{
                let errors = {};

                //validate name
                if(!valuesToValidate.account){
                    errors.account = "Account is required";
                }
                /*else if(!/^[a-zA-Z\s]{1,40}$/.test(valuesToValidate.accountName)){
                    errors.accountName = "Account Name only can have characters and spaces between 1 and 40 characters";
                }*/

                if(!valuesToValidate.amount || valuesToValidate.amount<=0){
                    errors.amount = "Please Enter Amount";
                }

                // validate category
                /*if(!valuesToValidate.transactionType || valuesToValidate.transactionType == "Select Type"){
                    errors.type ="Please enter the type";
                }*/

                if(!valuesToValidate.category || valuesToValidate.category == "Select Category"){
                    errors.category ="Please enter the category";
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
                        <div className="mb-3">
                            <Form.Check
                                defaultChecked
                                inline
                                label="Income"
                                name="transactionType"
                                type="radio"
                                value="income"
                            />
                            <Form.Check
                                inline
                                label="Outcome"
                                name="transactionType"
                                type="radio"
                                value="outcome"
                            />
                            <Form.Check
                                inline
                                label="Transfer"
                                name="transactionType"
                                type="radio"
                                value="transfer"
                            />
                        </div>
                        <Form.Group className="mb-3" >
                                <Form.Label htmlFor="account" >Select Account</Form.Label>
                                <Form.Select aria-label="Select"
                                    id="account"
                                    name="account"
                                    value={values.account}
                                    onChange={handleChange}
                                >
                                    <option>Select Account</option>
                                    <option value="general">General</option>
                                    <option value="cash">Cash</option>
                                    <option value="savingAccount">Saving Account</option>
                                    <option value="bonus">Bonus</option>
                                </Form.Select>
                                {touched.account && errors.account && <small class="form-text text-danger">{errors.account}</small>}
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" >
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                    id="amount"
                                    name="amount"
                                    type="number" 
                                    placeholder="Enter Amount"
                                    value={values.amount}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                />
                                {
                                    touched.amount && errors.amount &&
                                    <Form.Text className="form-text text-danger">
                                        {errors.amount}
                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" >
                                    <Form.Label htmlFor="category" >Category</Form.Label>
                                    <Form.Select aria-label="Select"
                                        id="category"
                                        name="category"
                                        value={values.category}
                                        onChange={handleChange}
                                    >
                                        <option>Select Category</option>
                                        <CategoryOptions />
                                    </Form.Select>
                                    {touched.category && errors.category && <small class="form-text text-danger">{errors.category}</small>}
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" >
                                <Form.Label>Date</Form.Label>
                                <Form.Control 
                                    type="transactionDate" 
                                    value={values.transactionDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" >
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time" value={values.currency}  readOnly/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} className="col-sm-2 mb-3" >
                                <Form.Label>Currency</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" value={values.currency}  readOnly/>
                            </Form.Group>
                        </Row>
                        <Button type="submit" variant="primary" >Save
                            <ArrowRightCircle style={{marginLeft:'3px'}} size={20} />
                        </Button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
}

export default TransactionForm
