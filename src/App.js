/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import DisplayNumber from './components/DisplayNumber';
import GenerateNumbers from './services/GenerateNumbers';
import OrderBar from './components/OrderBar.js';

const App = (context) => {
	const { state } = context;

	useEffect(() => GenerateNumbers.getAtInterval(context), []);
	console.log(state);

	return (
		<div className="App" role="App">
			<div>{ DisplayNumber(context) }</div>
			<div>{ OrderBar(context) }	</div>

		</div>
	);
};

export default App;
