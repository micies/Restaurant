import React, {Component} from "react";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class GetByIdTablesClass extends React.Component {    
    id  = window.location.href.split('/').pop()

    constructor(props) {
        super(props);
        this.state ={}
        
  
      this.loadUser = this.loadUser.bind(this);

    }
    componentDidMount() {
        this.loadUser();
    }
    loadUser() {
    ApiService.GetById(this.id, this.setState)
        .then(response => response.json())
        .then((json) => {
                    this.setState({
                capacity: json[0].capacity,
                status: json[0].status,
                tableName:json[0].id
                })
        
            })};
    render() {


      return (

        <div>
        <form >
      <div > הצגה: </div>
      <div className="form-group">
          <label>
            שם:
            <input type="text" name="id" className="form-control"  value = {this.state.id} disabled/>
            </label>
            </div>
      <div className="form-group">
          <label>
            תכולה:
            <input type="text" name="capacity" className="form-control"  value = {this.state.capacity} disabled/>
            </label>
            </div>
            <div className="form-group">
            <label>
            מצב:
            <input type="text" name="status" className="form-control"  value = {this.state.status} disabled/>
          </label>
          </div>
          <div>
          </div>
        </form>
      <Button href='/dinersClass'>Back</Button>{' '}
      </div>
      );
    }
  }



