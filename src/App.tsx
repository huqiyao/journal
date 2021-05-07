import React,{useEffect} from 'react';
import './App.css';
import Header from './Pages/Header';
import Catalog from './Pages/Catalog';
import Content from './Pages/Content';
import 'antd/dist/antd.css';
function App() {
  useEffect(() => {
    fetch('/getJournal')
      .then(res => res.json())
      .then(users => console.log(users));
  })
  return (
    <div className="App">
        <Header></Header>
      <div className="App-body">
        <Catalog></Catalog>
        {/* <Content journalValue=''></Content> */}
      </div>
    </div>
  );
}

export default App;
