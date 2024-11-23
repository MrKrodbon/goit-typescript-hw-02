import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={css.error}>Woops...there is no images for such query</p>
    </div>
  );
};

export default ErrorMessage;
