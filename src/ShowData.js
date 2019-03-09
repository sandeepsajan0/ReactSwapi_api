import React from "react"

class ShowData extends React.Component{
	

	render(){
		return(
			<div className="post-item">
            	<p> <b>{this.props.keys}:</b> {this.props.details} </p>
            </div>
			)
	}
}

export default ShowData