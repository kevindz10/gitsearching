
import CardResul from "../../pages/components/card1/Results"
import { Container, Row, Col } from 'react-bootstrap';

const Body = () => (    
    <Container style={{paddingTop: 80}}>   
        <Row>
            <Col xs={6}>
                <CardResul icon="user" color="warning" header="Usuarios" value="100"/>
                </Col>
            <Col xs={6}>
                <CardResul icon="repo" color="info" header="Repositorios" value="200"/>
            </Col>
        </Row>
    </Container>       
  );
  
  export default Body;