import React, { useState } from "react";
import classes from "./StarRating.module.css";

const StarRating = (props) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? classes.on : classes.off}
            onClick={() => {
              setRating(index);
              props.rating(index);
            }}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
