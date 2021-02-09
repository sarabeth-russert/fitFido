import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen.js';
import AddScreen from './screens/AddScreen'

function App() {
  const [foodList, setFoodList] = useState([{
    Brand: 'Hills Science Diet',
    LifeStage: 'Adult',
    Flavor: 'Lamb & Brown Rice',
    Type: 'Large Breed',
    FoodForm: 'Dry',
    KCal: '367',
    Measurement: 'Cup'
  },{
    Brand: 'Blue Buffalo',
    LifeStage: 'Adult',
    Flavor: 'Chicken & Brown Rice',
    Type: 'Life Protection Formula',
    FoodForm: 'Dry',
    KCal: '378',
    Measurement: 'Cup'
  }]);

  const addFood = (food) => {
    setFoodList([...foodList, food]);
  }

  return (
    <Router>
      <NavBar></NavBar>
      <main>
        <Container>
          <Route path='/add' render={(props) => (<AddScreen {...props} addFood={addFood} foodList={foodList}/> )} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/' component={HomeScreen} exact />

        </Container>
      </main>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;

// create api server
// log in or profiel creation screens
// food adding tool, how does it work?

