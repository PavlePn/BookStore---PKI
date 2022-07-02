import { React, useContext } from "react";
import classes from "./Form.module.css";
import { useRef } from "react";
import ModalsContext from "../../store/Modals";

function RegistrationModal() {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const modals = useContext(ModalsContext);

  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) users = [];

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      name: enteredName,
      surname: enteredSurname,
      phone: enteredPhone,
      address: enteredAddress,
      username: enteredUsername,
      password: enteredPassword,
      preporuke: [],
      type: "kupac",
    };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    modals.closeModals();
    modals.setMessage();
    modals.setTekst("Registracija je uspešna!");
  }
  return (
    <div className="modal">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Ime</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="surname">Prezime</label>
          <input type="text" required id="surname" ref={surnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Broj telefona</label>
          <input type="text" required id="phone" ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="adresa">Adresa</label>
          <input type="text" required id="adresa" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="username">Korisničko ime</label>
          <input type="text" required id="username" ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Registruj se</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationModal;
