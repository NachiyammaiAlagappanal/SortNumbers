import { rndString, rndBetween } from '@laufire/utils/random';
import { shuffle } from '@laufire/utils/collection';

const NumberManager = {

	orders: {
		ascending: (a, b) => a.num - b.num,
		descending: (a, b) => b.num - a.num,
	},

	numbersLength: (context) => {
		const { state, config } = context;

		return state.numbers.length === config.countLength;
	},

	getRandomNumbers: (context) => {
		const { config } = context;
		const { Max, Min } = config;

		return {
			id: rndString(config.idLength),
			num: rndBetween(Min, Max),
		};
	},

	addNumber: (context) => {
		const { config, state: { numbers }, data } = context;

		return numbers.length < config.countLength
			? numbers.concat(data)
			: numbers;
	},

	makeIntoOrder: ({ state: { numbers, order }}) =>
		(order === 'Shuffle'
			? shuffle(numbers)
			:	numbers.slice().sort(NumberManager.orders[order])),
};

export default NumberManager;
