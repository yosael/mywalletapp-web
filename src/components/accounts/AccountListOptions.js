import React,{ useState,useEffect,useContext } from 'react';
import axiosApi from '../../util/axios';
import AuthContext from "../../context/auth-context";


const AccountOptions = () => {
    const [accounts, setAccounts] = useState([]);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const getAccounts = async ()=>{
            try {
                const response = await axiosApi.get(`/accounts/${authCtx.currentUser.uid}`);  
                console.log("response Accounts: ",response);
                setAccounts(response.data.accounts);
            } catch (error) {
                console.log(error);
            }
        }

        getAccounts();
        
    }, []);



    return (
        <>
            {
                accounts.map( (item) => 
                    <option value={item.account_id} key={item.account_id} >
                        {`${item.account_name} - ${item.currency} ${item.current_balance}`}
                    </option>
                )
            }
        </>
    )
}

export default AccountOptions
