
// note: FOR FUNCTION COMP NEED TO DEFINE NAMES IN PASCAL CASE ONLY


import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello World!</h1>
      </header>
    </div>
  );
}


// Events
function Football(){
  const shoot = () => {
    alert("Great shot!")
  }
  return (
    <button type='button' onClick={() => shoot()}>Click</button>
  )
}

//Events with param
function FootBallWithParam(){
  const shoot = (a) => {
    alert(a)
  }
  return(
    <button type='button' onClick={
      () => shoot("Event function works fine!")
    }>Click</button>
  )
}


// Conditions
// if
function CheckGoalOrNot(props) {
  const goal = props.isGoal
  if(goal){
    return (
      <h1>It's an Goal</h1>
    )
  }
  return(
    <h1>Not a Goal</h1>
  )
}

// Different type of param Passing
const MultiParam = ({GoalOrNot, Socre, Mvp, Gpp}) => (
  <>
    <h2>{GoalOrNot}</h2>
    <h2>{Socre}</h2>
    <h2>{Mvp[0]}</h2>
    <h2>{Gpp.Arul}</h2>    
  </>
)

//List - while using it will raise warning regarding keys

function SupFun(props) {
  return <p>{props.introduction}</p>
}
function MyArray(){
  const myList = ["arul", "vadivel", "S"]
  return (
    <>
      {myList.map((intro) => <SupFun introduction={intro}/>)}
    </>
  )
}

// for the above using keys 
// using keys the react only update the changed element istead of re renter all elements
function MyArrayWithKey() {
  const myList = [
    {id: 1, firstName: "Arul"},
    {id: 2, firstName: "vv"},
    {id: 3, firstName: "S"},
  ]
  return(
    <h2>
      {myList.map((names) => <SupFun key={names.id} introduction={names.firstName}/>)}
    </h2>
  )
}

// Form
function FormElement(){
  return(
    <form>
      <label>Name: </label>
      <input type='text' placeholder="Enter your name here"></input>
    </form>
  )
}
// Form using setState
function FormElementWithSetS(){

  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`My name is: ${name}`)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Name: <input 
        type='text' 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your name here"
        /></label>
        <input type='submit' />
    </form>
  )
}


// Form with multi input 
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name='prefix'  value={inputs.prefix || ""} onChange={handleChange}>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
      </select>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export {App, Football, FootBallWithParam, CheckGoalOrNot, MultiParam, MyArray, MyArrayWithKey, FormElement,
  FormElementWithSetS,
  MyForm,
}
