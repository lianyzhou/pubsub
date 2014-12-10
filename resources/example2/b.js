define(function(require,exports,module) {
	module.exports = function() {
		var that = {};
		function init() {
			setTimeout(function() {
				$.pubsub.publish(that, 'ready' , 'hello,world');
			} , 3000);
		}
		init();
		return that;
	};
});