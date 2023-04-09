import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";
import classes from "./Header.module.scss";
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
  {
    id: 4,
    title: "Git user",
    link: "/git-user",
  },
  {
    id: 5,
    title: "Post",
    link: "/posts",
  },
  {
    id: 6,
    title: "Counter",
    link: "/counter",
  },
  {
    id: 7,
    title: "Products",
    link: "/products",
  },
];

function Header() {
  const { loginDetail, loginHandler, logoutHandler } = useContext(LoginContext);
  const navElement = navList.map((nav) => (
    <LinkContainer to={nav.link} key={nav.id}>
      <Button>{nav.title}</Button>
    </LinkContainer>
  ));

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">{navElement}</Nav>
          <div>
            {loginDetail.isLogin ? (
              <>
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
                <Link to="/user/account" className="user-profile-icon">
                  <FaUserCircle className={`${classes.userIcon} m-1`} />
                </Link>
              </>
            ) : (
              <button
                className="btn btn-warning"
                onClick={loginHandler}
                disabled={loginDetail.loginPending}
              >
                Login
              </button>
            )}
          </div>
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
