import React from 'react';

// Basic class structure

class CarClass extends React.Component {
    render() {
        return <h2>Hi I'm Arul</h2>
    }
}


// With constructor

class BikeClass extends React.Component{
    constructor(){
        super();
        this.state = {color: "red"}
    }
    render() {
        return <h2>My bike color is {this.state.color}</h2>
    }
}

// components in components

class BikeCar extends React.Component{
    render() {
        return(
            <>
                <h1>With my bike and car</h1>
                <CarClass />
            </>
        )
    }
}


// State and set State

class CarState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brand: "Audi",
            color: "Black"
        }
    }
    changeModel = () => {
        this.setState({brand: "benze"})
    }
    render() {
        return(
            <>
                <h2>{this.state.brand}</h2>
                <button type='button' onClick={this.changeModel}>Change Brand</button>
            </>
        )
    }
}


export {CarClass, BikeClass, BikeCar, CarState};