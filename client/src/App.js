import React from 'react';
import axios from 'axios';

import HeaderSection from './components/organisms/headerSection/HeaderSection';
import AddCardSection from './components/organisms/addCardSection/AddCardSection';

import './App.css';


const b = async () => {

  console.log('getting this now')
  try {
    const response = await axios.get('api/credit-cards');

    const c = await response.data;
    console.log('this is c', c);
  } catch(error) {
    console.log('we have an error here', error);
  }
}

// b();

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <AddCardSection />
    </div>
  );
}

export default App;
