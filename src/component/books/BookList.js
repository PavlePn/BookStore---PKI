import { useLocation } from "react-router-dom";
import BookItem from "./BookItem";
import classes from "./BookList.module.css";

function BookList(props) {
  const filteredData = props.books.filter((book) => {
    if (props.input === "") {
      return book;
    } else {
      return (
        book.naslov.toLowerCase().includes(props.input) ||
        book.pisac.toLowerCase().includes(props.input)
      );
    }
  });

  const promo = filteredData.filter((book) => book.promocija);
  const ostalo = filteredData.filter((book) => !book.promocija);

  const location = useLocation();

  return (
    <div>
      {promo.length > 0 && (
        <div>
          {location.pathname !== "/preporuke" && <h2>Promocija</h2>}
          <ul className={classes.list}>
            {promo.map((bookItem) => (
              <BookItem
                book={bookItem}
                key={bookItem.naslov}
                setter={props.setter}
              />
            ))}
          </ul>
        </div>
      )}
      {ostalo.length > 0 && (
        <div>
          {location.pathname !== "/preporuke" && <h2>Ostalo</h2>}
          <ul className={classes.list}>
            {ostalo.map((bookItem) => (
              <BookItem
                book={bookItem}
                key={bookItem.naslov}
                setter={props.setter}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BookList;
