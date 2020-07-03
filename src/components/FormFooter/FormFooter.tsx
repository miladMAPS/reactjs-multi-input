import React from "react";
import Button from "@material-ui/core/Button";
import { FormFooterProps } from "../../constants/models/Props";
import "./FormFooter.scss";

function FormFooter(props: FormFooterProps) {
  return (
    <div className="form-footer">
      <Button
        variant="contained"
        color="primary"
        className="btn-save"
        onClick={props.save}
      >
        Save
      </Button>
      <Button variant="contained" className="btn-cancel" onClick={props.cancel}>
        Cancel
      </Button>
    </div>
  );
}

export default FormFooter;
