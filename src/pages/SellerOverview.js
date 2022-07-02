import BookList from "../component/books/BookList";
import classes from "./SellerOverview.module.css";

function SellerOverviview() {
  const books = JSON.parse(localStorage.getItem("books"));
  return (
    <div>
      <div className={classes.center}>
        <BookList books={books} />
      </div>
    </div>
  );
}

export default SellerOverviview;
