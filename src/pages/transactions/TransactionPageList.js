import React from 'react'
import { Link } from 'react-router-dom'
import TransacctionList from '../../components/transactions/TransactionList'
import PageBody from '../../template/PageBody'
import PageContainer from '../../template/PageContainer'
import PageOptionsBar from '../../template/PageOptionsBar'

const TransactionPageList = () => {
    return (
        <PageContainer pageName="Transaction Records">
            <PageOptionsBar>
                <Link className="btn btn-secondary" to="/transaction" >+ Add</Link>
            </PageOptionsBar>
            <PageBody>
                <TransacctionList />
            </PageBody>
        </PageContainer>
    )
}

export default TransactionPageList
