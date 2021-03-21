import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, ErrorMessage, SubmitButton} from '../components/forms';
import authApi from '../api/auth'
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
  const loginApi = useApi(authApi.login)
  const auth = useAuth()
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await loginApi.request(email, password)

    if(!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
    auth.login(result.data)
  }

  return (
    <Screen>
        <ImageBackground 
          blurRadius={1}
          style={styles.background}
          source={require('../assets/background.jpg')}
        >
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
            <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />

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

const styles = StyleSheet.create({
  background:{
    flex : 1,
  },
  logo:{
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
})

export default LoginScreen;