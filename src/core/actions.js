import NumberManager from '../services/NumberManager.js';

const addNumbers = (context) => ({
	numbers: NumberManager.AddNumbers(context),
});

const actions = {
	addNumbers,
};

export default actions;
