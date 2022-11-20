import React, { useState } from "react";
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

import { Post } from "../../BaseService";
import { GetInput } from "../../componentsProps";


export default function CreateMenu() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [menu, setMenu] = useState([]);
  const [response, setResponse] = useState({});


  const baseURL = BASE_URL + "menu";


  const navigate = useNavigate()

  const handleChange = (e) => {
    setMenu({
      ...menu, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (!menu.name || !menu.category || !menu.price) {
      return alert("There are empty fields")
    }
    Post(baseURL, menu, setResponse)
    navigate('/menu');
  };

  if (response.errorMessage) {
    return alert(response.errorMessage)
  }

  return (
    <div>
      <div > Create Menu </div>
      Category
      <GetInput type={"text"} onChange={handleChange} name={"category"} />
      Name
      <GetInput type={"text"} onChange={handleChange} name={"name"} />
      Price
      <GetInput type={"number"} onChange={handleChange} name={"price"} />

      <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Create</button>
      <Button href='/menu'>Back</Button>{' '}

    </div>
  );
}

