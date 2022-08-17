import useInput from "../hooks/use-input";
import { useHistory } from "react-router-dom";

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

  const registerHandler = () => {
    history.push("/register");
  };

  const forgetPasswordHandler = () => {
    //history.push("/forget_password");
    console.log("to the password change page...");
  };

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("LOGIN SUCCESS!");
    console.log(emailValue, passwordValue);

    //database fetch, get
    //database get level,username to localstorage

    //próba
    localStorage.setItem("email", emailValue);

    resetEmail();
    resetPassword();

    history.push("/menu");
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
    </div>
  );
};

export default Register;
