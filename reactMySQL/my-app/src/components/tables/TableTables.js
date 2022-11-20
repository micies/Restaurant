import { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { Button, Modal } from 'react-bootstrap';
import 'reactjs-popup/dist/index.css';
import React from 'react';
import { Link } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import { Get, Delete } from '../../BaseService';
import { Modal1 } from "../../componentsProps";



export default function TableTables() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [tables, setTables] = useState([]);
  const [response, setResponse] = useState({});

  const BaseUrl = BASE_URL + "tables"

  useEffect(() => {
    Get(setTables, BaseUrl)
  }, []);
  console.log(tables)


  const deleteUserTables = (id) => {
    Delete(id, BaseUrl, setResponse)
    setTables((current) =>
      current.filter((tables) => tables.id !== id)
    );
  }

  if (tables.errorMessage) {
    return <div>{tables.errorMessage}</div>
  }
  return (
    <div className="table-wrapper">
      <div>
        <a href="tables/post" rel="referrer">
          <Button><GrFormEdit /> יצירת שולחן חדש</Button>
        </a>
      </div>
      {!!tables.length && <table className="fl-table">
        <thead>
          <tr>
            <th>table name</th>
            <th>capacity</th>
            <th>status</th>
            <th>Delete</th>
            <th>Show</th>
            <th>put</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((states, i) =>
            <tr key={i}>
              <td>{states.id}</td>
              <td>{states.capacity}</td>
              <td>{states.status}</td>
              <td>
                <Modal1 confirmFunc={() => deleteUserTables(states.id)} text={"? האם אתה בטוח שאתה מעוניין למחוק את"} />
              </td>
              <td><Link className="btn btn-info" to={`${states.id}`}>Show</Link></td>
              <td><Link to={`put/${states.id}`}><BsPencil /></Link></td>
            </tr>)}
        </tbody>
      </table>}
    </div>
  )
}






