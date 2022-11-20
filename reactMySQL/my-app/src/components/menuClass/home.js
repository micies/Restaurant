
import React, {Component} from "react";
import { BsTrashFill, BsPencil, BsSearch, BsBasket, BsFillCreditCard2BackFill} from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class HomeMenuClass extends React.Component {   
  
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
                    this.setState({users:json})
        
            })}




    render() {


      return (

        <div className="table-wrapper">
              {<table className="fl-table">
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
                  {this.state.users.map((states, i) =>
                    <tr key={i}>
                      <td>{states.name}</td>
                       <td>{states.category}</td>
                       <td>{states.price}</td>

                      <td> <Button onClick={() => (ApiService.Delete(states.id))} > מחיקה</Button></td>
             
                      <td><Link state={{ data: states, index: i }} to={`put/${states.id}`}><BsPencil /></Link></td>
        
                      <td><Link to={`${states.id}`}><BsSearch /></Link></td>
        
                    </tr>)}
                </tbody>
              </table>}
            </div>
      );
    }
  }



