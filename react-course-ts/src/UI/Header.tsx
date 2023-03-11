import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Header.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useReducer, useState } from "react";
import { LoginContext } from "../context/LoginProvider";
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
];

function Header() {
  const { loginDetail, loginHandler, logoutHandler } = useContext(LoginContext);
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
          <div>
            {loginDetail.isLogin ? (
              <>
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
                <FaUserCircle className={`${classes.userIcon} m-1`} />
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
