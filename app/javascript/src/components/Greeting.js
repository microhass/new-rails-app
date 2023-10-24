import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  let greetings = useSelector((state) => state.greetings.greetings);
  const status = useSelector((state) => state.greetings.status);
  const randomIndex = Math.floor(Math.random() * greetings.length)

  return (<div>{ greetings.length === 0 ? <p>loading</p> : <p>{greetings[randomIndex].message}</p>}</div>);
};

export default Greeting;
