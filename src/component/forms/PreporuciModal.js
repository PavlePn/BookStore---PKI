import { useState } from "react";
import classes from "./Form.module.css";

function PreporuciModal(props) {
  const loggedUser = JSON.parse(localStorage.getItem("logged"));
  const usersInit = JSON.parse(localStorage.getItem("users"));
  const book = JSON.parse(localStorage.getItem("currentBook"));

  const [users, setUsers] = useState(usersInit);

  const preporuka = (username) => () => {
    users.map((user, index) => {
      if (user.username === username) {
        user.preporuke.push(book);
        users[index] = user;
        localStorage.setItem("users", JSON.stringify(users));
        setUsers(users);
        return true;
      }
      return false;
    });
  };

  return (
    <div className="modal">
      <ul className={classes.list}>
        {users
          .filter(
            (user) =>
              user.username !== loggedUser.username && user.type === "kupac"
          )
          .map((u) => (
            <div>
              <li className={classes.item} key={u.username}>
                <h3>{u.username}</h3>
                <div className={classes.actions}>
                  <button
                    disabled={
                      u.preporuke.filter(
                        (element) => element.naslov === book.naslov
                      ).length > 0
                    }
                    onClick={preporuka(u.username)}
                  >
                    Preporuči
                  </button>
                </div>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default PreporuciModal;
