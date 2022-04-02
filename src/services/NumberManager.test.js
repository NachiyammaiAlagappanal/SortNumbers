/* eslint-disable no-magic-numbers */
import NumberManager from './NumberManager.js';

describe('NumberManager', () => {
	const { numbersLength, getRandomNumbers,
		addNumber, makeIntoOrder } = NumberManager;

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
		const result = getRandomNumbers(context);

		expect(result).toEqual({ id: expect.any(String),
			Num: expect.any(Number) });
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
		test('OrderingByAscending', () => {
			const context = {
				state: { numbers: [1, 0, 2],
					order: 'ascending' },
			};
			const result = makeIntoOrder(context);

			expect(result).toEqual([0, 1, 2]);
		});

		test('OrderingByDescending', () => {
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
