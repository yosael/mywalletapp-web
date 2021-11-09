import axiosApi from '../../util/axios';

export const saveIncome = async (accountId,categoryId,currency,amount,note,isoDateTransaction,transactionTime)=>{

    const data = {
        accountId,
        categoryId,
        currency,
        amount,
        note,
        status:'applied',
        isoDateTransaction,
        transactionTime
    }
    try {
        await axiosApi.post('/income',data);    
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
    
}

export const saveExpense = async (accountId,categoryId,currency,amount,note,isoDateTransaction,transactionTime)=>{

    const data = {
        accountId,
        categoryId,
        currency,
        amount,
        note,
        status:'applied',
        isoDateTransaction,
        transactionTime
    }
    try {
        await axiosApi.post('/expense',data);    
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
    
}

export const saveTransfer = async (accountIdFrom,accountIdTo,currency,amount,note,isoDateTransaction,transactionTime)=>{

    const data = {
        accountIdFrom,
        accountIdTo,
        currency,
        amount,
        note,
        status:'applied',
        isoDateTransaction,
        transactionTime
    }
    try {
        await axiosApi.post('/transfer',data);    
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
    
}