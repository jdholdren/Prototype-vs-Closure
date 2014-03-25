(function(global) {
	/**
	* The prototypal implementation of the model
	*/
	function protoModel(data) {
		this.name = data.name;
		this.owner = data.owner;
		this.orderId = data.orderId;
	}

	protoModel.prototype._getLength = function() {
		var size = 0, key;

	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    
	    return size;
	};

	protoModel.prototype._getName = function() {
		return this.name;
	};

	protoModel.prototype.info = function() {
		return (this._getName() + " has " + this._getLength() + " properties on it");
	};

	// Export
	global.protoModel = protoModel;
}(window || this));