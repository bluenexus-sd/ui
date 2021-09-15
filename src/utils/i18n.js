import { onMount } from 'svelte';
import { addMessages, init, locale } from 'svelte-i18n';
import { serialize as serializeCookie } from 'cookie';
import en from '../../locales/en.json';
import ar from '../../locales/ar.json';

addMessages('en', en);
addMessages('ar', ar);

export default function initTranslations(defaultLocale = 'ar') {
	init({
		fallbackLocale: 'en',
		initialLocale: defaultLocale,
	});

	onMount(() => {
		const setLocale = localStorage.getItem('locale');
		if(setLocale && setLocale !== defaultLocale) {
			locale.set(setLocale);
		}
		
		locale.subscribe(val => {
			localStorage.setItem('locale', val);
			document.cookie = serializeCookie('locale', val);
		});
	});
}
