import { Card, Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsPersonFill, BsFillBriefcaseFill } from "react-icons/bs";

const propTypes = {
    header: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
    
  };
  
  const defaultProps = {
    header: 'User',
    icon: "user",
    color: 'info',
    value: "10"    
  };
  

class Results extends Component{ 
    render(){
        const {className, cssModule, header, icon, color, value, ...attributes} = this.props;
        return(  
               
            <Card style={{ width: '18rem'}}{...attributes}>
                <Card.Body >
                    <Card.Title>{ header }</Card.Title>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <h3 className="text-muted" >  {icon=="user" ? <BsPersonFill />: <BsFillBriefcaseFill/>} </h3>
                            </Col>
                            <Col xs={6} md={4}>
                                <h3> {value}</h3>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
   
        );
    }
}
  
  
  Results.propTypes = propTypes;
  Results.defaultProps = defaultProps;

  export default Results;