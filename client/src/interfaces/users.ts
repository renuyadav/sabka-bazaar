export interface LoginFormModal {
  email: string;
  password: string;
}
export interface SignupFormModal extends LoginFormModal {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}
