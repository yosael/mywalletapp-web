import React from 'react'
import TransactionForm from '../../components/transactions/TransactionForm'
import PageBody from '../../template/PageBody'
import PageContainer from '../../template/PageContainer'

const TransactionPage = () => {
    return (
        <PageContainer pageName="Transaction Form">
            <PageBody>
                <TransactionForm />
            </PageBody>
        </PageContainer>
    )
}

export default TransactionPage
