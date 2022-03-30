import { rndString, rndBetween } from '@laufire/utils/random';

const getRandomNumbers = (context) => {
	const { config } = context;
	const { Max, Min } = config;

	return {
		id: rndString(config.idLength),
		Num: rndBetween(Min, Max),
	};
};

const GenerateNumbers = {

	getAtInterval: (context) => {
		const { config, actions } = context;

		return (
			setInterval(() =>
				actions.addNumbers([getRandomNumbers(context)])
			, config.TickerDelay)
		);
	},
};

export default GenerateNumbers;
