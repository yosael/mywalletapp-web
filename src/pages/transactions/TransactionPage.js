import React from 'react'
import TransactionForm from '../../components/transactions/TransactionForm'
import PageBody from '../../template/PageBody'
import PageContainer from '../../template/PageContainer';
import PageOptionsBar from '../../template/PageOptionsBar';
import ExchangeRate from '../../components/exchangeRates/ExchangeRate';

const TransactionPage = () => {
    return (
        <PageContainer pageName="Transaction Form">
            <PageBody>
                <TransactionForm />
            </PageBody>
            <PageOptionsBar>
                <ExchangeRate />
            </PageOptionsBar>
        </PageContainer>
    )
}

export default TransactionPage
