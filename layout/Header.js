

const logo = require("../public/img/cat.png");
import { Image,Container,Row, Col, Button, Navbar,Form, FormControl } from 'react-bootstrap';

const Header = () => (
    <Navbar bg="dark" expand="lg">
        <Image src={logo} height={50} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Container>
                <Form inline>
                    <FormControl type="text" placeholder="Usuario o respositorio..." className="mr-sm-2" />
                    <Button variant="primary">Buscar</Button>
                </Form>
            </Container>
        </Navbar.Collapse>
    </Navbar>
  );
  
  export default Header;