import React from 'react'
import { Container,Row } from 'react-bootstrap'
import PageHead from './PageHead'

const PageContainer = ({children,pageName}) => {
    return (
        <Container >
            <PageHead pageName={pageName} />
            <Row  >
                {children}
            </Row>
        </Container>
    )
}

export default PageContainer