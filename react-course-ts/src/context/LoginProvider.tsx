import { createContext, ReactNode, useReducer } from "react";

const loginInitVal: ILoginVal = {
  isLogin: false,
  loginPending: false,
};
const loginReducer = (state: ILoginVal, action: ILoginAction): ILoginVal => {
  switch (action.type) {
    case "login":
      return { ...state, isLogin: true, details: action.payload };
    case "logout":
      return { ...state, isLogin: false };
    case "updatePendingStatus":
      return { ...state, loginPending: !state.loginPending };
    default:
      return state;
  }
};
const LoginContext = createContext({} as ILoginProviderValue);

export interface ILoginProviderProps {
  children: ReactNode;
}
const LoginProvider = ({ children }: ILoginProviderProps) => {
  const [loginDetail, loginDispatch] = useReducer(loginReducer, loginInitVal);
  const loginHandler = async () => {
    loginDispatch({
      type: "updatePendingStatus",
    });
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
    loginDispatch({
      type: "updatePendingStatus",
    });
  };
  const logoutHandler = () => {
    loginDispatch({
      type: "logout",
    });
  };
  return (
    <>
      <LoginContext.Provider
        value={{ loginDetail, loginHandler, logoutHandler }}
      >
        {children}
      </LoginContext.Provider>
    </>
  );
};

export default LoginProvider;
export { LoginContext };

export interface ILoginProviderValue {
  loginDetail: ILoginVal;
  loginHandler: () => Promise<void>;
  logoutHandler: () => void;
}

export interface ILoginVal {
  isLogin: boolean;
  details?: ILoginDetails;
  loginPending: boolean;
}
export interface ILoginDetails {
  name: string;
  email: string;
}
export interface ILoginAction {
  type: "login" | "logout" | "updatePendingStatus";
  payload?: ILoginDetails;
}
