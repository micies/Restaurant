import React, { useState, useEffect } from "react";
import {  Badge, Button } from 'react-bootstrap';
import './reser.css'
import "reactjs-popup/dist/index.css";
import { Get, GetById, PostById , Delete} from "../../BaseService";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { Modal1 } from "../../componentsProps";



export default function Reservation() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { id } = useParams();

  const [menuDishes, setMenuDishes] = useState([]);
  const [orderQuantities, setOrderQuantities] = useState([]);
  const [calculateSumOrder, setCalculateSumOrder] = useState({});
  const [response, setResponse] = useState({});
  
  const [render, setRender] = useState(false);

  
  const UrlMenu = BASE_URL + "menu";
  const UrlDiner = BASE_URL + "diners";
  const reservePostUrl = BASE_URL + "diners/reservation";
  const reserveGetUrl = BASE_URL + "diners/getreservation";
  const sumUrl = BASE_URL + "diners/calculate";
  
  const navigate = useNavigate()
  
  useEffect(() => {
    Get(setMenuDishes, UrlMenu);
  }, [render]);
  
  useEffect(() => {
    GetById(sumUrl, id, setCalculateSumOrder);
    GetById(reserveGetUrl, id, setOrderQuantities);
    
  }, [!render]);
  
  
  useEffect(() => {
    GetById(sumUrl, id, setCalculateSumOrder);
  }, [!render]);
  
  
  function saveOrderQuantities() {
    let str = JSON.stringify(orderQuantities);
    PostById(reservePostUrl, id, { reservations: str }, setResponse);
    navigate('/diners');
    
  }
  console.log(orderQuantities)
  
  
  function deleteUserDiners(id) {
    console.log(id)
    Delete(id, UrlDiner)
    setOrderQuantities((current) =>
    current.filter((orderQuantities) => orderQuantities.id !== id)
    );   
    navigate('/diners');}
    
    const handleChange = (event) => {
      setOrderQuantities({
        ...orderQuantities,
        [event.target.name]: event.target.value,
      });
    };
    
    console.log(orderQuantities);
    
    console.log(calculateSumOrder)
  return (

    
    <div className="table-wrapper">

      {!!menuDishes.length && (
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>category</th>
              <th>price</th>
              <th>כמויות</th>
            </tr>
          </thead>
          <tbody>
            {menuDishes.map(({ name, category, price, id }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>                    
                    <input
                      name={id}
                      value={orderQuantities[id] || ""}
                      type="number"
                      min="0"
                      onChange={(e) => handleChange(e, id)}
                    />
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h1><Badge bg="success">the sum is: {calculateSumOrder.sum} </Badge>{' '}</h1>
      <Button href='/diners'>Back</Button>{' '}

      <Modal1 confirmFunc= {()=>deleteUserDiners(id)} text={"? האם אתה בטוח שאתה מעוניין למחוק את"} />

        <Button  onClick={saveOrderQuantities}>
        Post Data
        </Button>    </div>
  );
}

