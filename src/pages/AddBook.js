import classes from "./AddBook.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  let slikaInputRef;
  const naslovInputRef = useRef();
  const pisacInputRef = useRef();
  const opisInputRef = useRef();
  const brojStranaInputRef = useRef();
  const godinaInputRef = useRef();

  let books = JSON.parse(localStorage.getItem("books"));
  if (!books) books = [];

  const [slika, setSlika] = useState("generic.jpg");
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const enteredNaslov = naslovInputRef.current.value;
    const enteredPisac = pisacInputRef.current.value;
    const enteredOpis = opisInputRef.current.value;
    const enteredBrojStrana = brojStranaInputRef.current.value;
    const enteredGodina = godinaInputRef.current.value;

    const userData = {
      id: books.length + 1,
      naslov: enteredNaslov,
      opis: enteredOpis,
      slika: slika,
      pisac: enteredPisac,
      godina: enteredGodina,
      brojStrana: enteredBrojStrana,
      promocija: false,
      ocena: 0,
      brojOcena: 0,
      komentari: [],
    };
    books.push(userData);
    localStorage.setItem("books", JSON.stringify(books));
    navigate("/sellerOverview");
  }
  return (
    <div className="modal">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Naslov</label>
          <input type="text" required id="name" ref={naslovInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="surname">Pisac</label>
          <input type="text" required id="surname" ref={pisacInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="komentar">Opis</label>
          <textarea type="textarea" required id="komentar" ref={opisInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="adresa">Broj Strana</label>
          <input type="text" required id="adresa" ref={brojStranaInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="username">Godina izdanja</label>
          <input type="text" required id="username" ref={godinaInputRef} />
        </div>
        <div>
          <input
            className={classes.control}
            type="file"
            name="file"
            hidden={true}
            ref={(refParam) => (slikaInputRef = refParam)}
            onChange={() => setSlika(slikaInputRef.files[0].name)}
          />
          <div className={classes.actions}>
            <button
              onClick={() => {
                slikaInputRef.click();
              }}
              type="button"
            >
              Izaberi sliku
            </button>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Dodaj knjigu</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
