export default function calculateBechdel(reviewData) {
	const bechdel1Arr = [];
	const bechdel2Arr = [];
	const bechdel3Arr = [];
	const bigBechdelArr = [];

	reviewData.map((data) => {
		bechdel1Arr.push(data.bechdel_1);
		bechdel2Arr.push(data.bechdel_2);
		bechdel3Arr.push(data.bechdel_3);
		return '';
	});

	function bechdelAverage(arr) {
		let trues = 0;
		let falses = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === true) {
				trues++;
			}
			falses++;
		}
		if (trues >= falses) {
			bigBechdelArr.push(true);
		} else {
			bigBechdelArr.push(false);
		}
	}

	bechdelAverage(bechdel1Arr);
	bechdelAverage(bechdel2Arr);
	bechdelAverage(bechdel3Arr);

	if (bigBechdelArr.includes(false)) {
		return 'It does not pass...';
	} else {
		return 'It passes the test!';
	}
}
