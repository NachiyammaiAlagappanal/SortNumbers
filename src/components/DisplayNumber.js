import { React } from 'react';
import Number from './Number';
import NumberManager from '../services/NumberManager.js';

const DisplayNumbers = (context) => {
	const Orders = NumberManager.makeIntoOrder(context);

	return (
		<div className="Style">{ Orders.map((order) =>
			Number({ ...context, data: { order }})) }
		</div>

	);
};

export default DisplayNumbers;
