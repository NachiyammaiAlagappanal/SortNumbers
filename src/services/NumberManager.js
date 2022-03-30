const NumberManager = {

	noNumbers: (context) => {
		const { state, config } = context;

		return state.numbers.length === (config.countLength + 1);
	},

	AddNumbers: (context) => {
		const { config, state: { numbers }, data } = context;

		return numbers.length <= config.countLength
			? numbers.concat(data)
			: numbers;
	},

	makeAscending: (context) => {
		const { state } = context;

		return state.numbers.sort((a, b) => a.Num - b.Num);
	},

	makeDescending: (context) => {
		const { state } = context;

		return state.numbers.sort((b, a) => b.Num - a.Num);
	},

};

export default NumberManager;
