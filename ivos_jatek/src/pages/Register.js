import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordAgainInputRef = useRef();
  const history = useHistory();

  const loginHandler = () => {
    history.push("/login");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordAgain = passwordAgainInputRef.current.value;

    if (isRegistered === true) {
      //fetch date if all is correct
    }
  };

  const registerHandler = () => {
    //control, validate

    setIsRegistered(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input ref={nameInputRef} id="name" type="text" />
      <label htmlFor="age">Age:</label>
      <input ref={ageInputRef} id="age" type="number" />
      <label htmlFor="email">Email:</label>
      <input ref={emailInputRef} id="email" type="email" />
      <label htmlFor="password">Password:</label>
      <input ref={passwordInputRef} id="password" type="password" />
      <label htmlFor="password_again">Password again</label>
      <input ref={passwordAgainInputRef} id="password_again" type="password" />
      <button type="button" onClick={registerHandler}>
        Register
      </button>
      <button type="button" onClick={loginHandler}>
        Login
      </button>
    </form>
  );
};

export default Register;
