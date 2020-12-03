
import React, {Component} from 'react';
import CardResul from "../../pages/components/card1/Results"
import CardInfo from "../../pages/components/card2/Info"
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {cleanAll} from '../../src/redux/actions/searching';

export class Body extends Component{    

    componentWillMount(){
        
        this.props.cleanAll();  
      }
    render(){
        return (<div className="container" style={{paddingTop: 80}}>  
                <div className="col-md-12">
                
                <div>
                    <Row>
                        <Col md={4}>
                            <CardResul icon="user" color="warning" header="Usuarios" value={this.props.totalUsers}/>
                        </Col>
                        <Col md={4}>
                            <CardResul icon="repo" color="info" header="Repositorios" value={this.props.totalRepo}/>
                        </Col>
                    </Row>
                </div>
                <div style={{paddingTop: 50}}> 
                    <Row>

                    {this.props.listRepo && this.props.listRepo.map((data, idx) => {
                        return <Col key={idx} md={4} style={{paddingBottom: 20}}>
                                    <CardInfo 
                                    info={this.props.users}
                                    reponame={data.name}
                                    />
                                </Col> ;
                        })}
                        
                    </Row>
                </div>    
                </div>     
            </div>  
        ) }  
}
  
  const mapStateToProps = (state) => {
   return{    
      users: state.searchingData.listUsers,
      totalRepo: state.searchingData.totalPublica,
      listRepo:  state.searchingData.listPublicaciones,
      totalUsers: state.searchingData.totalUsers
 }};
 
 const mapDispatchToProps = (dispatch) => ({ 
    cleanAll: () => dispatch(cleanAll())
  });

 export default connect(mapStateToProps, mapDispatchToProps)(Body);