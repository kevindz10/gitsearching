
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
const logo = require("../public/img/cat.png");
import { Image,Container,Button, Navbar,Form, FormControl } from 'react-bootstrap';

import {fetchUsers, fetchRepos} from '../src/redux/actions/searching';

const Header = (props) => {

  const [username, setUsername] = useState("");
  
  const onChangeHandler = e => {
    setUsername(e.target.value);
  };
  
  
  const submitHandler = e => {
    e.preventDefault();
    props.fetchUsers(username); 
    setUsername('');
  };

  return (
    <>
    <Navbar bg="dark" expand="lg" fixed="top">
        <Image src={logo} height={50} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Container>
                <Form inline>
                    <FormControl type="text" placeholder="Usuario o respositorio..." className="mr-sm-2" 
                    value={username}
                    onChange={onChangeHandler}
                    />
                    <Button variant="primary" type="submit"
                        onClick={submitHandler}>Buscar</Button>
                </Form>
            </Container>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
};
  

  const mapStateToProps = (state) => {
    return{    
  }};
  
  const mapDispatchToProps = (dispatch) => ({ 
    fetchUsers: (username) => dispatch(fetchUsers(username)),
    fetchRepos: (reponame) => dispatch(fetchRepos(reponame)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);