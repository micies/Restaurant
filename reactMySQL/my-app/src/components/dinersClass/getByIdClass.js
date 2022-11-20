import React, {Component} from "react";
import { Button } from "react-bootstrap"
import ApiService from "./BaseServiceClass.js"



 
export class GetByIdDinersClass extends Component {    
    id  = window.location.href.split('/').pop()

    constructor(props) {
        super(props);
        this.state ={}
    }
    componentDidMount() {
        this.loadUser();
    }
    loadUser = () => {
    ApiService.GetById(this.id, this.setState)
        .then(response => response.json())
        .then((json) => {
                    this.setState({json}
                )
            })};
    render() {
      return (
        <div>
        <form >
      <div > הצגה: </div>
      <div className="form-group">
          <label>
            שם:
            <input type="text" name="name" className="form-control"  value = {this.state.name} disabled/>
            </label>
            </div>
            <div className="form-group">
            <label>
            גודל:
            <input type="text" name="size" className="form-control"  value = {this.state.size} disabled/>
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



