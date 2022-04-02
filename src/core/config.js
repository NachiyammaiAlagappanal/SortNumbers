const Millisecond = 1000;
const seconds = 2;
const config = {
	Max: 9,
	Min: 1,
	countLength: 10,
	TickerDelay: Millisecond * seconds,
	idLength: 4,
	orders: [
		{ label: 'Ascending', key: 'ascending' },
		{ label: 'Descending', key: 'descending' },
		{ label: 'Shuffle', key: 'shuffle' },
	],
};

export default config;
