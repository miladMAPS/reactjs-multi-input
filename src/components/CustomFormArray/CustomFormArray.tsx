import React from "react";
import Input from "../Input/Input";
import { FormArrayProps } from "../../constants/models/Props";
import "./CustomFormArray.scss";

const CustomFormArray = (props: FormArrayProps) => {
  const { label, controls, setInputList, setShowError, showError } = props;

  const handleInputChange = (value: string, index: number) => {
    if (index === 0) setShowError(false);
    const list = [...controls];
    list[index] = value;
    setInputList(list);
  };

  const handleRemoveControl = (index: number) => {
    const list = [...controls];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <>
      {controls.map((controlValue, i) => (
        <Input
          hasError={
            controls.length === 1 && controls[0].length === 0 && showError
          }
          label={label}
          value={controlValue}
          onChange={(e: any) =>
            handleInputChange((e.target as HTMLInputElement).value, i)
          }
          canDelete={controls.length !== 1 && controls.length - 1 !== i}
          onDelete={() => handleRemoveControl(i)}
        />
      ))}
    </>
  );
};

export default CustomFormArray;
