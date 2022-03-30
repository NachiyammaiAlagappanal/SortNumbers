import NumberManager from './NumberManager.js';

const GenerateNumbers = {

	getAtInterval: (context) => {
		const { config, actions } = context;

		return (
			setInterval(() =>
				actions.addNumbers([NumberManager.getRandomNumbers(context)])
			, config.TickerDelay)
		);
	},
};

export default GenerateNumbers;
