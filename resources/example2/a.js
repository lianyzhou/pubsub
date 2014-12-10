define(function(require,exports,module) {
	var b = require("./b");
	exports.init = function() {
		var bObj = b();
		$.pubsub.subscribe(bObj , 'ready' , function(event , data) {
			alert(data);
		});
	};
});