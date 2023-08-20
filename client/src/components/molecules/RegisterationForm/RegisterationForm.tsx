import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button, Input } from "../../atoms";
import { SignupFormModal } from "../../../interfaces/users";
import { AppState, AppDispatch } from "../../../store/store";
import { SagaActions } from "../../../store/sagas/sagaactions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RequiredValidation,
  EmailValidation,
} from "../../../utils/validationRules";

const RegisterationForm: React.FC = () => {
  const methods = useForm<SignupFormModal>({ mode: "all" });

  //const userData = useSelector((store: AppState) => store.userData);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div className="flex-fill">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(({ firstName, email, password }) => {
            /*  dispatch({
            type: SagaActions.LOGIN_USER_REQUEST,
            payload: { email, password },
          });*/
            console.log("sign up submitted::");
          })}
        >
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            ariaLabel="first Name"
            validationRules={RequiredValidation}
          ></Input>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            ariaLabel="Last Name"
            validationRules={RequiredValidation}
          ></Input>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            ariaLabel="Email"
            validationRules={EmailValidation}
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            ariaLabel="Password"
            validationRules={RequiredValidation}
          ></Input>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            ariaLabel="Confirm Password"
            validationRules={RequiredValidation}
          ></Input>

          {/*
        {userData?.loading && <p>Sending data to Server</p>}
        {userData?.error && <p style={{ color: "red" }}>{userData.error}</p>}

          */}

          <Button> Register </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterationForm;
