// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import NewsList from "./components/NewsList";
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [message, setMessage] = useState('');
  const getData = (data) => {
    if (data === '') {
      setMessage('Kenya')
    }
    else if (data === 'testing'){
      setMessage('testings')
    }
    else{
      setMessage(data)
    }
  }
  return (
    <div className="bg-dark">
      <NavBar onSubmit={getData}/>
      <br />
      <NewsList searchContent={message}/>
    </div>
  );
}

export default App;
