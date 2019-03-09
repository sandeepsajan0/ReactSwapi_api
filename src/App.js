import React, { Component } from 'react';
import FetchData from "./Data"
import './App.css';
import FirstData from "./FirstData"

class App extends Component {

  constructor(){
    super()
    this.state = {
      filter:""
    }
    
    this.handleSubmit=this.handleSubmit.bind(this)
  }



  handleSubmit(e){
     e.preventDefault();
    let newFilter = this.refs["filter"].value
    console.log(newFilter)
    this.setState({
      filter : newFilter
    })
  }

  render() {
    const headingStyle={
      textAlign: "center",
      textTransform: "capitalize"
    };
    console.log(this.state.filter)
    return (
            <div>
            <div>
              <div className="filter-item">
              <h2 style={headingStyle}>{this.state.filter}</h2>
              <form onSubmit={this.handleSubmit}>
              <input ref="filter" className="filter" type="text" name="filter"/>
              <input type="submit" value="Search"/>
              </form>
              </div>
              {this.state.filter ? <FetchData filterKey={this.state.filter}/> : <FirstData />}
              
            </div>
            </div>

    );
  }
}

export default App;
