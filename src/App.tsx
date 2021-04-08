import './App.css';
import Header from './Components/Header';
import Catalog from './Components/Catalog';
import Content from './Components/Content';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <div className="App-body">
        <Catalog></Catalog>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
