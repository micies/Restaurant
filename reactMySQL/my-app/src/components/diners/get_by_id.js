import React from "react";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import {GetByIdModel} from '../../BaseService'
import { GetInput } from "../../componentsProps";




export default function GetIdDiners() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;


  const [diner, setDiner] = useState([]);

  const UrlDiner = BASE_URL + "diners"
  const { id } = useParams();

useEffect(() => {
  GetByIdModel(UrlDiner, id, setDiner)
 
}, []);

  return (
    <div>
        <h3>פרטים</h3>
          שם:
          <GetInput value = {diner.name}  disabled={true}/>
          גודל קבוצה:
          <GetInput value = {diner.size}  disabled={true}/>

      <Button href='/diners' >חזור</Button> {' '}

    </div>
  )
}
