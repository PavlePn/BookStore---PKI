import BookItem from "./BookItem";
import classes from "./BookList.module.css";

function BookList(props) {
  return (
    <div>
      <div>
        <h2>Promocija</h2>
        <ul className={classes.list}>
          {props.books
            .filter((book) => book.promocija)
            .map((bookItem) => (
              <BookItem book={bookItem} key={bookItem.naslov} />
            ))}
        </ul>
      </div>
      <div>
        <h2>Ostalo</h2>
        <ul className={classes.list}>
          {props.books
            .filter((book) => !book.promocija)
            .map((bookItem) => (
              <BookItem book={bookItem} key={bookItem.naslov} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default BookList;
