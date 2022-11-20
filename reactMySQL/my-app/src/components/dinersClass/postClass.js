import React, {Component} from "react";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class PostDinersClass extends Component {    

    constructor(props) {
        super(props);
        this.state ={}
        
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {

        event.preventDefault();
    let user = {name: this.state.name, size: this.state.size};
    console.log(user)

    ApiService.Post(user)

    console.log(12123)
    }
  
    render() {


      return (

        <div>
        <form onSubmit={this.handleSubmit}>
      <div > Post </div>
      <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" className="form-control"  onChange = {this.handleChange}/>
            </label>
            </div>
            <div className="form-group">
            <label>
            size
            <input type="text" name="size" className="form-control"   onChange = {this.handleChange}/>
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
