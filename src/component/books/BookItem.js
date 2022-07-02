import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./BookItem.module.css";

function BookItem(props) {
  const book = props.book;
  const navigate = useNavigate();
  const books = JSON.parse(localStorage.getItem("books"));
  const loggedIn = localStorage.getItem("userType");
  function openBook() {
    navigate("/userOverview/" + book.id);
  }

  function togglePromo() {
    books.filter((bookItem) => bookItem.id === book.id)[0].promocija =
      !book.promocija;
    localStorage.setItem("books", JSON.stringify(books));
    props.setter(books);
  }

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
              {loggedIn === "kupac" && (
                <div className={classes.actions}>
                  <button onClick={openBook}>{"Pogledaj knjigu"}</button>
                </div>
              )}

              {loggedIn === "prodavac" && !book.promocija && (
                <div className={classes.actions}>
                  <button onClick={togglePromo}>{"Promocija"}</button>
                </div>
              )}

              {loggedIn === "prodavac" && book.promocija && (
                <div className={classes.actions}>
                  <button onClick={togglePromo}>{"Ukloni"}</button>
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
