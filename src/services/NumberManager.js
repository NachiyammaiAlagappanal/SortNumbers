import { rndString, rndBetween } from '@laufire/utils/random';

const NumberManager = {

	numbersLength: (context) => {
		const { state, config } = context;

		return state.numbers.length === config.countLength;
	},

	getRandomNumbers: (context) => {
		const { config } = context;
		const { Max, Min } = config;

		return {
			id: rndString(config.idLength),
			Num: rndBetween(Min, Max),
		};
	},

	AddNumbers: (context) => {
		const { config, state: { numbers }, data } = context;

		return numbers.length < config.countLength
			? numbers.concat(data)
			: numbers;
	},

	makeAscending: (context) => {
		const { state } = context;

		return state.numbers.sort((a, b) => a.Num - b.Num);
	},

	makeDescending: (context) => {
		const { state } = context;

		return state.numbers.sort((b, a) => a.Num - b.Num);
	},

};

export default NumberManager;
