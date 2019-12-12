var exec = require('cordova/exec');

var Referer = function() {
	console.log('Referer instanced');
};

Referer.prototype.init = function(onSuccess, onError) {
	var self = this;
	var errorCallback = function(obj) {
		onError(obj);
	};

	var successCallback = function(ref) {
		if (ref) {
			var params = [];
			if (ref.indexOf("&")) {
				ref.split('&').forEach(function(param) {
					var key   = param.split('=')[0];
					var value = param.split('=')[1];
					params[key] = value;
				});
			} else {
				var key = ref.split('=')[0];
				var value = ref.split('=')[1];
				params[key] = value;
			}
			onSuccess(params);
		} else {
			setTimeout(function() {
				self.init(onSuccess, onError);
			}, 500);
		}
	};

	exec(successCallback, errorCallback, 'InstallReferrer');
};

if (typeof module != 'undefined' && module.exports) {
	module.exports = Referer;
}
