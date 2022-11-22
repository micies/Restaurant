import React from "react";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import 'reactjs-popup/dist/index.css';
import "../../table.css";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetByIdModel } from '../../BaseService'
import { GetInput } from "../../componentsProps";





export default function GetIdTables() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [tables, setTables] = useState([]);
  const BaseUrl = BASE_URL + "tables"
  const { id } = useParams();


  useEffect(() => {
    GetByIdModel(BaseUrl, id, setTables)
  }, []);

  return (
    <div>
      <h1>Show tables</h1>
      table name:
      <GetInput value={tables.id} disabled={true} />
      capacity:
      <GetInput value={tables.capacity} disabled={true} />
      status:
      <GetInput value={tables.status} disabled={true} />
      <Button href='/tables' >Back</Button> {' '}

    </div>
  )
}



