<<<<<<< HEAD
=======
/* eslint-disable react/prop-types */
>>>>>>> refs/remotes/upstream/main
import React from "react";
import s from "./SumInput.module.css";

export const SumInput = ({ sum = 3580 }) => {
  return (
    <div className={s.default}>
      <input type="number" placeholder={sum} />
      <p>₽</p>
    </div>
  );
};
