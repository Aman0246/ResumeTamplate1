// import logo from './logo.svg';
import './App.css';
import TamplateONE from './Pages/TamplateONE';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;
function App() {
  return (
    <>
<TamplateONE/>
    </>
  );
}

export default App;
