import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>    
  );
}

export default App;
