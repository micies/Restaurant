import React, {Component} from "react";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class PutMenuClass extends React.Component {    
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
                name: json[0].name,
                category: json[0].category,
                price: json[0].price
                })
        
            })

    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {

        event.preventDefault();
    let user = {name: this.state.name, category: this.state.category, price:this.state.price};
    console.log(user)

    ApiService.Put(this.id,user)
    .then(res => {
        this.setState({message : 'User added successfully.'});
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
            <input type="text" name="name" className="form-control"  value = {this.state.name} onChange = {this.handleChange}/>
            </label>
            </div>
            <div className="form-group">
            <label>
            category
            <input type="text" name="size" className="form-control"  value = {this.state.category} onChange = {this.handleChange}/>
          </label>
          </div>
          <div className="form-group">
            <label>
            price
            <input type="text" name="size" className="form-control"  value = {this.state.price} onChange = {this.handleChange}/>
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
