import React, { useState } from "react";
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

import { Post } from "../../BaseService";
import { GetInput } from "../../componentsProps";


export default function CreateTable() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [tables, setTables] = useState([]);
  const [response, setResponse] = useState({});


  const baseURL = BASE_URL + "tables";


  const navigate = useNavigate()

  const handleChange = (e) => {
    setTables({
      ...tables, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (!tables.capacity) {
      return alert("There are empty fields")
    }
    Post(baseURL, tables, setResponse)
    navigate('/tables');
  };

  if (response.errorMessage) {
    return alert(response.errorMessage)
  }

  return (
    <div>
      <div > Create table </div>
      capacity
      <GetInput type={"number"} onChange={handleChange} name={"capacity"} />

      <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Create</button>
      <Button href='/tables'>Back</Button>{' '}

    </div>
  );
}

