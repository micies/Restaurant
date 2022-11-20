import React, {Component} from "react";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class GetByIdMenuClass extends React.Component {    
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
                category: json[0].category,
                name: json[0].name,
                price: json[0].price
                })
        
            })};
    render() {


      return (

        <div>
        <form >
      <div > הצגה: </div>
      <div className="form-group">
          <label>
            קטגוריה:
            <input type="text" name="name" className="form-control"  value = {this.state.name} disabled/>
            </label>
            </div>
            <div className="form-group">
            <label>
            שם:
            <input type="text" name="category" className="form-control"  value = {this.state.category} disabled/>
          </label>
          </div>
          <div>
          <div className="form-group">
            <label>
            מחיר:
            <input type="text" name="price" className="form-control"  value = {this.state.price} disabled/>
          </label>
          </div>
          </div>
          
        </form>
      <Button href='/dinersClass'>Back</Button>{' '}
      </div>
      );
    }
  }



