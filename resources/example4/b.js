define(function(require,exports,module) {
	exports.init = function() {
		setTimeout(function() {
			$.channel.fire("ready" , 'hello,world');
		} , 3000);
	};
});