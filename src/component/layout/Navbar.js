import React, { useContext } from "react";
import classes from "./MainNavigation.module.css";
import ModalsContext from "../../store/Modals";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const modals = useContext(ModalsContext);
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("userType");

  function odjava() {
    localStorage.setItem("userType", ""); // log.setLoggedIn("");
    localStorage.removeItem("logged");
    navigate("");
  }

  return (
    <div>
      {loggedIn === "" && (
        <div>
          <header className={classes.header}>
            <div>
              <button className="btn--link">Knjižara Perce</button>
              <img
                src="http://127.0.0.1:8887/Util/perce4.png"
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
      {loggedIn === "kupac" && (
        <div>
          <header className={classes.header}>
            <div>
              <button
                className="btn--link"
                onClick={() => navigate("/userOverview")}
              >
                Knjižara Perce
              </button>
              <img
                src="http://127.0.0.1:8887/Util/perce4.png"
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
      {loggedIn === "prodavac" && (
        <div>
          <header className={classes.header}>
            <div>
              <button
                className="btn--link"
                onClick={() => navigate("/sellerOverview")}
              >
                Knjižara Perce
              </button>

              <img
                src="http://127.0.0.1:8887/Util/perce4.png"
                className={classes.logoImg}
                alt="Logo"
              />
            </div>
            <nav>
              <ul>
                <li>
                  <button
                    className="btn--link"
                    onClick={() => navigate("/add")}
                  >
                    Dodaj knjigu
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
    </div>
  );
}

export default Navbar;
