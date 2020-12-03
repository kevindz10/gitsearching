
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
const logo = require("../public/img/cat.png");
import { Image,Container,Row, Col, Button, Navbar,Form, FormControl } from 'react-bootstrap';

import {fetchUsers} from '../src/redux/actions/searching';

const Header = (props) => {

  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };
  
  
  const submitHandler = e => {
    e.preventDefault();

    //const profile = await fetch(`https://api.github.com/users/${username}`);
    //const profileJson = await profile.json();
    const repositories = await props.fetchUsers(username);
    //const repoJson = await repositories.json();
    console.log('props', props);
    
    //if (profileJson) {
      //setData(profileJson);
      setRepositories(repoJson);
    //}
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
     console.log(state.searchingData);
    return{    
  }};
  
  const mapDispatchToProps = (dispatch) => ({
    fetchUsers: (username) => dispatch(fetchUsers(username)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);