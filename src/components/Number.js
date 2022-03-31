import { React } from 'react';

const Number = (context) => {
	const { data: { order }} = context;
	const { id, Num } = order;

	return (
		<div key={ id } className="Number">{ Num }</div>
	);
};

export default Number;
