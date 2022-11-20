import React, {useState} from "react";
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { Post} from "../../BaseService";
import { GetInput } from "../../componentsProps";


export default function CreateDiners() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;


  const [diner, setDiner] = useState([]);
  const [response, setResponse] = useState({});


  const baseURL = BASE_URL + "diners";


  const navigate = useNavigate()

  const handleChange = (e) => {
      setDiner({
        ...diner, [e.target.name]:e.target.value
      })
  }

  const handleSubmit = () => {
    if (diner.name.length == 0 || diner.size.length == 0){
      return alert("There are empty fields")
    }
    Post(baseURL, diner, setResponse)
    navigate('/diners');
  };

  if (response.errorMessage){
    return alert(response.errorMessage)
  }
  
  return (
    <div>
      <div > Create Diner </div>
      name
      <GetInput type={"text"} onChange={handleChange} name={"name"}  />
      size of the group
      <GetInput type={"number"} onChange={handleChange} name={"size"}  />

      <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Create Diner</button>
      <Button href='/diners'>Back</Button>{' '}

    </div>
  );
}

