import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AccountList from '../../components/accounts/AccountList'
import PageBody from '../../template/PageBody'
import PageContainer from '../../template/PageContainer'
import PageHead from '../../template/PageHead'
import PageOptionsBar from '../../template/PageOptionsBar'

const AccountPageList = () => {
    return (
        <PageContainer pageName="Account List">
            <PageOptionsBar>
                <Link className="btn btn-secondary" to="/account" >New Account</Link>
            </PageOptionsBar>
            <PageBody>
                <AccountList />
            </PageBody>
        </PageContainer>
    )
}

export default AccountPageList
