import React, { useContext, useRef } from "react";
import classes from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import ModalsContext from "../../store/Modals";
import UsersContext from "../../store/Users";
function LoginModal() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const modals = useContext(ModalsContext);
  const loged = useContext(UsersContext);
  let users = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let flag = false;
    users.map((user) => {
      if (
        user.username === enteredUsername &&
        user.password === enteredPassword
      ) {
        localStorage.setItem("logged", JSON.stringify(user));
        modals.closeModals();
        if (user.type === "kupac") {
          navigate("/userOverview");
          loged.setLoggedIn("kupac");
          console.log(loged.loggedIn);
        } else {
          navigate("/sellerOverview");
          loged.setLoggedIn("prodavac");
        }
        flag = true;
        return true; //redirect to user page
      }
      return false;
    });
    if (!flag) {
      modals.closeModals();
      modals.setMessage();
      modals.setTekst("Pogrešni kredencijali!");
    }
  }

  return (
    <div className="modal">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Korisničko ime</label>
          <input type="text" required id="username" ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Lozinka</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Prijavi se</button>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
