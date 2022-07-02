import { useContext, useRef } from "react";
import PasswordModal from "../component/forms/PasswordModal";
import Backdrop from "../component/layout/Backdrop";
import Notification from "../component/layout/Notification";
import Card from "../component/ui/Card";
import ModalsContext from "../store/Modals";
import classes from "./Profil.module.css";

function Profil() {
  const user = JSON.parse(localStorage.getItem("logged"));
  const users = JSON.parse(localStorage.getItem("users"));
  const modals = useContext(ModalsContext);

  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
  const usernameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;

    user.username = enteredUsername;
    user.name = enteredName;
    user.surname = enteredSurname;
    user.phone = enteredPhone;
    user.address = enteredAddress;

    users.map((u, index) => {
      if (u.username === user.username) {
        users[index] = user;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("logged", JSON.stringify(user));
        return true;
      }
      return false;
    });
  }

  return (
    <div>
      <div className={classes.centre}>
        <Card>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="name">Ime</label>
              <input
                type="text"
                required
                id="name"
                ref={nameInputRef}
                defaultValue={user.name}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="surname">Prezime</label>
              <input
                type="text"
                required
                id="surname"
                ref={surnameInputRef}
                defaultValue={user.surname}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="phone">Broj telefona</label>
              <input
                type="text"
                required
                id="phone"
                ref={phoneInputRef}
                defaultValue={user.phone}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="adresa">Adresa</label>
              <input
                type="text"
                required
                id="adresa"
                ref={addressInputRef}
                defaultValue={user.address}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="username">Korisničko ime</label>
              <input
                type="text"
                required
                id="username"
                ref={usernameInputRef}
                defaultValue={user.username}
              />
            </div>
            <div className={classes.actions}>
              <button>Izmeni podatke</button>
            </div>
          </form>
          <div className={classes.actions}>
            <button onClick={modals.setPassChange}>Izmeni Lozinku</button>
          </div>
        </Card>
      </div>
      <div>
        {modals.showPassChange && <PasswordModal />}
        {modals.showPassChange && <Backdrop onClick={modals.closeModals} />}
      </div>
      <div>
        {modals.showMessage && <Notification tekst={modals.notification} />}
        {modals.showMessage && <Backdrop onClick={modals.closeModals} />}
      </div>
    </div>
  );
}

export default Profil;
