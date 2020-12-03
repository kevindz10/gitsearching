
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
                    <CardResul icon="user" color="warning" header="Usuarios" value={props.totalUsers}/>
                </Col>
                <Col md={4}>
                    <CardResul icon="repo" color="info" header="Repositorios" value={props.totalRepo}/>
                </Col>
            </Row>
        </div>
        <div style={{paddingTop: 50}}> 
            <Row>

            {props.listRepo && props.listRepo.map((data, idx) => {
                  return <Col key={idx} md={4} style={{paddingBottom: 20}}>
                            <CardInfo 
                            info={props.users}
                            reponame={data.name}
                            />
                        </Col> ;
                })}
                 
            </Row>
        </div>    
        </div>     
    </div>       
  );
  
  const mapStateToProps = (state) => {
   return{    
      users: state.searchingData.listUsers,
      totalRepo: state.searchingData.totalPublica,
      listRepo:  state.searchingData.listPublicaciones,
      totalUsers: state.searchingData.totalUsers
 }};
 

 export default connect(mapStateToProps)(Body);