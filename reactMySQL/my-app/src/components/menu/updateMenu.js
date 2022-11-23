import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { GetByIdModel, Put } from "../../BaseService";
import { GetInput } from "../../componentsProps";


export default function UpdateMenu() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [menu, setMenu] = useState([]);
  const [response, setResponse] = useState({});


  const baseURL = BASE_URL + "menu";
  const { id } = useParams();
  useEffect(() => {
    GetByIdModel(baseURL, id, setMenu)
  }, []);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setMenu({
      ...menu, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (menu.nameMenu.length === 0 || menu.category.length === 0 || menu.price.length === 0) {
      return alert("There are empty fields")
    }
    Put(baseURL, id, menu, setResponse)
    navigate('/menu');
  };



  return (
    <div>
      <div > Update Menu </div>
      Category
      <GetInput value={menu.id_category	} type={"text"} onChange={handleChange} name={"id_category"} />
      Name
      <GetInput value={menu.nameMenu} type={"text"} onChange={handleChange} name={"name"} />
      Price
      <GetInput value={menu.price} onChange={handleChange} type={"number"} name={"price"} />

      <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Update Data</button>
      <Button href='/menu'>Back</Button>{' '}

    </div>
  );
}

