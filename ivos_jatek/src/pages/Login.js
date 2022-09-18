import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import useInput from "../hooks/use-input";

import LoadingSpinner from "../components/UI/LoadingSpinner"

import classes from "./Login_Register.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Register = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);
  const history = useHistory();
  const { isLoading, error, sendRequest } = useHttp();
  const [loadedUsers, setLoadedUsers] = useState([]);

  let formIsValid = true;
  /*let formIsValid = false;

  console.log(loadedUsers);


  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/users");
      } catch (err) {
        console.log(err);
      }
    }
    fetchAbout();
  }, [sendRequest]);

  if (datas.email === emailIsValid && datas.password === passwordIsValid) {
    formIsValid = true;
  } else {
    console.log("Email or Password is not correct");
    //formIsValid = true;
  }*/

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("LOGIN SUCCESS!");
    console.log(emailValue, passwordValue);

    resetEmail();
    resetPassword();

    history.push("/menu");
  };

  const registerHandler = () => {
    history.push("/register");
  };

  const forgetPasswordHandler = () => {
    //history.push("/forget_password");
    console.log("to the password change page...");
  };

  const emailClasses = emailHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;
  const passwordClasses = passwordHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;

  return (
    <div className={classes.stack}>
      <div className={classes.title}>
        <h1>Login</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.control_group}>
          <div className={emailClasses}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={classes.errortext}>Enter a correct email</p>
            )}
          </div>

          <div className={passwordClasses}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className={classes.errortext}>Enter a correct password</p>
            )}
          </div>
        </div>
        <div className={classes.forgot}>
          <p onClick={forgetPasswordHandler}>Forget you password?</p>
        </div>
        <div className={classes.form_actions}>
          <button disabled={!formIsValid}>Login</button>
          <button onClick={registerHandler}>Register</button>
        </div>
      </form>
      {!error && isLoading && <LoadingSpinner />}
    </div>
  );
};

export default Register;
