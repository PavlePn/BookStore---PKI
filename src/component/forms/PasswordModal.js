import React, { useContext, useRef } from "react";
import classes from "./Form.module.css";
import ModalsContext from "../../store/Modals";
function PasswordModal() {
  const oldPasswordInputRef = useRef();
  const passwordInputRef = useRef();
  const password2InputRef = useRef();

  const modals = useContext(ModalsContext);
  let users = JSON.parse(localStorage.getItem("users"));
  let loggedUser = JSON.parse(localStorage.getItem("logged"));
  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPassword2 = password2InputRef.current.value;

    let flag = false;
    users.map((user, index) => {
      if (
        user.username === loggedUser.username &&
        loggedUser.password === enteredOldPassword &&
        enteredPassword === enteredPassword2
      ) {
        user.password = enteredPassword;
        localStorage.setItem("logged", JSON.stringify(user));
        users[index] = user;
        localStorage.setItem("users", JSON.stringify(users));
        modals.closeModals();
        flag = true;
        return true;
      }
      return false;
    });
    if (!flag) {
      modals.closeModals();
      modals.setMessage();
      modals.setTekst("Pogrešna lozinka ili se nove lozinke ne poklapaju!");
    }
  }

  return (
    <div className="modal">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="image">Stara Lozinka</label>
          <input
            type="password"
            required
            id="oldPassword"
            ref={oldPasswordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Nova Lozinka</label>
          <input
            type="password"
            required
            id="newPassword"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Ponovljena Nova Lozinka</label>
          <input
            type="password"
            required
            id="newPassword2"
            ref={password2InputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Izmeni</button>
        </div>
      </form>
    </div>
  );
}

export default PasswordModal;
