import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greetings/greetingsSlicer';
import Greeting from './components/Greeting';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default App;
