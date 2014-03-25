(function(global) {
	// Private methods
	function getLength() {
		var size = 0, key;

	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    
	    return size;
	}

	function getName() {
		return this.name;
	}

	function info() {
		return (getName() + " has " + getLength() + " properties on it");
	}

	/**
	* Closure implementation of the model
	*/
	function closeModel(data) {
		this.name = data.name;
		this.orderId = data.orderId;
		this.owner = data.owner;

		this.info = info;
	}

	// Export
	global.closeModel = closeModel;
}(window || this));