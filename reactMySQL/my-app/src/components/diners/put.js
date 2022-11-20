import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { GetByIdModel, Put } from "../../BaseService";
import { GetInput } from "../../componentsProps";


export default function UpdateDiners() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;


  const [diner, setDiner] = useState([]);
  const [response, setResponse] = useState({});


  const baseURL = BASE_URL + "diners";
  const {id} = useParams ();
  useEffect(() => {
    GetByIdModel(baseURL, id, setDiner)
  }, []);

  const navigate = useNavigate()

  const handleChange = (e) => {
      setDiner({
        ...diner, [e.target.name]:e.target.value
      })
  }

  const handleSubmit = () => {
    if (diner.name.length === 0 || diner.size.length === 0){
      return alert("There are empty fields")
    }
    Put(baseURL, id, diner, setResponse)
    navigate('/diners');
  };

  
  
  return (
    <div>
      <div > Update Diner </div>
      name
      <GetInput value={diner.name} type={"text"} onChange={handleChange} name={"name"}  />
      size of the group
      <GetInput value={diner.size} onChange={handleChange} type={"number"} name={"size"}  />

      <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Update Data</button>
      <Button href='/diners'>Back</Button>{' '}

    </div>
  );
}
