import './App.css';
import Page from './components/Page';
import Sidebar from './components/sidebar1';
import Sidebar2 from './components/sidebar2';

function App() {
  return (
    <div className="App">
    <Sidebar className="left"/>
     <Page className="center"/>
     <Sidebar2 className="right"/>
    </div>
  );
}

export default App;
