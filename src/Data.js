import React from "react"
import ShowData from "./ShowData"


class ProvideData extends React.Component{
    render(){
        const data = Object.keys(this.props.details).map((item) => 
                <ShowData key={item} keys={item} details={this.props.details[item]} /> )
        return(
            <div className="post-preitem">
            {data}
            </div>
            )
    }
}


class FetchData extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
		   posts: [],
		   loading: false,
		   prevPage:"",
		   nextPage:"",
		   filterKey:props.filterKey,
		   pageNo:"",
	   }
	   console.log("constr",this.state.filterKey)
		this.getData = this.getData.bind(this)
		this.handleNext=this.handleNext.bind(this)
		this.handlePrev=this.handlePrev.bind(this)
	}

	componentDidMount() {
		console.log("mount")
		this.getData(this.state.filterKey)
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.filterKey !== this.state.filterKey){
			console.log("recive",this.state.filterKey,nextProps.filterKey)
			this.getData(nextProps.filterKey)
		}
	}

	getData(props){
		console.log("fetch")
		this.setState({loading: true})
		fetch('https://swapi.co/api/'+props).then(results => {
			return results.json()
		}).then(data => {
			this.setState({
				loading: false,
				posts:data.results,
				filterKey:props,
				prevPage:data.previous,
				nextPage:data.next,
			})
			}

			)
	}

	handleNext(){
		let next = this.state.nextPage.replace('https://swapi.co/api/','')
		this.getData(next)
		console.log(next)
	}
	handlePrev(){
		let prev = this.state.prevPage.replace('https://swapi.co/api/','')
		this.getData(prev)
		console.log(prev)
	}


	render(){
		console.log("data",this.state.filterKey)
		const test = this.state.loading ? "loading..." : Object.keys(this.state.posts).map((key1) => (  
				<ProvideData key={key1} keys={key1} details={this.state.posts[key1]} /> ))
		console.log("after test")
		return (
			<div className="post-list">
				{test}
				<div className="button-center">
				{this.state.prevPage ? <button onClick={this.handlePrev}>prev</button> : <button disabled>prev</button>}
				{this.state.nextPage ? <button onClick={this.handleNext}>next</button> : <button disabled>next</button>}
				</div>
			</div>
		);
	}
}

export default FetchData