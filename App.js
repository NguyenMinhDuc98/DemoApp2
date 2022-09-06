import React from 'react';

import {Center, NativeBaseProvider} from 'native-base';
import Request from './src/Request';
import AppBar from './src/commons/AppBar';

const App = () => {
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
