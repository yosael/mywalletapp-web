import React,{ useState,useEffect } from 'react';
import axiosApi from '../../util/axios';

export const AccountTypesOptions = () => {

    const [accountTypes, setAccountTypes] = useState([]);

    useEffect(() => {
        const getAccountTypes = async ()=>{
            try {
                const response = await axiosApi.get('/accountTypes');
                console.log("response account types: ",response);
                setAccountTypes(response.data.accountTypes);
            } catch (error) {
                console.log(error);
            }
        }

        getAccountTypes();
        
    }, []);

    return (
        <>
            <option>Select Type</option>
            {
                accountTypes.map( (item) => 
                    <option value={item.account_id} key={item.account_id} >
                        {item.description}
                    </option>
                )
            }
        </>
    )
}
