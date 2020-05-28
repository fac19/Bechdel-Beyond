export default function calculateBeyond(reviewData) {
	const usersRatings = [];
	reviewData.map((data) => usersRatings.push(data.beyond));
	return Math.floor(usersRatings.reduce((a, r) => a + r) / reviewData.length);
}
