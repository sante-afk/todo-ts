import React from "react";
import "./InputTask.css";
import type { InputTaskType } from "../types/InputTaskType";

function InputTask({ value, onChange }: InputTaskType) {
  return (
    <>
      <input
        className="InputTask"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default InputTask;
