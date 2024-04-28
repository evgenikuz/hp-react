import './App.css';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import { useState } from 'react'


function App() {
  let [text, searchText] = useState('')
  let [school, chosenSchool] = useState('')
  return (
    <>
      <Header text={text} searchText={searchText} school={school} chosenSchool={chosenSchool}/>
      <hr className='line'/>
      <Main text={text} school={school}/>
    </>
  );
}

export default App;
