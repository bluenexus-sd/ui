<script context="module">
	export async function load({ page: { path }, session }) {
		const locale = session && session.locale ? session.locale : 'ar';

		return {
			props: {
				path,
				locale,
			},
			context: {
				locale
			}
		};
	}
</script>

<script>
	import '$styles/main.css';
	import initTranslations from '$utils/i18n';

	export let locale;
	initTranslations(locale);
</script>

<slot></slot>