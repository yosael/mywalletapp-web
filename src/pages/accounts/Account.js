import React from 'react'
import { Button } from 'react-bootstrap'
import AccountForm from '../../components/accounts/AccountForm'
import PageBody from '../../template/PageBody'
import PageContainer from '../../template/PageContainer'
import PageHead from '../../template/PageHead'
import PageOptionsBar from '../../template/PageOptionsBar'

const Account = () => {
    return (
        <PageContainer pageName="Account Form">
            <PageOptionsBar>
            <Button variant="secondary">New Account</Button>
            </PageOptionsBar>
            <PageBody>
                <AccountForm />
            </PageBody>
        </PageContainer>
    )
}

export default Account;
