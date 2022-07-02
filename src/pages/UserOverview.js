import BookList from "../component/books/BookList";
import classes from "./UserOverview.module.css";

function UserOverviview() {
  const books = JSON.parse(localStorage.getItem("books"));
  return (
    <div>
      <div className={classes.center}>
        <BookList books={books} input="" />
      </div>
    </div>
  );
}

export default UserOverviview;
