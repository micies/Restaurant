import React from "react";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import 'reactjs-popup/dist/index.css';
import "../../table.css";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetByIdModel } from '../../BaseService'
import { GetInput } from "../../componentsProps";





export default function GetIdMenu() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;


  const [menu, setMenu] = useState([]);
  const BaseUrl = BASE_URL + "menu"
  const { id } = useParams();


  useEffect(() => {
    GetByIdModel(BaseUrl, id, setMenu)
  }, []);

  console.log(menu)

  return (
    <div>
      <h1>Show Menu</h1>
      name:
      <GetInput value={menu.name} disabled={true} />
      category:
      <GetInput value={menu.category} disabled={true} />
      price:
      <GetInput value={menu.price} disabled={true} />
      <Button href='/menu' >Back</Button> {' '}

    </div>
  )
}



