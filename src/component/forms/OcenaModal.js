import React, { useRef, useState } from "react";

import StarRating from "../ui/StarRating";
import classes from "./Form.module.css";

function OceniModal(props) {
  const komentarInputRef = useRef();
  let user = JSON.parse(localStorage.getItem("logged"));
  let books = JSON.parse(localStorage.getItem("books"));
  let curBook = JSON.parse(localStorage.getItem("currentBook"));
  const [ocena, setOcena] = useState(0);

  function getRating(index) {
    setOcena(index);
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredKomentar = komentarInputRef.current.value;
    books.map((book, index) => {
      if (book.id === curBook.id) {
        book.komentari.push({
          korisnik: user.username,
          komentar: enteredKomentar,
          ocena: ocena,
        });
        if (ocena > 0) {
          book.ocena =
            (book.ocena * book.brojOcena + ocena) / (book.brojOcena + 1);
          book.brojOcena = book.brojOcena + 1;
        }
        books[index] = book;
        localStorage.setItem("books", JSON.stringify(books));
        props.close();
        return true;
      }
      return false;
    });
  }

  return (
    <div className="modal">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="Ocena">Ocena</label>
          <StarRating rating={getRating} />
        </div>
        <div className={classes.control}>
          <label htmlFor="komentar">Komentar</label>
          <textarea
            type="textarea"
            required
            id="komentar"
            ref={komentarInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Oceni</button>
        </div>
      </form>
    </div>
  );
}

export default OceniModal;
