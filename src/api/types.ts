export type LoginFormDataType = {
  email: string;
  password: string;
};

export type RegisterFormDataType = {
  email: string;
  password1: string;
  password2: string;
};
export type DataOAuthType = {
  access_token: string | (string | null)[] | null;
};

export type ResetPasswordType = {
  email: string;
};
