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
import register from "../../api/users";
import useAuth from "../../auth/useAuth";
import useApi from "../../hooks/useApi";

const background = require("../../assets/background.jpg");

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  phoneNumber: Yup.string().required().min(10).label("Phone Number"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(): ReactElement {
  const registerApi = useApi(register);
  const loginApi = useApi(login);
  const auth = useAuth();
  const [error, setError] = useState<boolean | string>();

  const handleSubmit = async (userInfo: RegisterProps) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(true);
      else {
        setError("An unexpected error occurred.");
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken as string);
  };

  return (
    <Screen>
      <ImageBackground
        blurRadius={1}
        style={styles.background}
        source={background}
      >
        <AppForm
          initialValues={{
            username: "",
            phoneNumber: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="username"
            name="username"
            placeholder="Username"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phoneNo"
            name="phoneNo"
            placeholder="Phone No."
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
          <SubmitButton title="Register" />
        </AppForm>
      </ImageBackground>
    </Screen>
  );
}

export default RegisterScreen;
