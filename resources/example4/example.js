define(function(require,exports,module) {
	var a = require("./a");
	var b = require("./b");
	exports.init = function() {
		a.init();
		b.init();
	};
});