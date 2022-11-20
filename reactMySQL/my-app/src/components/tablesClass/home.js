
import React, { Component } from "react";
import { BsPencil, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"




export class HomeTablesClass extends Component {

  BASE_URL = process.env.REACT_APP_BASE_URL;

  BaseUrlSit = this.BASE_URL + "diners/sitbyperiority"


  constructor(props) {
    super(props);
    this.state = {
      users: []

    }


    this.loadUser = this.loadUser.bind(this);

  }
  componentDidMount() {
    this.loadUser();
    console.log(this.state)
  };

  loadUser() {
    ApiService.Get(this.setState)
      .then(response => response.json())
      .then((json) => {
        this.setState({ users: json })

      })
  }

  render() {


    return (

      <div className="table-wrapper">

        {<table className="fl-table">
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
            {this.state.users.map((states, i) =>
              <tr key={i}>
                <td>{states.id}</td>
                <td>{states.capacity}</td>
                <td>{states.status}</td>

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



