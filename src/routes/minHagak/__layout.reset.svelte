<script context="module">
	export async function load({ page: { path }, session }) {
		const locale = session && session.locale ? session.locale : 'ar';

		return {
			props: {
				path,
				locale,
			},
			context: {
				locale,
			},
		};
	}
</script>

<script>
	import '$styles/main.css';
	import { _, locale as storeLocale } from 'svelte-i18n';
	import initTranslations from '$utils/i18n';

	export let locale;
	initTranslations(locale);

	function changeLocale() {
		$storeLocale = $storeLocale === 'ar' ? 'en' : 'ar';
		window.location.reload();
	}

	export let path;
	const pathMatch = path.match(/\/minHagak(?:\/(?<path>.*))?/);
	const pathSegments =
		pathMatch.groups && pathMatch.groups.path
			? pathMatch.groups.path.split('/')
			: [];
	const onLanding = pathSegments.length === 0;
	let mobileMenuOpen = false;
	let profileMenuOpen = false;
</script>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="min-h-screen" dir={$storeLocale === 'ar' ? 'rtl' : 'ltr'}>
	<div class="relative overflow-hidden">
		<header class="relative">
			<div class="bg-kabdi-secondary pt-6">
				<nav
					class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
					aria-label="Global"
				>
					<div class="flex items-center flex-1">
						<div class="flex items-center justify-between w-full md:w-auto">
							<a class="font-bold tracking-tighter" href="/">
								<img
									class="text-white h-8"
									src="/full-logo-reverse.svg"
									alt="YASudan"
								/>
							</a>
							<div class="-mr-2 space-x-4 {$storeLocale === 'ar' ? 'space-x-reverse' : ''} flex items-center md:hidden">
								<a
									class="text-base font-medium text-white hover:text-gray-300"
									href={path}
									on:click={changeLocale}>{$_('locale')}</a
								>
								<button
									on:click={() => (mobileMenuOpen = true)}
									type="button"
									class="bg-kabdi-secondary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-rose-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
									aria-expanded="false"
								>
									<span class="sr-only">Open main menu</span>
									<!-- Heroicon name: outline/menu -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div
							class="hidden space-x-8 md:flex {$storeLocale === 'ar'
								? 'md:mr-10 space-x-reverse'
								: 'md:ml-10'}"
						>
							<a
								href="#"
								class="text-base font-medium text-white hover:text-gray-300"
								>{$_('minHagak.nav.topics')}</a
							>

							<a
								href="#"
								class="text-base font-medium text-white hover:text-gray-300"
								>{$_('minHagak.nav.legal_aid')}</a
							>
						</div>
					</div>
					<div class="hidden md:flex items-center">
						<a
							class="text-base font-medium text-white hover:text-gray-300"
							href={path}
							on:click={changeLocale}>{$_('locale')}</a
						>
					</div>
				</nav>
			</div>

			<!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
			{#if mobileMenuOpen}
				<div
					class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
				>
					<div
						class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
					>
						<div class="px-5 pt-4 flex items-center justify-between">
							<div>
								<img
									class="h-8 w-auto text-red"
									src="/logo.svg"
									alt="YAS"
								/>
							</div>
							<div class="-mr-2">
								<button
									on:click={() => (mobileMenuOpen = false)}
									type="button"
									class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								>
									<span class="sr-only">Close menu</span>
									<!-- Heroicon name: outline/x -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="pt-5 pb-6">
							<div class="px-2 space-y-1">
								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
									>Product</a
								>

								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
									>Features</a
								>

								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
									>Marketplace</a
								>

								<a
									href="#"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
									>Company</a
								>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</header>

		<slot />
	</div>
</div>
