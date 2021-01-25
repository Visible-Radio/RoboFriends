import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Example from '../components/documentationExample1';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

function App() {
	const [ robots, setRobots ] = useState([]);
	const [ searchfield, setSearchfield ] = useState('');

	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users))
			console.log('effect ran');
	}, []) // only run when the state variables in this array change
	// empty array = compondentDidMount, only run the function
	// specified in useEffect when the component is first rendered

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);			
	}	

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
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>	
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
				<Example />
			</div>
		);		
}

export default App;