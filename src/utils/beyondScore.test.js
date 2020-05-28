import calculateBeyond from './beyondScore';

test('Check beyondScore tests are running', () => {
	expect(true).toBeTruthy();
});

test('calculateBeyond to return average rating', () => {
	const reviews = [
		{
			user_id: '5',
			film_id: '1',
			bechdel_1: true,
			bechdel_2: true,
			bechdel_3: true,
			beyond: 2,
			comment: 'I looved it!',
		},
		{
			user_id: '1',
			film_id: '1',
			bechdel_1: false,
			bechdel_2: false,
			bechdel_3: false,
			beyond: 2,
			comment: 'I loved it!',
		},
		{
			user_id: '3',
			film_id: '1',
			bechdel_1: true,
			bechdel_2: true,
			bechdel_3: true,
			beyond: 5,
			comment: 'I loooved it!',
		},
	];

	expect(calculateBeyond(reviews)).toBe(3);
});
