import React from "react";
import "./ButtonAddTask.css";
import type { ButtonTaskProps } from "../types/ButtonTaskType";

function ButtonAddTask({ onClick }: ButtonTaskProps) {
  return (
    <>
      <button className="buttonAdd" onClick={onClick}>
        Add
      </button>
    </>
  );
}

export default ButtonAddTask;
