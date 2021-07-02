import React, { ReactElement, useState } from "react";
import { ImageBackground } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";
import login from "../../api/auth";
import Screen from "../../components/screen/Screen";
import styles from "./styles";
import useAuth from "../../auth/useAuth";
import useApi from "../../hooks/useApi";

const background = require("../../assets/background.jpg");

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(): ReactElement {
  const loginApi = useApi(login);
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result = await loginApi.request(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.login(result.data);
    return result.data;
  };

  return (
    <Screen>
      <ImageBackground
        blurRadius={1}
        style={styles.background}
        source={background}
      >
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password."
            visible={loginFailed}
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
          />

          <SubmitButton title="Login" />
        </AppForm>
      </ImageBackground>
    </Screen>
  );
}

export default LoginScreen;
