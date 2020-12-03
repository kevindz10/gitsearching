
import CardResul from "../../pages/components/card1/Results"
import CardInfo from "../../pages/components/card2/Info"
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const Body = (props) => (    
    <div className="container" style={{paddingTop: 80}}>  
        <div className="col-md-12">
        
        <div>
            <Row>
                <Col md={4}>
                    <CardResul icon="user" color="warning" header="Usuarios" value="100"/>
                </Col>
                <Col md={4}>
                    <CardResul icon="repo" color="info" header="Repositorios" value="200"/>
                </Col>
            </Row>
        </div>
        <div style={{paddingTop: 50}}> 
            <Row>
                <Col md={4} style={{paddingBottom: 20}}>
                
                    <CardInfo 
                       info={props.users}
                    />
                </Col>   
            </Row>
        </div>    
        </div>     
    </div>       
  );
  
  const mapStateToProps = (state) => {
    console.log('from body: ',state.searchingData);
   return{    
      users: state.searchingData.listUsers 
 }};
 

 export default connect(mapStateToProps)(Body);