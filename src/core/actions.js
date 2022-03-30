import NumberManager from '../services/NumberManager.js';

const addNumbers = (context) => ({
	numbers: NumberManager.AddNumbers(context),
});
const ascending = (context) => ({
	numbers: NumberManager.makeAscending(context),
});
const descending = (context) => ({
	numbers: NumberManager.makeDescending(context),
});

const actions = {
	addNumbers,
	ascending,
	descending,
};

export default actions;
