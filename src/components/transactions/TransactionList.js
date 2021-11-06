import React,{ useContext,useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../../context/auth-context";
import axiosApi from "../../util/axios";
import './Transactions.css';
import { FcApproval } from "react-icons/fc";
import CategoryIcon from "./CategoryIcon";


const TransacctionList = ({ title }) => {

  const authCtx = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    const getTransactions = async () => {
      try {
        console.log("sending user id: ",authCtx.currentUser.uid);
        const response = await axiosApi.get(`/transactions/${authCtx.currentUser.uid}`);
        console.log("getTransactions Response: ",response);
        setTransactions(response.data.transactions);

      } catch (error) {
        console.log(error);
      }
      
    }

    getTransactions();
    
  }, []);

  return (
    <Container className='listContainer'>
      {
        transactions &&
        transactions.map((data)=> 
        <Row className='rowItem'>
          <Col md={1}><CategoryIcon iconType={data.category_name} /></Col>
          <Col md={4} style={{"fontWeight":"bold"}}>{data.category_name}</Col>
          <Col md={{ offset: 4 }} className={data.type == 'expense' ? 'amountNegative':'amountPositive'} >{data.amount}</Col>
        </Row>
        )
      }
    </Container>
  );
}

export default TransacctionList;
