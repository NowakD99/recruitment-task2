import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu';
import Header from './components/Header';
import MainPage from './components/MainPage';
import News from './components/News';
import Weather from './components/Weather';
import Carousel from './components/Carousel';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <Menu/>
          
        <Switch>
            <Route path="/menu">
              <Carousel />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
