import './App.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { useState } from 'react'


function App() {
  let [text, searchText] = useState('')
  return (
    <>
      <Header text={text} searchText={searchText}/>
      <hr className='line'/>
      <Main searchText={searchText}/>
    </>
  );
}

export default App;
