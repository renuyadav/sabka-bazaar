import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button, Input } from "../../atoms";
import { LoginFormModal } from "../../../interfaces/users";
import { AppState, AppDispatch } from "../../../store/store";
import { SagaActions } from "../../../store/sagas/sagaactions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EmailValidation,
  RequiredValidation,
} from "../../../utils/validationRules";

const LoginForm: React.FC = () => {
  const methods = useForm<LoginFormModal>({ mode: "all" });

  const userData = useSelector((store: AppState) => store.userData);

  console.log("useData in login>>>" + userData);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.user.length) {
      //navigate to cart page
      navigate("/cart");
    }
  }, [userData]);

  return (
    <div className="flex-fill">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(({ email, password }) => {
            dispatch({
              type: SagaActions.LOGIN_USER_REQUEST,
              payload: { email, password },
            });
            console.log("sign submitted::");
          })}
        >
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

          {userData?.loading && <p>Sending data to Server</p>}
          {userData?.error && <p style={{ color: "red" }}>{userData.error}</p>}

          <Button> Sign In </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
