import BookList from "../component/books/BookList";
import classes from "./UserOverview.module.css";

function Recommended() {
  const user = JSON.parse(localStorage.getItem("logged"));
  return (
    <div>
      <div className={classes.center}>
        <BookList books={user.preporuke} input="" />
      </div>
    </div>
  );
}

export default Recommended;
