define(function(require,exports,module) {
	exports.init = function() {
		$.channel.register("ready" , function(event , data) {
			alert(data);
		});
	};
});