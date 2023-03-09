import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Header.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { useReducer, useState } from "react";
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

const loginInitVal: ILoginVal = {
  isLogin: false,
};
const loginReducer = (state: ILoginVal, action: ILoginAction): ILoginVal => {
  switch (action.type) {
    case "login":
      return { isLogin: true, details: action.payload };
    case "logout":
      return { isLogin: false };
    default:
      return state;
  }
};
function Header() {
  const [loginDetail, loginDispatch] = useReducer(loginReducer, loginInitVal);
  const [loginPending,setLoginPending]=useState(false);
  const navElement = navList.map((nav) => (
    <Nav.Link href={nav.link} key={nav.id}>
      {nav.title}
    </Nav.Link>
  ));
  const loginHandler = async () => {
    setLoginPending(true);
    const userDetails: ILoginDetails = await new Promise((resolve) => {
      setTimeout(() => {
        const details: ILoginDetails = {
          email: "dinesh@gmail.com",
          name: "Dinesh",
        };
        resolve(details);
      }, 2000);
    });
    loginDispatch({
      type: "login",
      payload: userDetails,
    });
    setLoginPending(false);
  };
  const logoutHandler = () => {
    loginDispatch({
      type: "logout",
    });
  };
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
              <button className="btn btn-warning" onClick={loginHandler} disabled={loginPending}>
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
export interface ILoginVal {
  isLogin: boolean;
  details?: ILoginDetails;
}
export interface ILoginDetails {
  name: string;
  email: string;
}
export interface ILoginAction {
  type: "login" | "logout";
  payload?: ILoginDetails;
}
