import { useContext } from "react";
import ModalsContext from "../../store/Modals";
import classes from "./MainNavigation.module.css";

function Notification(props) {
  const modals = useContext(ModalsContext);
  return (
    <div className="modal">
      <h2>{props.tekst}</h2>

      <div className={classes.actions}>
        <button onClick={modals.closeModals}>Ok</button>
      </div>
    </div>
  );
}

export default Notification;
