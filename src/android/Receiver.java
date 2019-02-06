package cordova.plugin.installreferrer;

import android.os.Bundle;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import cordova.plugin.installreferrer.InstallReferrer;

public class Receiver extends BroadcastReceiver {
	@Override
	public void onReceive(Context context, Intent intent) {
		Bundle extras = intent.getExtras();

		if (extras != null) {
			InstallReferrer._referrer = extras.getString("referrer");
		} else {
			InstallReferrer._referrer = "";
		}
	}
}
