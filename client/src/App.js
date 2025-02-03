import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSecret from './components/CreateSecret';
import ReceiveSecret from './components/ReceiveSecret';

function App() {
  return (
    <div className='w-full max-w-[700px]'>
      <Router>
        <Routes>
          <Route path='/' element={<CreateSecret />} />
          <Route path='/:secretId' element={<ReceiveSecret />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;