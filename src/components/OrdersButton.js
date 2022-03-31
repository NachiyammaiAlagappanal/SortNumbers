import NumberManager from '../services/NumberManager.js';
import { React } from 'react';

const OrdersButton = (context) => {
	const { actions, data } = context;
	const Button = () =>
		<button
			key={ data.orders }
			onClick={ () => actions.makeIntoOrder(data.order) }
		>
			{ data.order }</button>;

	return (
		NumberManager.numbersLength(context)
			? Button()
			: null
	);
};

const orderBar = (context) => context.config.orders.map((order) =>
	OrdersButton({ ...context, data: { order }}));

export default orderBar;
