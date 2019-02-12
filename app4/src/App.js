import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(response => {
      this.setState({
        cars: response.data
      });
    });
  }

  render() {
    const carsList = this.state.cars.map(car => {
      //FIX THIS 
      return (
        <div key={car.id}>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.color}</p>
          <p>{car.price}</p>
          <br>
          </br>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {carsList}
      </div>
    );
  }
}

export default App;
//{id, make, model, year, color, price}