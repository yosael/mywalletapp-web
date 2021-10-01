import { Row,Card } from "react-bootstrap"

const FormContainer = ({children}) => {
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

export default FormContainer;
