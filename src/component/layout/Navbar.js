import React, { useContext } from "react";
import classes from "./MainNavigation.module.css";
import ModalsContext from "../../store/Modals";
import UsersContext from "../../store/Users";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const log = useContext(UsersContext);
  const modals = useContext(ModalsContext);
  const navigate = useNavigate();

  function odjava() {
    log.setLoggedIn("");
    localStorage.removeItem("logged");
    navigate("");
  }

  console.log(log.loggedIn);
  return (
    <div>
      {log.loggedIn === "" && (
        <div>
          <header className={classes.header}>
            <div>
              <div className={classes.logo}>Knjižara perce</div>
              <img
                src="http://127.0.0.1:8887/perce4.png"
                className={classes.logoImg}
                alt="Logo"
              />
            </div>
            <nav>
              <ul>
                <li>
                  <button
                    className="btn--link"
                    onClick={modals.setRegistracija}
                  >
                    Registracija
                  </button>
                </li>
                <li>
                  <button className="btn--link" onClick={modals.setPrijava}>
                    Prijava
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
      {log.loggedIn === "kupac" && (
        <div>
          <header className={classes.header}>
            <div>
              <div
                className={classes.logo}
                onClick={() => navigate("/userOverview")}
              >
                Knjižara perce
              </div>
              <img
                src="http://127.0.0.1:8887/perce4.png"
                className={classes.logoImg}
                alt="Logo"
              />
            </div>
            <nav>
              <ul>
                <li>
                  <button
                    className="btn--link"
                    onClick={() => navigate("/preporuke")}
                  >
                    Preporuke
                  </button>
                </li>
                <li>
                  <button
                    className="btn--link"
                    onClick={() => navigate("/profil")}
                  >
                    Profil
                  </button>
                </li>
                <li>
                  <button className="btn--link" onClick={odjava}>
                    Odjava
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
      {log.loggedIn === "prodavac" && (
        <div>
          <header className={classes.header}>
            <div>
              <div className={classes.logo}>Knjižara perce</div>
              <img
                src="http://127.0.0.1:8887/perce4.png"
                className={classes.logoImg}
                alt="Logo"
              />
            </div>
            <nav>
              <ul>
                <li>
                  <button className="btn--link" onClick={odjava}>
                    Odjava
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
    </div>
  );
}

export default Navbar;
