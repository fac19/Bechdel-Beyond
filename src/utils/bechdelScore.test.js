import calculateBechdel from './bechdelScore';

test('Check bechdelScore tests are running', () => {
	expect(true).toBeTruthy();
});

test('calculateBechdel to return true', () => {
	const reviews = [
		{
			user_id: '5',
			film_id: '1',
			bechdel_1: true,
			bechdel_2: true,
			bechdel_3: true,
			beyond: '5',
			comment: 'I looved it!',
		},
		{
			user_id: '1',
			film_id: '1',
			bechdel_1: false,
			bechdel_2: false,
			bechdel_3: false,
			beyond: '3',
			comment: 'I loved it!',
		},
		{
			user_id: '3',
			film_id: '1',
			bechdel_1: true,
			bechdel_2: true,
			bechdel_3: true,
			beyond: '5',
			comment: 'I loooved it!',
		},
	];

	expect(calculateBechdel(reviews)).toBe('It passes the test!');
});

test('calculateBechdel to return false', () => {
	const reviews = [
		{
			user_id: '1',
			film_id: '1',
			bechdel_1: false,
			bechdel_2: false,
			bechdel_3: false,
			beyond: '3',
			comment: 'I loved it!',
		},
		{
			user_id: '5',
			film_id: '1',
			bechdel_1: true,
			bechdel_2: true,
			bechdel_3: false,
			beyond: '5',
			comment: 'I looved it!',
		},
		{
			user_id: '3',
			film_id: '1',
			bechdel_1: false,
			bechdel_2: false,
			bechdel_3: true,
			beyond: '5',
			comment: 'I loooved it!',
		},
	];
	expect(calculateBechdel(reviews)).toBe('It does not pass...');
});
