/* eslint-disable no-magic-numbers */
import * as random from '@laufire/utils/random';
import NumberManager from './NumberManager.js';

describe('NumberManager', () => {
	const { numbersLength, getRandomNumbers,
		addNumber, makeIntoOrder, orders } = NumberManager;

	describe('orders', () => {
		test('Ascending', () => {
			const a = { num: 5 };
			const b = { num: 3 };
			const result = orders.ascending(a, b);

			expect(result).toEqual(2);
		});
		test('Descending', () => {
			const a = { num: 5 };
			const b = { num: 3 };
			const result = orders.descending(a, b);

			expect(result).toEqual(-2);
		});
	});

	describe('numbersLength', () => {
		test('FalseCase', () => {
			const context = {
				state: { numbers: [0, 1, 0] },
				config: { countLength: 2 },
			};
			const result = numbersLength(context);

			expect(result).toEqual(false);
		});

		test('TrueCase', () => {
			const context = {
				state: { numbers: [0, 1, 0] },
				config: { countLength: 3 },
			};
			const result = numbersLength(context);

			expect(result).toEqual(true);
		});
	});

	test('geNumbersRandomly', () => {
		const context = {
			config: { idLength: 4, Max: 9, Min: 0 },
		};
		const randomString = Symbol('string');
		const randomNumber = Symbol('Number');

		jest.spyOn(random, 'rndString').mockReturnValue(randomString);
		jest.spyOn(random, 'rndBetween').mockReturnValue(randomNumber);

		const result = getRandomNumbers(context);

		const expected = 	{
			id: randomString,
			num: randomNumber,
		};

		expect(result).toEqual(expected);
		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);
		expect(random.rndBetween).toHaveBeenCalledWith(context.config.Min,
			context.config.Max);
	});

	describe('addNumber', () => {
		test('AddNumbersUptoGivenLength', () => {
			const context = {
				state: { numbers: [1, 0, 1] },
				config: { countLength: 4 },
				data: 1,
			};
			const result = addNumber(context);

			expect(result).toMatchObject([1, 0, 1, 1]);
		});

		test('NotAddingNumbersIfLengthExceeds', () => {
			const context = {
				state: { numbers: [1, 0, 1] },
				config: { countLength: 3 },
				data: 1,
			};
			const result = addNumber(context);

			expect(result).toEqual([1, 0, 1]);
		});
	});

	describe('OrderingTheNumbers', () => {
		test.skip('OrderingByAscending', () => {
			const context = {
				state: { numbers: [1, 0, 3, 2],
					order: 'ascending' },
			};
			const result = makeIntoOrder(context);

			expect(result).toEqual([0, 1, 2, 3]);
		});

		test.skip('OrderingByDescending', () => {
			const context = {
				state: { numbers: [1, 0, 3],
					order: 'descending' },
			};
			const result = makeIntoOrder(context);

			expect(result).toEqual([3, 1, 0]);
		});

		test('OrderingByShuffle', () => {
			const context = {
				state: { numbers: [1, 0, 1, 0], order: 'Shuffle' },
			};
			const result = makeIntoOrder(context);

			expect(result).not.toEqual(context.state.numbers);
		});
	});
});
