import NumberManager from '../services/NumberManager.js';
import { React } from 'react';

const AscendingButton = (context) => {
	const { actions } = context;
	const Button = 	() =>
		<button onClick={ () =>	actions.ascending() }>Ascending</button>;

	return NumberManager.numbersLength(context)
		? Button()
		: null;
};

export default AscendingButton;
