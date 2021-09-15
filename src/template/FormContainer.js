import { Row,Card } from "react-bootstrap"

export const FormContainer = ({children}) => {
    return (
            <Row >
                <Card>
                    <Card.Body>
                        {children}
                    </Card.Body>
                </Card>
            </Row>
    )
}
