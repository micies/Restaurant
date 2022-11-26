import React, { useState, useEffect} from "react";
import { BsPencil} from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { Button } from 'react-bootstrap';
import 'reactjs-popup/dist/index.css';
import "../../table.css";
import { Link } from "react-router-dom";
import 'reactjs-popup/dist/index.css';

import {Get, Delete} from '../../BaseService'
import { Modal1 } from "../../componentsProps";



export default function TableMenu() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [tables, setTables] = useState([]);
  const [response, setResponse] = useState({});

  const BaseUrl = BASE_URL + "menu"

  useEffect(() => {
    Get( setTables, BaseUrl)
},[]);

const deleteMenu = (id) => {
  Delete(id, BaseUrl, setResponse)
  setTables((current) =>
      current.filter((tables) => tables.id !== id)
    );    
    }
    if (tables.errorMessage){
      return<div>{tables.errorMessage}</div>
    }

  return (
    <div className="table-wrapper">
        <div>
<a href="menu/post" rel="referrer">
          <Button><GrFormEdit/> יצירת מנה חדשה</Button>
        </a>        
  </div>   

      {!!tables.length && <table className="fl-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>category</th>
            <th>price</th>
            <th>Delete</th>
            <th>Show</th>
            <th>put</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((states, i) =>
            <tr key={i}>
              <td>{states.nameMenu}</td>
              <td>{states.name}</td>
              <td>{states.price}</td>
              <td>
                <Modal1 confirmFunc= {()=>deleteMenu(states.id)} text={"? האם אתה בטוח שאתה מעוניין למחוק את"} />
                </td>
              <td><Link className="btn btn-info" to={`${states.id}`}>Show</Link></td>
              <td><Link  to={`put/${states.id}`}> <BsPencil /></Link></td>
            </tr>)}
        </tbody>
      </table>}
    </div>
  )
}






