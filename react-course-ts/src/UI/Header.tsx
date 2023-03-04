import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const navList: INavLink[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
];

function Header() {
  const navElement = navList.map((nav) => (
    <Nav.Link href={nav.link} key={nav.id}>
      {nav.title}
    </Nav.Link>
  ));
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">{navElement}</Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

interface INavLink {
  id: number;
  title: string;
  link: string;
}
