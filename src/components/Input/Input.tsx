import React from "react";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { InputProps } from "../../constants/models/Props";
import "./Input.scss";

const Input = (props: InputProps) => {
  const { label, hasError, value, onChange, canDelete, onDelete } = props;

  return (
    <div className="input-field">
      <TextField
        error={hasError}
        label={label}
        value={value}
        fullWidth
        onChange={onChange}
      />
      {canDelete && <CloseIcon className="close-icon" onClick={onDelete} />}
    </div>
  );
};

export default Input;
