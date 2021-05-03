import React from 'react';
import { Form, Jumbotron, Table } from 'react-bootstrap';
import Car from '../data-models/Car';

import './CarsView.css';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class CarsView extends React.Component{
    constructor(props){
    super(props);
       this.state = {
           currentCar : {},
           brand: '',
           model: '',
           year:'',
           km:''
       };

    }
    chooseCar = (car) => {
        this.setState(
            {
                currentCar: car
            }
        )
    }
    carInput=(key,value) =>
    {
        this.setState ({
            [key]: value
        })
    }
    createNewCar =()=> {
        const newCar = new Car (this.state.brand, this.state.model, this.state.year, this.state.km);
        this.props.addCar(newCar);

    }
    
    render(){
        const carRows = this.props.carsData.sort(
            (car1, car2)=> car2.year - car1.year
        ).map( car => {
            return (
            <tr key={car.id} onClick={() => this.chooseCar(car)}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.km}</td>
                <td>{car.kmPerYear()}</td>
            </tr>
                )
        })
        return (
            <div className= "container">
            <Table striped className="my-table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>KM</th>
                        <th>KM per year</th>
                    </tr>
                </thead>
                <tbody>
                    {carRows}
                </tbody>
            </Table>
            <Jumbotron>
                <h1>Selected car info</h1>
                <h2>{this.state.currentCar.brand}</h2>
                <h3>{this.state.currentCar.model}</h3>
            </Jumbotron>
            <Form.Group>
                <Form.Control value={this.state.brand} onChange ={(event) => {this.carInput("brand",event.target.value)}} type="text" placeholder="Brand" />  
                <Form.Control value={this.state.model} onChange ={(event) => {this.carInput("model",event.target.value)}} type="text" placeholder="Model" />
                <Form.Control value={this.state.year} onChange ={(event) => {this.carInput("year",event.target.value)}} type="number" placeholder="Year" />
                <Form.Control value={this.state.km} onChange ={(event) => {this.carInput("km",event.target.value)}} type="number" placeholder="Km" />  
                <button onClick = {this.createNewCar}>Add Car</button>
            </Form.Group>
            </div>
        )
    }
}

export default CarsView;