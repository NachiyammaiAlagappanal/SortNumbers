import { React } from 'react';
import Number from './Number';
import NumberManager from '../services/NumberManager.js';

const DisplayNumbers = (context) => {
	const numbers = NumberManager.makeIntoOrder(context);

	return (
		<div className="Style">{ numbers.map((order) =>
			Number({ ...context, data: { order }})) }
		</div>

	);
};

export default DisplayNumbers;
