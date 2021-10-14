import React from 'react';
import { Alert, Button, View } from 'react-native';
import { useActions, useState } from '../overmind';

const Login = () => {
  const { login } = useActions();
  const {token} = useState()
    console.log(token, 'token')
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Button title="Login" onPress={async () => 
    {
       
       await login({
            username: "dev+kodtest@refunder.se",
            password: "cashback4ever",
            onSuccess: () => {
                Alert.alert('success')
            },
            onError: () => {
                Alert.alert('login failed')
            }
        })
       
    }
    }/>
    </View>
  );
};

export default Login;
