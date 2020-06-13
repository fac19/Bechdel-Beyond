// Stub fetch object because cypress doesnt handle
// fetch requests
export const fetchStub = () => {
	const deferred = {};

	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});
	return deferred;
};
