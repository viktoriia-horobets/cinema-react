import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Footer from './Components/footer/footer';
import ListMovies from './Components/listMovies/listMovies';
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
        <Footer />
        {/* <ListMovies /> */}
      </BrowserRouter>
    </div>    
  );
}

export default App;
