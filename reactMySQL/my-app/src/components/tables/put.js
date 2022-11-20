import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { GetByIdModel, Put } from "../../BaseService";
import { GetInput } from "../../componentsProps";


export default function UpdateTable() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [table, setTable] = useState([]);
  const [response, setResponse] = useState({});


  const baseURL = BASE_URL + "tables";
  const {id} = useParams ();
  useEffect(() => {
    GetByIdModel(baseURL, id, setTable)
  }, []);

  const navigate = useNavigate()

  const handleChange = (e) => {
      setTable({
        ...table, [e.target.name]:e.target.value
      })
  }

  const handleSubmit = () => {
    if (table.capasity.length == 0){
      return alert("There are empty fields")
    }
    Put(baseURL, id, table, setResponse)
    navigate('/tables');
  };

  
  return (
    <div>
      <div > Update Table </div>
      name
      <GetInput value={table.capasity} type={"text"} onChange={handleChange} name={"capasity"}  />
      <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Update Data</button>
      <Button href='/tables'>Back</Button>{' '}

    </div>
  );
}

