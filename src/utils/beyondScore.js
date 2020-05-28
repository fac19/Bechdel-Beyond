export default function calculateBeyond(reviewData) {
	const usersRatings = [];

	reviewData.map((data) => {
		return usersRatings.push(data.beyond);
	});

	return usersRatings.reduce((a, r) => a + r) / reviewData.length;
}
