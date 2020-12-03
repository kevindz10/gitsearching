import { Card, Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Component } from 'react';

const propTypes = {
    info: PropTypes.string,
    reponame: PropTypes.string  
  };
  
  const defaultProps = {
    info: {},
    reponame:""
  };
  

class Info extends Component{ 
    render(){
      const { info, reponame, ...attributes} = this.props;
        const { avatar_url, login, html_url, public_repos} = info;
        return(  
               
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={avatar_url} />
            <Card.Body style={{justifyContent: "center"}}>
                <Card.Title>{login}</Card.Title>
                <div>
                  <span> {reponame}</span>
                </div>                
                <Card.Link href={html_url} className="d-flex justify-content-end">Ir a perfil</Card.Link>
            </Card.Body>
            </Card>
   
        );
    }
}
  
  
  Info.propTypes = propTypes;
  Info.defaultProps = defaultProps;

  export default Info;