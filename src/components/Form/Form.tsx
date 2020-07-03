import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Alert, AlertTitle } from "@material-ui/lab";
import CustomFormArray from "../CustomFormArray/CustomFormArray";
import FormFooter from "../FormFooter/FormFooter";
import "./Form.scss";

function Form() {
  const [inputList, setInputList] = useState([""]);
  const [output, setOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showError, setShowError] = useState(false);
  const [TO, setTO] = useState();

  const saveForm = () => {
    if (inputList.length === 1 && inputList[0].length === 0) setShowError(true);
    else {
      setOutput(
        JSON.stringify(
          inputList.slice(0, -1).length !== 0 ? inputList.slice(0, -1) : [""]
        )
      );
      setShowOutput(true);
      const to = setTimeout(() => {
        setShowOutput(false);
      }, 4000);
      setTO(to);
    }
  };

  const clearForm = () => {
    setInputList([""]);
  };

  const hideOutput = () => {
    setShowOutput(false);
    clearTimeout(TO);
  };

  useEffect(() => {
    const len = inputList.length;
    if (showOutput) hideOutput();
    if (inputList[len - 1] !== "") setInputList([...inputList, ""]);
    if (inputList[len - 1] + inputList[len - 2] === "")
      setInputList(inputList.splice(0, len - 2));
  }, [inputList]);

  return (
    <>
      <Container component="main" maxWidth="xs" className="container">
        <Typography component="h1" variant="h5">
          ReactJS Test
        </Typography>
        <form className="form" noValidate autoComplete="off">
          <CustomFormArray
            label="Enter Text"
            controls={inputList}
            setInputList={setInputList}
            showError={showError}
            setShowError={setShowError}
          />
          <FormFooter save={saveForm} cancel={clearForm} />
        </form>
      </Container>
      {showOutput && (
        <Alert className="alert" severity="success">
          <AlertTitle>{output}</AlertTitle>
        </Alert>
      )}
    </>
  );
}

export default Form;
