import { React } from 'react';
import Number from './Number';
import AscendingButton from './AscendingButton';
import DescendingButton from './DescendingButton';

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
