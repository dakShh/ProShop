import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";

export default function SimpleRating({ value, text, className }) {
  const [rating, setRating] = useState(value);

  return (
    <div>
      <div
        component="fieldset"
        mb={3}
        className={`d-flex align-items-center ${className ? className : null}`}
      >
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          precision={0.5}
          className="fs-5"
          style={{ color: "#5d9686" }}
          readOnly
        />
        <span className="fs-6 px-2">from {text}</span>
      </div>
    </div>
  );
}
