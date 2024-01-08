import { useState, useEffect } from 'react';

import './App.css';
import { ethers } from 'ethers';
import JavaScriptQuiz from './contracts/JavaScriptQuiz.json';

function App() {
  const [account, setAccount] = useState('');
  useEffect(() => {
    initWeb3();
  }, []);

  async function initWeb3() {
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const contractABI = JavaScriptQuiz.abi;

    try {
      const account = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(account);
      const provider = new ethers.providers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      console.log('contract:', await contract.question);
    } catch (e) {
      console.log('error:', e);
    }
  }

  return <></>;
}

export default App;
