import { useState } from "react";
import BookList from "../component/books/BookList";
import classes from "./SellerOverview.module.css";

function SellerOverviview() {
  const booksInit = JSON.parse(localStorage.getItem("books"));
  const [books, setBooks] = useState(booksInit);

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className={classes.main}>
      <h2 className={classes.naslov}>Pretraga knjiga</h2>
      <div className={classes.search}>
        <div className={classes.control}>
          <input type="text" required id="username" onChange={inputHandler} />
        </div>
      </div>
      <div className={classes.center}>
        <BookList books={books} setter={setBooks} input={inputText} />
      </div>
    </div>
  );
}

export default SellerOverviview;
