import { React } from 'react';

const Number = (context) => {
	const { data: { number }} = context;
	const { id, Num } = number;

	return (
		<div key={ id }>{ Num }</div>
	);
};

export default Number;
