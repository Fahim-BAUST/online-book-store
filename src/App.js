
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Books from './Pages/Books/Books';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">

      {/* ekhane react route use kora hoise  */}
      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* path /home deya hoise karon okhane click korle jeno home e niye jay  */}
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/books">
            <Books></Books>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/placeOrder/:serviceId">
            <PlaceOrder></PlaceOrder>
          </Route>

          {/* 404 not found page er jonne path thik kora hoise  */}
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>


    </div>
  );
}

export default App;
