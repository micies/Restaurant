import {useState} from 'react'
import { Button, Modal } from "react-bootstrap";
import {BsTrashFill} from "react-icons/bs";



export function GetInput({value, onChange, name, disabled, type, defaultValue}){return(
  <div className="form-group">
          <label>

 
  <input     
    className="form-control"
    value={value}
    onChange={onChange}
    type={type}
    name={name}
    disabled={disabled}
    min={0}
    defaultValue={defaultValue}
  />
  </label>
  </div>
)}

export function Modal1({ confirmFunc, text}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return(
    <>
    <Button
      variant="primary"
      onClick={handleShow}
    >
      Delete <BsTrashFill />
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title> מחיקת קבוצה </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {text}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={()=>{confirmFunc(); handleClose()}}
        >
          מחק
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          יציאה
        </Button>
      </Modal.Footer>
    </Modal>
  </> 

)};


