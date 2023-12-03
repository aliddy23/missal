import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.aidanliddy.catholic",
	appName: "Catholic",
	webDir: "dist",
	server: {
		androidScheme: "https",
	},
	android: {
		buildOptions: {
			keystorePath: "undefined",
			keystoreAlias: "undefined",
		},
	},
};

export default config;
