import { React } from 'react';
import NumberManager from '../services/NumberManager';
import Number from './Number';

const AscendingButton = (context) => {
	const { actions } = context;
	const Button = 	() =>
		<button onClick={ () =>	actions.ascending() }>Ascending</button>;

	return NumberManager.noNumbers(context)
		? Button()
		: null;
};

const DescendingButton = (context) => {
	const { actions } = context;
	const Button = 	() =>
		<button onClick={ () =>	actions.ascending() }>Descending</button>;

	return NumberManager.noNumbers(context)
		? Button()
		: null;
};

const DisplayNumbers = (context) => {
	const { state: { numbers }} = context;

	return (
		<div>
			<div>{ numbers.map((number) =>
				Number({ ...context, data: { number }})) }</div>
			<div>{ AscendingButton(context) }{ DescendingButton(context) }</div>
		</div>
	);
};

export default DisplayNumbers;
