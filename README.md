# Svelte Capacitor Recipe

Small recipe to create a svelte kit app and package it for mobile (ios/android) with capacitor.

# 🚀 Create svelte kit project

See https://kit.svelte.dev/docs/creating-a-project

```
npm create svelte@latest my-app
# Pick "skeleton project"
# Typescript and prettier are also pretty cool

cd my-app
npm install
npm run dev
```

# 🤓 Program something

Program your app. Minimal example: https://gist.github.com/bersling/33dd5afe071b3aa6b93a35d42b2afabc .

# 📁 Switch to SSG (=Static Site Generation)

(1) Install the static adapter

```
npm install @sveltejs/adapter-static
```

(2) Use the following `svelte.config.js`:

```
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: null,
			precompress: false,
			strict: true
		})
	}
};

export default config;
```

(3) Create a `+layout.ts` file under `./src/routes/` with content:

```
export const prerender = true;
```

Verify your setup with `npm run build`, which should succeed and create a `dist` folder. Also, add `dist` to your `.gitignore`.

# ⚡ Set up capacitor

Add capacitor to project, see https://capacitorjs.com/

```
npm i @capacitor/core @capacitor/android @capacitor/ios
npm i -D @capacitor/cli
npx cap init
```

# 🤖 Set up android app

First, run

```
npx cap add android
```

Every time you make code changes, you then run `npm run build && npx cap sync` to sync the changes to the android project. Execute that step now.

Install Android Studio if you haven't and open the project with `npx cap open android`.

#  Set up ios app

First, run

```
npx cap add ios
```

Then run

```
npx cap open ios
```

Don't forget to run `npm run build && npx cap sync` on code changes.

Select a target device to test, or select build for any device and then hit "archive" to ship.

# 😢 Optimize

Take from here what's helpful to you.

## Fix viewport

Change meta tag in `app.html` to

```
		<meta name="viewport"
			content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
```

Prevents stuff like zooming in on double click.

## Prevent users from doing unwanted things

In `app.html` add a style tag with the content

```
		<style>
			* {
				box-sizing: border-box;

				/* disable text selection (svg icons are also text...) */
				-webkit-user-select: none;
				/* Safari */
				-ms-user-select: none;
				/* IE 10 and IE 11 */
				user-select: none;
				/* Standard syntax */

				/* preventing the long press context menu, https://stackoverflow.com/a/56866766/3022127 */
				-webkit-touch-callout: none !important;
				-webkit-user-select: none !important;

				/* preventing iOS tap highlight */
				-webkit-tap-highlight-color: transparent;

				/* Disable browser handling of all panning and zooming gestures, except for regular scrolling */
				touch-action: pan-y;
			}
		</style>
```

## Fix App Specific Oddities

In the app from above, on iOS it just looked weird. The font size calculation seems to be off. So here's a version that fixes this on iOS and shows you capacitors `native` feature: https://gist.github.com/bersling/ebe95f7918b3169b3d36b0b13272daf9 .
