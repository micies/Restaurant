import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

import { Get, Post } from "../../BaseService";
import { GetInput } from "../../componentsProps";


export default function CreateMenu() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [response, setResponse] = useState({});


  const baseUrlMenu = BASE_URL + "menu";
  const baseUrlCategory = BASE_URL + "category"


  const navigate = useNavigate()

  useEffect(() => {
    Get(setCategories, baseUrlCategory)
  }, []);

  const handleChange = (e) => {
    console.log(e.target)
    setMenu({
      ...menu, [e.target.name]: +e.target.value || e.target.value
    })
    console.log(menu)
  }

  const handleSubmit = () => {
    if (!menu.nameMenu || !menu.price) {
      return alert("There are empty fields")
    } 
    Post(baseUrlMenu, menu, setResponse)
    navigate('/menu');
  };


  if (response.errorMessage) {
    return alert(response.errorMessage)
  }

  return (
    <div>
      <div > Create Menu </div>
      <div>Category</div>
        <select name="id_category" onChange={handleChange}>
      {categories.map(item => 
        <option  value={item.id_category} key={item.name} >{item.name}</option>
        )}      
        </select>
      <div>Name</div>
      <GetInput type={"text"} onChange={handleChange} name={"nameMenu"} />
      Price
      <GetInput type={"number"} onChange={handleChange} name={"price"} />

      <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Create</button>
      <Button href='/menu'>Back</Button>{' '}

    </div>
  );
}

