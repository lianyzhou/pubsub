;(function($) {

  var slice = Array.prototype.slice;
  
  var expando = "_expando_" + new Date().getTime() + Math.floor(Math.random() * 10000);
  
  //全局的pubsub就是一个对象
  $.pubsub = {};
  //订阅的方法
  $.pubsub.subscribe = function(obj) {
  	var $jq = $(obj);
  	var args = slice.call(arguments , 1);
  	$jq.on.apply($jq , args);
  };
  //发布的方法
  $.pubsub.publish = function(obj , evtName) {
  	var $jq = $(obj);
  	var args = [evtName];
  	args.push(slice.call(arguments , 2));
  	$jq.trigger.apply($jq , args);
  };
  //取消订阅的方法
  $.pubsub.unsubscribe = function(obj) {
  	var $jq = $(obj);
  	var args = slice.call(arguments , 1);
  	$jq.off.apply($jq , args);
  };
  //销毁具体的pubsub
  $.pubsub.destroy = function(obj) {
  	var $jq = $(obj);
  	$jq.off();
  };
  //定义存在哪些自定义事件(辅助开发使用)
  $.pubsub.define = function(obj , list) {
  	if(!$.isArray(list) || !list.length) {
  		throw 'the second parameter of $.pubsub.define(obj , list) must be an array';
  	}
  	if(!obj) {
  		throw 'the first parameter of $.pubsub.define(obj , list) can not be null';
  	}
  	for(var i = 0 , len = list.length ; i < len ; i++) {
  		if(!list[i].eventName || !list[i].description) {
  			throw 'the second parameter of $.pubsub.define(obj , list) must like [{eventName : "datasuccess" , description : "获取数据成功之后触发"}]';
  		}
  	}
  	obj[expando] = list;
  };
  
  //获取定义的自定义事件(辅助开发使用)
  $.pubsub.getDefine = function(obj) {
  	if(obj && obj[expando]) {
  		console.table(obj[expando]);
  		return obj[expando];
  	}
  	return [];
  };
  //$.channel污染的对象
  var channelObj = $({});
  var globalChannelDefine = [];
  //全局的channel就是一个对象
  $.channel = {};
  //channel的注册
  $.channel.register = function() {
  	channelObj.on.apply(channelObj , arguments);
  };
  //channel的发布
  $.channel.fire = function(evtName) {
  	var args = [evtName];
  	args.push(slice.call(arguments , 1));
  	channelObj.trigger.apply(channelObj , args);
  };
  
  $.channel.define = function(list) {
  	if(!$.isArray(list) || !list.length) {
  		throw 'the first parameter of $.channel.define(list) must be an array';
  	}
  	for(var i = 0 , len = list.length ; i < len ; i++) {
  		if(!list[i].eventName || !list[i].description) {
  			throw 'the first parameter of $.channel.define(list) must like [{eventName : "datasuccess" , description : "获取数据成功之后触发"}]';
  		}
  	}
  	globalChannelDefine = globalChannelDefine.concat(list);
  };
  $.channel.getDefine = function() {
  	if(globalChannelDefine.length) {
  		console.table(globalChannelDefine)
  	}
  	return globalChannelDefine;
  };
}(jQuery));
