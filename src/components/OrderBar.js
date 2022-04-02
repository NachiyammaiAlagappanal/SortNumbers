import NumberManager from '../services/NumberManager.js';
import { React } from 'react';

const Button = (context) => {
	const { actions, data } = context;

	return (
		<button
			key={ data.key }
			onClick={ () => actions.makeIntoOrder(data.key) }
		>
			{ data.label }</button>
	);
};

const OrdersButton = (context) => (
	NumberManager.numbersLength(context)
		? Button(context)
		: null
);

const OrderBar = (context) => context.config.orders.map((order) =>
	OrdersButton({ ...context, data: order }));

export default OrderBar;
