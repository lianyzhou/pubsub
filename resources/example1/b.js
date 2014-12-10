define(function(require,exports,module) {
	exports.init = function() {
		setTimeout(function() {
			$.pubsub.publish(module.exports , 'ready' , 'hello,world');
		} , 3000);	
	};
});