import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainRouter from './MainRouter'
import Spinner from './components/Spinner/Spinner'

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <MainRouter />
      </Router>
    </React.Suspense>
  );
}

export default App;
