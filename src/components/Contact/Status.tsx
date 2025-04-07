// Requirements
import React, { ReactElement } from "react";

// Data
import statusMessages from "./statusMessages";

// Style
import css from "./Contact.module.less";

interface Props {
  status: string;
}

function Status(props: Props): ReactElement {
  const { status } = props;

  const getColor = () => {
    if (status === statusMessages.EMAIL_SENT) return css.valid;
    if (status === statusMessages.ERROR) return css.invalid;
    return "";
  };

  return (
    <div className={css.formElement}>
      <label htmlFor="status">
        <span className={css.labelText}>const status =</span>
        <input
          id="status"
          name="status"
          type="text"
          value={status}
          placeholder="undefined"
          className={getColor()}
          readOnly
        />
      </label>
    </div>
  );
}

export default Status;
