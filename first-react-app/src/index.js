import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, Football, FootBallWithParam, CheckGoalOrNot, MultiParam, MyArray, MyArrayWithKey, FormElement,
  FormElementWithSetS,
  MyForm,
} from './functionComponents';
import reportWebVitals from './reportWebVitals';
import {CarClass, BikeClass, BikeCar, CarState} from './classComponents'

// Route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


const myElement = (
  <table>
    <tr>
      <th>Sno</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Arul</td>
      <td>24</td>
    </tr>
  </table>
)


const MostValPlayer = ["Arul", "vijay"]
const GoalPerPersion = {
  "Arul": "3",
  "vijay":"2"
}


//List
const myArray1 = ["arul", "vadivel", "S"]
const myList= myArray1.map((intro) => <p>{intro}</p>)

//Routes
export default function AppRoute(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(<AppRoute />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
