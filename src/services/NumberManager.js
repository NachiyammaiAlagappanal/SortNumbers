const NumberManager = {

	AddNumbers: (context) => {
		const { config, state: { numbers }, data } = context;

		return numbers.length <= config.countLength
			? numbers.concat(data)
			: numbers;
	},

};

export default NumberManager;
