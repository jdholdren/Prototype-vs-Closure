(function(global, cMem) {
	// Set up objects to collect memory
	function ClosureMemory() {};
	global.closureMemory = {};
	closureMemory.constructor = ClosureMemory;

	function PrototypeMemory() {};
	global.prototypeMemory = {};
	prototypeMemory.constructor = PrototypeMemory;

	// Closure test
	var closureTest = new Test("Creating objects with closures for methods", function(iteration) {
		var m = new closeModel({
			name: "Amazon Box",
			orderId: 15,
			owner: "James Holdren",
		});

		// Push the model into its memory container
		closureMemory[iteration] = m;
	}, 1000000);

	// Prototypes test
	var protoTest = new Test("Creating objects using prototype methods", function(iteration) {
		var m = new protoModel({
			name: "Amazon Box",
			orderId: 15,
			owner: "James Holdren",
		});

		// Push model into its memory container
		prototypeMemory[iteration] = m;
	}, 1000000);

	// Calculate the ratio between tests
	var ratio = protoTest.ops / closureTest.ops;

	console.log("Using prototypes is " + ratio.toFixed(2) + " times " + ((ratio > 1) ? "faster" : "slower") + " than using closures");
}(window || this));