import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StartLoan from './components/startLoan/startLoan.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StartLoan />

    </>
  )
}

export default App
