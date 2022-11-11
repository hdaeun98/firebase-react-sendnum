import {Crud} from './components/crud/index'
import './App.css';

/*
import './App.css';
import {useEffect, useState} from 'react';


const App = () => {
  const [hai, setCount] = useState(0);

  useEffect(() => {
    console.log('Count of',hai);
  }, [hai]);
  
  const handleClick = event => {
    setCount(hai+1);
  };

  return (
    <div>
      <h2>Count: {hai}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};*/

function App() {
  return (
    <Crud/>
  );
}


export default App;

/*
import React, { useState } from 'react';
import styled from 'styled-components';
const Button = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
&:disabled {
  color: grey;
  opacity: 0.7;
  cursor: default;
}
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Cash', 'Credit Card', 'Bitcoin'];
function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
*/