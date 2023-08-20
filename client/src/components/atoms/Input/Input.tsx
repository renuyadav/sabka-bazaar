import React from "react";
import { useFormContext } from "react-hook-form";

const Input = (props: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // Use useFormContext to access the register function

  const { name, type, ariaLabel, placeholder, validationRules } = props;
  return (
    <div className="form-group">
      <label htmlFor={name} aria-label={ariaLabel}></label>
      <input
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        aria-invalid="true"
        aria-describedby={`${name}-error`}
        {...register(name, validationRules)}
      />

      {errors && errors[name] && (
        <p id={`${name}-error`} role="alert" style={{ color: "red" }}>
          {errors[name]?.message
            ? `${errors[name]?.message}`
            : `${placeholder} is requirred`}
        </p>
      )}

      {}
    </div>
  );
};

export default Input;
