import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import { BrowserRouter as Router } from 'react-router-dom'

import React from 'react'
import MainRouter from './MainRouter'
import Spinner from './components/Spinner/Spinner'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF6109",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFF5EE",
      contrastText: "black",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <MainRouter />
      </Router>
    </React.Suspense>        
    </ThemeProvider>
  );
}

export default App;
