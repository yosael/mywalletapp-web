import React,{ useContext,useState,useEffect } from "react";
import { Table } from "react-bootstrap";
import AuthContext from "../../context/auth-context";
import axiosApi from "../../util/axios";

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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          transactions &&
          transactions.map((data)=> 
            <tr key={data.transaction_id} >
              <td>{data.category_name}</td>
              <td>{data.amount}</td>
              <td>{data.created_date}</td>
              <td>{data.type}</td>
            </tr>
          )
        }
        
      </tbody>
    </Table>
  );
};

export default TransacctionList;
