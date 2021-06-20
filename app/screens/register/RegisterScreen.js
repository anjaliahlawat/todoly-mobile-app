import React, { useState } from "react";
import { ImageBackground } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";
import authApi from "../../api/auth";
import background from "../../assets/background.jpg";
import Screen from "../../components/screen/Screen";
import styles from "./styles";
import users from "../../api/users";
import useAuth from "../../auth/useAuth";
import useApi from "../../hooks/useApi";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  phoneNumber: Yup.string().required().min(10).label("Phone Number"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(users.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
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
