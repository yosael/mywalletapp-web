import axiosApi from '../../util/axios';

export const saveIncome = async (accountId,categoryId,currencyId,amount,note,isoDateTransaction)=>{

    const data = {
        accountId,
        categoryId,
        currencyId,
        amount,
        note,
        status:'applied',
        isoDateTransaction
    }
    try {
        await axiosApi.post('/income',data);    
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
    
}

export const saveExpense = async (accountId,categoryId,currencyId,amount,note,isoDateTransaction)=>{

    const data = {
        accountId,
        categoryId,
        currencyId,
        amount,
        note,
        status:'applied',
        isoDateTransaction
    }
    try {
        await axiosApi.post('/expense',data);    
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
    
}

export const saveTransfer = async (accountIdFrom,accountIdTo,currencyId,amount,note,isoDateTransaction)=>{

    const data = {
        accountIdFrom,
        accountIdTo,
        currencyId,
        amount,
        note,
        status:'applied',
        isoDateTransaction
    }
    try {
        await axiosApi.post('/transfer',data);    
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
    
}