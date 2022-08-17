import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";

import classes from "./Login_Register.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Login = (props) => {
  const history = useHistory();
  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

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

  const {
    value: passwordAgainValue,
    isValid: passwordAgainIsValid,
    hasError: passwordAgainHasError,
    valueChangeHandler: passwordAgainChangeHandler,
    inputBlurHandler: passwordAgainBlurHandler,
    reset: resetPasswordAgain,
  } = useInput(isNotEmpty);

  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    usernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    passwordAgainIsValid &&
    ageIsValid
  ) {
    formIsValid = true;
  }

  const loginHandler = () => {
    history.push("/login");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("SUBMITED!");
    console.log(
      usernameValue,
      emailValue,
      passwordValue,
      passwordAgainValue,
      ageValue
    );

    //database fetch, post

    resetUsername();
    resetEmail();
    resetPassword();
    resetPasswordAgain();
    resetAge();

    history.push("/login");
  };

  const usernameClasses = usernameHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;
  const emailClasses = emailHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;
  const passwordClasses = passwordHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;
  const passwordAgainClasses = passwordAgainHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;
  const ageClasses = ageHasError
    ? `${classes.form_control} ${classes.invalid}`
    : `${classes.form_control}`;

  return (
    <div className={classes.stack}>
      <div className={classes.title}>
        <h1>Registration</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.control_group}>
          <div className={usernameClasses}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={usernameValue}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
            />
            {usernameHasError && (
              <p className={classes.error_text}>Please enter your username</p>
            )}
          </div>

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
              <p className={classes.error_text}>Enter a correct email</p>
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
              <p className={classes.error_text}>Enter a correct password</p>
            )}
          </div>

          <div className={passwordAgainClasses}>
            <label htmlFor="password_again">Password again:</label>
            <input
              type="password"
              id="password_again"
              value={passwordAgainValue}
              onChange={passwordAgainChangeHandler}
              onBlur={passwordAgainBlurHandler}
            />
            {passwordAgainHasError && (
              <p className={classes.error_text}>Enter a same password</p>
            )}
          </div>

          <div className={ageClasses}>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={ageValue}
              onChange={ageChangeHandler}
              onBlur={ageBlurHandler}
            />
            {ageHasError && (
              <p className={classes.error_text}>Enter a correct age</p>
            )}
          </div>
        </div>

        <div className={classes.form_actions}>
          <button disabled={!formIsValid}>Register</button>
          <button onClick={loginHandler}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
