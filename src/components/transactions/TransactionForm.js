import { Formik } from 'formik';
import React,{ useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import FormContainer from '../../template/FormContainer';
import AccountOptions from '../accounts/AccountListOptions';
import CategoryOptions from '../category/CategoryOptions';
import CurrencyOptions from '../currency/CurrencyOptions';
import axiosApi from '../../util/axios';
import { saveIncome, saveExpense, saveTransfer } from './TransactionService';
//import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment/locale/es";
//import DatePicker, { registerLocale } from "react-datepicker";

const TransactionForm = () => {

    const history = useHistory();
    const [transactionTypeFlag, setTransactionTypeFlag] = useState('income');

    return (
        <FormContainer>
            <Formik
            initialValues={{
                transactionType: "income",
                account: "",
                amount: 0,
                currency: "USD",
                category: "",
                note: "",
                accountFrom: "",
                accountTo: "",
                transactionDate: new Date(),
                transactionTime: new Date(),
                isoDateTransaction: null

            }}
            onSubmit={ async (values, {resetForm})=>{
                //resetForm();
                console.log("new date",values.transactionDate+"T"+values.transactionTime);
                values.isoDateTransaction = new Date(values.transactionDate+"T"+values.transactionTime);
                console.log(values);

                try {

                    if(transactionTypeFlag === "income")
                        await saveIncome(parseInt(values.account),parseInt(values.category),parseInt(values.currency),values.amount,values.note,values.isoDateTransaction,values.transactionTime);
                    else if(transactionTypeFlag === "expense")
                        await saveExpense(parseInt(values.account),parseInt(values.category),parseInt(values.currency),values.amount,values.note,values.isoDateTransaction,values.transactionTime);
                    else if(transactionTypeFlag === "transfer")
                        await saveTransfer(parseInt(values.accountFrom),parseInt(values.accountTo),parseInt(values.currency),values.amount,values.note,values.isoDateTransaction,values.transactionTime);

                } catch (error) {
                    console.log(error);
                }
            

                history.push("/transactions");

            }}

            validate={(valuesToValidate)=>{
                let errors = {};

                //validate name
                if(!valuesToValidate.account && transactionTypeFlag!='transfer'){
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

                if((!valuesToValidate.category || valuesToValidate.category == "Select Category") && transactionTypeFlag!='transfer'){
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
                                onChange={handleChange, ()=> setTransactionTypeFlag('income')}
                            />
                            <Form.Check
                                inline
                                label="Expense"
                                name="transactionType"
                                type="radio"
                                value="expense"
                                onChange={handleChange,()=> setTransactionTypeFlag('expense')}
                            />
                            <Form.Check
                                inline
                                label="Transfer"
                                name="transactionType"
                                type="radio"
                                value="transfer"
                                onChange={handleChange,()=> setTransactionTypeFlag('transfer')}
                            />
                        </div>
                        {
                            transactionTypeFlag!='transfer' &&
                            <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="account" >Select Account</Form.Label>
                                    <Form.Select aria-label="Select"
                                        id="account"
                                        name="account"
                                        value={values.account}
                                        onChange={handleChange}
                                    >
                                        <option>Select Account</option>
                                        <AccountOptions />
                                    </Form.Select>
                                    {touched.account && errors.account && <small class="form-text text-danger">{errors.account}</small>}
                            </Form.Group>


                        }
                        {
                            transactionTypeFlag == 'transfer' &&
                            <Row className="mb-3">
                                <Form.Group as={Col} className="mb-3" >
                                        <Form.Label htmlFor="accountFrom" >Select Account From</Form.Label>
                                        <Form.Select aria-label="Select"
                                            id="accountFrom"
                                            name="accountFrom"
                                            value={values.accountFrom}
                                            onChange={handleChange}
                                        >
                                            <option>Select Account</option>
                                            <AccountOptions />
                                        </Form.Select>
                                        {touched.accountFrom && errors.accountFrom && <small class="form-text text-danger">{errors.accountFrom}</small>}
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" >
                                        <Form.Label htmlFor="accountTo" >Select Account To</Form.Label>
                                        <Form.Select aria-label="Select"
                                            id="accountTo"
                                            name="accountTo"
                                            value={values.accountTo}
                                            onChange={handleChange}
                                        >
                                            <option>Select Account</option>
                                            <AccountOptions />
                                        </Form.Select>
                                        {touched.accountTo && errors.accountTo && <small class="form-text text-danger">{errors.accountTo}</small>}
                                </Form.Group>
                            </Row>

                        }
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
                                    id="transactionDate"
                                    name="transactionDate"
                                    type="date" 
                                    value={values.transactionDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                />
                                <Form.Text className="text-muted">
                                    
                                </Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" >
                                <Form.Label>Time</Form.Label>
                                <Form.Control 
                                    id="transactionTime"
                                    name="transactionTime"
                                    type="time" 
                                    value={values.transactionTime}
                                    onChange={handleChange}
                                    onBlur={handleBlur}   />
                                <Form.Text className="text-muted">
                                    
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} className="col-sm-2 mb-3" >
                                <Form.Label htmlFor="currency" >Currency</Form.Label>
                                <Form.Select aria-label="Select Currency"
                                    id="currency"
                                    name="currency"
                                    value={values.currency}
                                    onChange={handleChange}
                                >
                                    <CurrencyOptions />
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Button type="submit" variant="success" >Save
                            <ArrowRightCircle style={{marginLeft:'3px'}} size={20} />
                        </Button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
}

export default TransactionForm
