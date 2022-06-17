import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Footer from './Components/footer/footer';
import ListMovies from './Components/listMovies/listMovies';
import Movies from "./Components/movies";
import Calendar from "./Components/calendar";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import MovieInfo from './Components/MovieInfo/MovieInfo';

function NewComp(){
  console.log("Im here")
  return (<h1>Hello</h1>);
}
function App() {
  console.log("App")
  return (
    <div>
      <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/listMovies">
              <ListMovies />
            </Route>
            <Route
              path="/movieInfo/:name"
              render={props => <MovieInfo id={props} />}
            />
          </Switch>
          <Footer />
      </BrowserRouter>
    </div>    
  );
}

export default App;
