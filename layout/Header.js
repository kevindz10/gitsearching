
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
const logo = require("../public/img/cat.png");
import { Image,Container,Row, Col, Button, Navbar,Form, FormControl } from 'react-bootstrap';
import { actionCreators as searchActions,
    selector as searchSelector,
  } from '../src/redux/features/searching';

const Header = () => {

  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(searchActions.list())
  }, [dispatch])

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };
  
  
  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
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
  
  export default Header;