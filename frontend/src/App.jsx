import { useState, useEffect } from 'react';

import './App.css';

function App() {
  useEffect(() => {
    async function initWeb3() {
      const contractAddress = '';
      const contractABI = [];
    }
    try {
      window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return <></>;
}

export default App;
