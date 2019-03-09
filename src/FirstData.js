import React from "react"
import ShowData from "./ShowData"


class FirstData extends React.Component{

  constructor(){
    super()
    this.state={
      posts:[],
      loading:false
    }
  }
  componentDidMount(){
    this.setState({loading: true})
    fetch('https://swapi.co/api/').then(results => {
            return results.json()
        }).then(data => {
          this.setState({
            posts:data,
            loading:false
            })  
        })
  }

  render(){
    const test = this.state.loading ? "loading..." : Object.keys(this.state.posts).map((key1) => (  
        <ShowData key={key1} keys={key1} details={this.state.posts[key1]} /> ))
    return(
      <div className="post-list">
        {test}
      </div>
      )
  }
}

export default FirstData