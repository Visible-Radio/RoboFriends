import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';


// STATE >> props
// props are things that come out of a state

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		console.log(this.onSearchChange);
		console.log(event.target.value);	
	}

	render () {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ? 
			<h1>Loading</h1> :
		  (
				<div className='tc'>
					<h1 className="f">RoboFriends</h1>
					{/*SearchBox gets passed a property storing the FUNCTION onSearchChange
						This updates the state, storing the contents of the searchfield in the 
						state object.  A filtered array is created, filtered according to the 
						state of the searcfield.  This array is passed as a property to CardList.
						CardList iterates over the filtered array, passing values from it to Card.
					*/}
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>	
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}	
}

export default App;