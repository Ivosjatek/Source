import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const registerHandler = () => {
    history.push("/register");
  };

  const submitHandler = () => {
    //fetch data to exist user and login
  };

  const loginHandler = () => {
    //control, validate

    setIsLogin(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Email:</label>
      <input ref={emailInputRef} id="email" type="email" />
      <label>Password:</label>
      <input ref={passwordInputRef} id="password" type="password" />
      <button type="button" onClick={loginHandler}>
        Login
      </button>
      <button type="button" onClick={registerHandler}>
        Register
      </button>
    </form>
  );
};

export default Login;
