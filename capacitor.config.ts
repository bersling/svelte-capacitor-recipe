import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'svelte-capacitor-recipe',
	webDir: 'dist',
	server: {
		androidScheme: 'https'
	}
};

export default config;
