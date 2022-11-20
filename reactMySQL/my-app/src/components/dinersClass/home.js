
import React, {Component} from "react";
import { BsPencil, BsSearch, BsBasket} from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class HomeDinersClass extends Component {   
   BASE_URL = process.env.REACT_APP_BASE_URL;
 
    BaseUrlSit = this.BASE_URL + "diners/sitbyperiority"


    constructor(props) {
        super(props);
        this.state ={
            users: []
        }
  
      this.loadUser = this.loadUser.bind(this);

    }
    componentDidMount() {
        this.loadUser();
        console.log(this.state)};
    
    loadUser() {
    ApiService.Get(this.setState)
        .then(response => response.json())
        .then((json) => {
                    this.setState({users : json})
        
            })}
    sitUser(){
    ApiService.GetSit(this.BaseUrlSit)
    }

    names(){
      const filedNames = [ "שם", "גודל קבוצה", "מצב", "מספר קבוצה", "שולחן", "מחיקה", "עדכון", "show", "הזמנות"]        
      return  filedNames.map(item => <th>{item}</th>)
    }


    render() {
      return (
        <div className="table-wrapper">
        <h1>
                <a href="dinersClass/post" rel="referrer">
                  <Button><GrFormEdit />   הכנסת קבוצה חדשה</Button>
                </a>
              </h1>
              <Button onClick={() => (this.sitUser())}  >הושבת סועדים על יד השולחן</Button>
              {<table className="fl-table">
                <thead>
                  <tr>
                    {this.names()}      
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map(({name, size, queue, id, nameTable}, i) =>
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{size}</td>
                      <td>{queue}</td>
                      <td>{id}</td>
                      <td>{nameTable}</td>
                      <td> <Button onClick={() => (ApiService.Delete(id))} > מחיקה</Button></td>
                      <td><Link state={{ data: [name, size, queue, id, nameTable], index: i }} to={`put/${id}`}><BsPencil /></Link></td>
                      <td><Link to={`${id}`}><BsSearch /></Link></td>
                      <td><Button disabled={queue === "tobesited"} href={`diners/reservations/${id}`}><BsBasket />רכישה</Button></td>
                    </tr>)}
                </tbody>
              </table>}
            </div>
      );
    }
  }



