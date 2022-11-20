import React, {Component} from "react";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class PutTablesClass extends React.Component {    
    id  = window.location.href.split('/').pop()

    constructor(props) {
        super(props);
        this.state ={}
        
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
                id: json[0].id,
                capacity: json[0].capacity,
                status: json[0].status
                })
        
            })

    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {

        event.preventDefault();
    let user = {id: this.state.id, capacity: this.state.capacity, status: this.state.status};
    console.log(user)

    ApiService.Put(this.id,user)
    .then(res => {
        this.setState({message : 'User added successfully.'});
        // this.props.history.push('/diners');
    });
    }
  
    render() {


      return (

        <div>
        <form onSubmit={this.handleSubmit}>
      <div > PUT </div>
      <div className="form-group">
          <label>
            Name:
            <input type="text" name="id" className="form-control"  value = {this.state.id} onChange = {this.handleChange}/>
            </label>
            </div>
      <div className="form-group">
          <label>
            Name:
            <input type="text" name="capacity" className="form-control"  value = {this.state.capacity} onChange = {this.handleChange}/>
            </label>
            </div>
            <div className="form-group">
            <label>
            size
            <input type="text" name="status" className="form-control"  value = {this.state.status} onChange = {this.handleChange}/>
          </label>
          </div>
          <div>
          <input  type="submit" value="Submit" className="button-22" />
          </div>
        </form>
      <Button href='/dinersClass'>Back</Button>{' '}
      </div>
      );
    }
  }
