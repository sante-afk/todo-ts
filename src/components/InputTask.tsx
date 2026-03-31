import "./InputTask.css";
import type { InputTaskType } from "../types/InputTaskType";
import { forwardRef } from "react";

const InputTask = forwardRef<HTMLInputElement, InputTaskType>(
  ({ value, onChange }, ref) => {
    return (
      <input
        ref={ref}
        className="InputTask"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
);

export default InputTask;
