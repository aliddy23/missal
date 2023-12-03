import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.aidanliddy.catholic",
	appName: "DRV",
	webDir: "dist",
	server: {
		androidScheme: "https",
	},
};

export default config;
