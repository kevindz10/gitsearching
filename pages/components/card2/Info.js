import { Card, Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsPersonFill, BsFillBriefcaseFill } from "react-icons/bs";

const propTypes = {
    user: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    img: PropTypes.string,
    repo: PropTypes.string
  };
  
  const defaultProps = {
    user: 'User',
    icon: "user",
    value: "10"
  };
  

class Info extends Component{ 
    render(){
        const { user, icon, value, ...attributes} = this.props;
        return(  
               
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
               
            </Card.Body>
            </Card>
   
        );
    }
}
  
  
  Info.propTypes = propTypes;
  Info.defaultProps = defaultProps;

  export default Info;