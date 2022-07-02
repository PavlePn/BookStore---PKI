import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../store/Users";
import Card from "../ui/Card";
import classes from "./BookItem.module.css";

function BookItem(props) {
  const book = props.book;
  const navigate = useNavigate();
  const logged = useContext(UsersContext);

  function openBook() {
    navigate("/userOverview/" + book.id);
  }

  function dodajPromo() {}

  return (
    <div>
      <li className={classes.item}>
        <Card>
          <div className={classes.card}>
            <div className={classes.image}>
              <img
                src={"http://127.0.0.1:8887/" + book.slika}
                alt={book.opis}
              />
            </div>
            <div className={classes.content}>
              <h3>{book.naslov}</h3>
              <h4>{book.pisac}</h4>

              {logged.loggedIn === "kupac" && (
                <div className={classes.actions}>
                  <button onClick={openBook}>{"Pogledaj knjigu"}</button>
                </div>
              )}

              {logged.loggedIn === "prodavac" && (
                <div className={classes.actions}>
                  <button onClick={dodajPromo}>{"Pogledaj knjigu"}</button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </li>
    </div>
  );
}

export default BookItem;
