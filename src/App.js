import React from 'react';
import Text from './components/Text/text';



import TextContextProvider from './context/Textcontext';

function App() {
  return (
    <div>
      <TextContextProvider>
        <Text/>
      </TextContextProvider>
    </div>
  );
}

export default App;
