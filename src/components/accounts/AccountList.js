import React,{ useState, useEffect,useContext } from "react";
import { Table } from "react-bootstrap";
import AuthContext from "../../context/auth-context";
import axiosApi from '../../util/axios';

const AccountList = () => {

  const [accounts, setAccounts] = useState([]);
  const authCtx = useContext(AuthContext);

  useEffect(() => {

    const getAccounts = async () => {
      console.log("getAccounts");
      try {
        const response =  await axiosApi.get(`/accounts/${authCtx.currentUser.uid}`);  
        console.log(response);
        setAccounts(response.data.accounts);
      } catch (error) {
        
      }
    }
    getAccounts();

  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Account Name</th>
          <th>Current Balance</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          accounts.map((item)=> 
            <tr key={item.account_id} >
              <td>{item.account_id}</td>
              <td>{item.account_name}</td>
              <td>{item.current_balance}</td>
              <td>{item.account_type_id}</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  );
};

export default AccountList;
