import React from 'react';

const TestContext = React.createContext({
  theme: 'light',
  toggleTheme: () => { }
});

export default TestContext;
