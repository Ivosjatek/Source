import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";

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
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  const passwordAgainClasses = passwordAgainHasError
    ? "form-control invalid"
    : "form-control";
  const ageClasses = ageHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
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
            <p className="error-text">Please enter your username</p>
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
          {emailHasError && <p className="error-text">Enter a correct email</p>}
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
            <p className="error-text">Enter a correct password</p>
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
            <p className="error-text">Enter a same password</p>
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
          {ageHasError && <p className="error-text">Enter a correct age</p>}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Register</button>

        <button onClick={loginHandler}>Login</button>
      </div>
    </form>
  );
};

export default Login;
