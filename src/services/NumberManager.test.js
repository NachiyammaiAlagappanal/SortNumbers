/* eslint-disable no-magic-numbers */
import { map, range, sort } from '@laufire/utils/collection';
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
		const numbers = map(range(1, random.rndBetween(5, 8)), () => ({
			id: random.rndString(),
			num: random.rndBetween(1, 10),
		}));

		test('OrderingByAscending', () => {
			const context = {
				state: { numbers: [
					{ num: 5 }, { num: 2 }, { num: 0 },
				],
				order: 'ascending' },
			};
			const result = makeIntoOrder(context);

			expect(result).toEqual([{ num: 0 }, { num: 2 }, { num: 5 }]);
		});

		test('OrderingByDescending', () => {
			const context = {
				state: { numbers: [{ num: 5 }, { num: 0 }, { num: 9 }],
					order: 'descending' },
			};
			const result = makeIntoOrder(context);

			expect(result).toEqual([
				{ num: 9 }, { num: 5 }, { num: 0 },
			]);
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
