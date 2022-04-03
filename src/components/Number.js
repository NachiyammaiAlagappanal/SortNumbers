import { React } from 'react';

const Number = (context) => {
	const { data: { order }} = context;
	const { id, num } = order;

	return (
		<div key={ id } className="Number">{ num }</div>
	);
};

export default Number;
