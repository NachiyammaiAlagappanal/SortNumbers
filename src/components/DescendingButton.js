import NumberManager from '../services/NumberManager.js';
import { React } from 'react';

const DescendingButton = (context) => {
	const { actions } = context;
	const Button = 	() =>
		<button onClick={ () =>	actions.descending() }>Descending</button>;

	return NumberManager.numbersLength(context)
		? Button()
		: null;
};

export default DescendingButton;
