import Card2 from "../ui/Card2";
import classes from "./ComentItem.module.css";

function ComentItem(props) {
  const coment = props.coment;

  return (
    <div>
      <li className={classes.item}>
        <Card2>
          <h3>{coment.korisnik}</h3>
          <h5>Ocena: {coment.ocena}/5</h5>
          <p>{coment.komentar}</p>
        </Card2>
      </li>
    </div>
  );
}

export default ComentItem;
