import React from 'react';
import { JsonFormsDispatch } from '@jsonforms/react';
import Container from '@material-ui/core/Container';
import './App.css';

const App = () => {
  return (
    <Container>
      <div className="App">
        <JsonFormsDispatch />
      </div>
    </Container>
  );
}

export default App;
