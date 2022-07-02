import { useState } from "react";
import { useParams } from "react-router-dom";
import ComentList from "../component/coments/ComentList";
import OceniModal from "../component/forms/OcenaModal";
import PreporuciModal from "../component/forms/PreporuciModal";
import Backdrop from "../component/layout/Backdrop";
import classes from "./BookPreview.module.css";

function BookPreview(props) {
  let { id } = useParams();
  const books = JSON.parse(localStorage.getItem("books"));
  const book = books.find((book) => book.id === parseInt(id));
  localStorage.setItem("currentBook", JSON.stringify(book));

  const [showOceni, setShowOceni] = useState(false);
  const [showPreporuci, setShowPreporuci] = useState(false);

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={"http://127.0.0.1:8887/" + book.slika} alt={book.opis} />
        </div>
        <div className={classes.content}>
          <h3>{book.naslov}</h3>
          <h4>{book.pisac}</h4>
          <h5>Ocena: {parseFloat(book.ocena.toFixed(2))}/5</h5>
          <p>{book.opis}</p>
          <div className={classes.actionContainer}>
            <div className={classes.actions} onClick={() => setShowOceni(true)}>
              <button>Oceni</button>
            </div>
            <div
              className={classes.actions}
              onClick={() => setShowPreporuci(true)}
            >
              <button>Preporuči</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showOceni && <OceniModal close={() => setShowOceni(false)} />}
        {showOceni && <Backdrop onClick={() => setShowOceni(false)} />}
      </div>
      <div>
        {showPreporuci && (
          <PreporuciModal close={() => setShowPreporuci(false)} />
        )}
        {showPreporuci && <Backdrop onClick={() => setShowPreporuci(false)} />}
      </div>
      <div className={classes.coments}>
        <h2>Komentari</h2>
        <div className={classes.notes}>
          <ComentList coments={book.komentari} />
        </div>
      </div>
    </div>
  );
}

export default BookPreview;
