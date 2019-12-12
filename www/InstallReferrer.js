var exec = require('cordova/exec');

var getReferer = function() {
    console.log('AndroidToast instanced');
};

getReferer.prototype.show = function(onSuccess, onError) {
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
    			getReferrer(success, error)
    		}, 500);
    	}
        onSuccess(obj);
    };

	exec(function(ref) {
    	
    }, error, 'InstallReferrer');
    exec(successCallback, errorCallback, 'AndroidToast', 'show', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = getReferer;
}

function getReferrer (success, error) {
	if (!success) {
		return new Promise(function(resolve, reject) {
			getReferrer(resolve, reject);
		});
	}

    exec(function(ref) {
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
    		success(params);
    	} else {
    		setTimeout(function() {
    			getReferrer(success, error)
    		}, 500);
    	}
    }, error, 'InstallReferrer');
}

exports.getReferrer = getReferrer;
