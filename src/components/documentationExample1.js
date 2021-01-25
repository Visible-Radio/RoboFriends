import React, { useState, useEffect } from 'react';

function Example() {
	//Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(()=> {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
	})

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={()=> setCount(count+1)}>
				Click me
			</button>
		</div>
	);
}
export default Example;

/*
	useState returns a pair: the current state value 
	and a function that lets you update it

	Similar to this.setState in a class, except it doesn't
	merge the old and new state together...

	the argument to useState is the initial state

	initial state is used in the first render

	doesn't have to be an object like with setState

	useEffect permits side effects from functional components,
	like manually changing the DOM or fetching data
*/





