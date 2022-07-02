import React, { useContext } from "react";
import classes from "./LoginPage.module.css";
import Backdrop from "../component/layout/Backdrop";
import LoginModal from "../component/forms/LoginModal";
import RegistrationModal from "../component/forms/RegistrationModal";
import ModalsContext from "../store/Modals";
import Notification from "../component/layout/Notification";
function LoginPage() {
  const modals = useContext(ModalsContext);

  if (localStorage.getItem("users") === null) {
    const users = require("../assets/users.json");
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (localStorage.getItem("books") === null) {
    const books = require("../assets/books.json");
    localStorage.setItem("books", JSON.stringify(books));
  }
  if (localStorage.getItem("userType") === null) {
    localStorage.setItem("userType", "");
  }
  return (
    <div className={classes.image}>
      <div className={classes.naslov}>Knjižara perce</div>.
      <div>
        {modals.showRegistracija && <RegistrationModal />}
        {modals.showRegistracija && <Backdrop onClick={modals.closeModals} />}
      </div>
      <div>
        {modals.showPrijava && <LoginModal />}
        {modals.showPrijava && <Backdrop onClick={modals.closeModals} />}
      </div>
      <div>
        {modals.showMessage && <Notification tekst={modals.notification} />}
        {modals.showMessage && <Backdrop onClick={modals.closeModals} />}
      </div>
    </div>
  );
}

export default LoginPage;
