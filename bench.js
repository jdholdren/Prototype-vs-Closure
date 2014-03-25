(function(global) {

	/**
	* Testing Model
	* @param {string} [name] Descriptive name of the test
	* @param {function} [func] The function containing one test instance
	* @param {int} [iterations] The number of times to perform each test
	* @return void
	*/
	function Test(name, func, iterations) {
		// Set object properties
		this.name = name;
		this.func = func;
		this.iterations = iterations;

		// The running count of time in milliseconds
		var total = 0,
		// The start and end times
		start, end,
		// Date instance
		date = new Date();

		// Perform the test
		for (var i = 0; i < iterations; i++) {
			// Take the start time
			start = performance.now();

			// Execute the function
			func(i);

			// Take the ending timestamp
			end = performance.now();

			// Add the difference in stamps to the total
			total += end - start;
		}

		// Calculate the Ops/sec
		this.ops = iterations / total * 1000;

		this.output();
	};

	/**
	* Outputs the Test details
	* @return void
	*/
	Test.prototype.output = function() {
		console.log(this.name + ", " + this.iterations + " iterations: " + this.ops + " Operations per Second");
	};

	// Export module
	global.Test = global.Test || Test;
}(window || this));