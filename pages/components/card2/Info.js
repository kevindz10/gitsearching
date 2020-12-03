import { Card, Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsFillBriefcaseFill } from "react-icons/bs";

const propTypes = {
    info: PropTypes.string    
  };
  
  const defaultProps = {
    info: {}
  };
  

class Info extends Component{ 
    render(){
        const { avatar_url, login, html_url, public_repos, ...attributes} = this.props.info;
        console.log('props:',this.props.info)
        return(  
               
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={avatar_url} />
            <Card.Body>
                <Card.Title>{login}</Card.Title>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <h3 className="text-muted" > <BsFillBriefcaseFill/> </h3>
                        </Col>
                        <Col xs={6} md={4}>
                            <h3> {public_repos}</h3>
                        </Col>
                    </Row>
                    </Container>
                <Card.Link href={html_url}>Ir a perfil</Card.Link>
            </Card.Body>
            </Card>
   
        );
    }
}
  
  
  Info.propTypes = propTypes;
  Info.defaultProps = defaultProps;

  export default Info;