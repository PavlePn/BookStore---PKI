import ComentItem from "./ComentItem";
import classes from "./ComentList.module.css";

function ComentList(props) {
  return (
    <ul className={classes.list}>
      {props.coments.map((comentItem, index) => (
        <ComentItem coment={comentItem} key={index} />
      ))}
    </ul>
  );
}

export default ComentList;
