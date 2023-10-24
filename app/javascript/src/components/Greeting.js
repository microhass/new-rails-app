import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  let { greeting: message } = useSelector((state) => state.greetings);

  return <div>
    <h1>{message?.greeting}</h1>
    <p>Id: {message?.id}</p>
  </div>;
};

export default Greeting;
