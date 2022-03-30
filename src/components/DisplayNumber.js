import { React } from 'react';
import Number from './Number';

const DisplayNumbers = (context) => {
	const { state: { numbers }} = context;

	return (
		<div>{ numbers.map((number) =>
			Number({ ...context, data: { number }})) }</div>
	);
};

export default DisplayNumbers;
