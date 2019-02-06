var exec = require('cordova/exec');

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
				ref.split('&').map(param => {
					let key   = param.split('=')[0];
					let value = param.split('=')[1];
					params[key] = value;
				});
			} else {
				let key = ref.split('=')[0];
				let value = ref.split('=')[1];
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