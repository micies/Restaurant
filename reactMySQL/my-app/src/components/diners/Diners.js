
import React, { useState, useEffect } from "react";
import { BsPencil, BsSearch, BsBasket } from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";
import { Get, Delete } from "../../BaseService";
import { Button } from 'react-bootstrap';
import { Modal1 } from "../../componentsProps";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DinersTable() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const BaseUrlDiners = BASE_URL + "diners"
  const BaseUrlSit = BASE_URL + "diners/sitbyperiority"

  const [allDiners, setAllDiners] = useState([]);
  const [massege, setMassege] = useState([]);
  const [response, setResponse] = useState({});


  const notify = () => { toast.success('הפעולה בוצעה בהצלחה') };

    useEffect(() => {
      Get(setAllDiners, BaseUrlDiners)
    }, []);

  const deleteUserDiners = (id) => {
    Delete(id, BaseUrlDiners, setResponse)
    setAllDiners((current) =>
      current.filter((allDiners) => allDiners.id !== id)
    );
    toast.success(`${id}  deleted`);


  };

  const sitUser = () => {
    Get(setMassege, BaseUrlSit)
    notify()
    return (massege)
  };


  if (allDiners.errorMessage) {
    return <div>{allDiners.errorMessage}</div>
  }

  return (
    <div className="table-wrapper">
      <div>
        <a href="diners/post" rel="referrer">
          <Button><GrFormEdit /> הכנסת קבוצה חדשה</Button>
        </a>
      </div>
      <Button onClick={sitUser}  >הושבת סועדים על יד השולחן</Button>
      <ToastContainer />
      <table className="fl-table">
        <thead>
          <tr>
            <th>שם</th>
            <th>גודל קבוצה</th>
            <th>מצב</th>
            <th>מספר קבוצה</th>
            <th>שולחן</th>
            <th>מחיקה</th>
            <th>עדכון</th>
            <th>Show</th>
            <th>הזמנות</th>
          </tr>
        </thead>
        <tbody>
          {allDiners.map((states, i) =>
            <tr key={i}>
              <td>{states.name}</td>
              <td>{states.size}</td>
              <td>{states.queue}</td>
              <td>{states.id}</td>
              <td>{states.table1}</td>

              <td>
                <Modal1 confirmFunc={() => deleteUserDiners(states.id)} text={`${states.id} ? האם אתה בטוח שאתה מעוניין למחוק את`} />
              </td>
              <td><Link to={`put/${states.id}`}><BsPencil /></Link></td>
              <td><Link to={`${states.id}`}><BsSearch /></Link></td>
              <td><Button disabled={states.queue === "tobesited"} href={`diners/reservations/${states.id}`}><BsBasket />רכישה</Button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}





