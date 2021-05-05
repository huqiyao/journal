import './App.css';
import Header from './Pages/Header';
import Catalog from './Pages/Catalog';
import Content from './Pages/Content';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
        <Header></Header>
      <div className="App-body">
        <Catalog></Catalog>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
