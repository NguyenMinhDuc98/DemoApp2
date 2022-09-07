import React, {useEffect} from 'react';

import axios from 'axios';
import {Center, NativeBaseProvider} from 'native-base';
import AppBar from './src/commons/AppBar';
import Request from './src/Request';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const getToken = async () => {
    const formData = new FormData();
    formData.append('client_id', 'PurchasingAppAccount');
    formData.append('client_secret', 'pr1234!');
    formData.append('grant_type', 'password');
    formData.append('scope', 'roleapi');
    formData.append('username', 'test');
    formData.append('password', '1234567');
    try {
      const res = await axios({
        method: 'post',
        url: 'https://data.vnas.com.vn/identityservertest/connect/token',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      });

      await AsyncStorage.setItem(
        'token',
        `${res.data.token_type} ${res.data.access_token}`,
      );
    } catch (error) {
      console.log(
        '🚀 ~ file: ApiService.js ~ line 31 ~ getToken ~ error',
        error,
      );
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <NativeBaseProvider>
      <Center>
        <AppBar />
      </Center>
      <Request />
    </NativeBaseProvider>
  );
};

export default App;
