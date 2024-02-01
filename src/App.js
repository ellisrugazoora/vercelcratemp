import React from 'react';
//import './App.css';

import Tanga from './Components/Tanga/Tanga';
import StockApp from "./Components/StockApp";
import Music from './Components/Music/Music';

import { Box, ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import { ThinBackend } from 'thin-backend-react';
import { ensureIsUser, initThinBackend } from 'thin-backend';

function App() {
  var display = {a: <StockApp />, b: <Tanga />, c: <Music />}
  initThinBackend({
    // This url is different for each backend, this one points to 'vercelcratemp'
    host: 'https://vercelcratemp.thinbackend.app'
  });
  function UserStatus() {
    // Use the `useCurrentUser()` react hook to access the current logged in user
    // Returns `null` while the user is being fetched
    const user = useCurrentUser();

    return <div>
        {user?.email}

        <button onClick={logout}>Logout</button>
    </div>
  }
  return (
  <ThinBackend requireLogin>
    <ChakraProvider>
      <UserStatus />
      <Box className="App" width={"100%"}>
        {display.b}
      </Box>
    </ChakraProvider>
  </ThinBackend>
      
  );
}

export default App;