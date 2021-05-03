import React from 'react';

import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './data-models/Car';

// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class App extends React.Component {
  // 1) After loading the page, get the data from cars-data.json
  // 2) Convert data to Car class
  // 3) Pass the cars into the carsData prop
  // Where should I put the AJAX call?
  constructor(props){
    super(props);
    // 1) Create a componentDidMount Hook
    // 2) Save the json data into a variable
    // 3) Save the json data into state
    // 4) use State to pass to the carsData prop.
   this.state = {carsList : []}
  }
  componentDidMount = () => {
    const carsJson = [
      {"brand": "Toyota", "model": "Yaris", "year": 2002, "km": 230000}, 
      {"brand": "Toyota", "model": "Corola", "year": 2015, "km": 105000}, 
      {"brand": "Hyundai", "model": "i30", "year": 2010, "km": 150000}, 
      {"brand": "Ford", "model": "Focus", "year": 2002, "km": 210000}, 
      {"brand": "Volkswagon", "model": "Beatle", "year": 1970, "km": 1005000 }, 
      {"brand": "Audi", "model": "TT", "year": 2019, "km": 10000}
  ];
  this.setState (
    {
      carsList: carsJson.map (car => new Car(car.brand, car.model, car.year, car.km, car.id))
    }
  );
  }
  addCar = (car)=> {
    this.setState({
      carsList: this.state.carsList.concat(car)
    })
  }

  render(){
    return (
      <div>
        <CarsView addCar={this.addCar} carsData={this.state.carsList}/>
      </div>
    );    
  }

}

export default App;
