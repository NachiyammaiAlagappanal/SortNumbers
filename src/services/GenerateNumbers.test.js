import GenerateNumbers from './GenerateNumbers';
import NumberManager from './NumberManager';

test('to get the random numbers with specific time intervals', () => {
	const context = {
		actions: {
			fn: Symbol('fn'),
			addNumbers: jest.fn(),
		},
		config: {
			TickerDelay: 1,
		},
	};
	const Numbers = {
		id: Symbol('id'),
		num: Symbol('num'),
	};
	const setInterval = (fn) => fn();

	jest.spyOn(NumberManager, 'getRandomNumbers').mockReturnValue(Numbers);
	jest.spyOn(global, 'setInterval').mockImplementation(setInterval);

	GenerateNumbers.getAtInterval(context);
	expect(NumberManager.getRandomNumbers).toHaveBeenCalledWith(context);
	expect(context.actions.addNumbers)
		.toHaveBeenCalledWith(Numbers);
	expect(global.setInterval)
		.toHaveBeenCalledWith(expect.any(Function), context.config.TickerDelay);
});
