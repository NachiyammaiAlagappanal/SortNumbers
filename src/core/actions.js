import NumberManager from '../services/NumberManager.js';

const addNumbers = (context) => ({
	numbers: NumberManager.addNumber(context),
});
const makeIntoOrder = ({ data }) => ({
	order: data,
});

const actions = {
	addNumbers,
	makeIntoOrder,

};

export default actions;
