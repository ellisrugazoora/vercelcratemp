import React from 'react';
//import './App.css';

import Tanga from './Components/Tanga/Tanga';
import StockApp from "./Components/StockApp";
import Music from './Components/Music/Music';

import { Box, ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import { ThinBackend } from 'thin-backend-react';

function App() {
  var display = {a: <StockApp />, b: <Tanga />, c: <Music />}
  return (
  <ThinBackend requireLogin>
    <ChakraProvider>
      <Box className="App" width={"100%"}>
        {display.b}
      </Box>
    </ChakraProvider>
  </ThinBackend>
      
  );
}

export default App;