<script>
	import { _, locale } from 'svelte-i18n';
</script>

<main>
	<div
		class="pt-10 bg-kabdi-secondary sm:pt-16 lg:pt-8 pb-14 lg:overflow-hidden"
	>
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="flex flex-col">
				<div class="flex flex-col items-center">
					<img
						class="w-auto h-[35vh] max-w-none inline"
						src="/mallet.svg"
						alt=""
					/>
					<h1
						class="text-white inline text-4xl font-semibold tracking-tightest"
					>
						Min Hagak
					</h1>
				</div>
				<!-- 				
				<div class="m-10 sm:mt-12">
					<form action="#" class="sm:max-w-xl sm:mx-auto">
						<div class="sm:flex">
							<div class="min-w-0 flex-1">
								<label for="search" class="sr-only">Query</label>
								<input
									id="search"
									type="text"
									placeholder="What's your issue?"
									class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
								/>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<button
									type="submit"
									class="block w-full py-3 px-4 rounded-md shadow bg-kabdi-light text-white font-medium hover:bg-kabdi-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kabdi-lightest focus:ring-offset-kabdi-primary"
									>Search</button
								>
							</div>
						</div>
					</form>
				</div> -->
			</div>
		</div>
	</div>

	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="text-center">
				<p
					class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
				>
					{$_('minHagak.landing.sections.who_are_we.title')}
				</p>
				<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
					{$_('minHagak.landing.sections.who_are_we.text')}
				</p>
			</div>
		</div>
	</div>

	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="bg-gray-50">
		<!-- Header -->
		<div class="relative pb-32 bg-gray-800">
			<div class="absolute inset-0">
				<img
					class="w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
					alt=""
				/>
				<div
					class="absolute inset-0 bg-gray-800 mix-blend-multiply"
					aria-hidden="true"
				/>
			</div>
			<div
				class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
			>
				<h1
					class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
				>
					{$_('minHagak.topics')}
				</h1>
				<p class="mt-6 max-w-3xl text-xl text-gray-300">
					{$_('minHagak.landing.sections.who_are_we.text')}
				</p>
			</div>
		</div>

		<!-- Overlapping cards -->
		<section
			class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
			aria-labelledby="contact-heading"
		>
			<h2 class="sr-only" id="contact-heading">{$_('minHagak.read_more')}</h2>
			<div
				class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8"
			>
				<div class="flex flex-col bg-white rounded-2xl shadow-xl">
					<div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
						<div
							class="absolute top-0 p-5 inline-block bg-kabdi-secondary rounded-xl shadow-lg transform -translate-y-1/2"
						>
							<!-- Heroicon name: outline/phone -->
							<svg
								class="h-6 w-6 text-white"
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
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-medium text-gray-900">
							{$_('minHagak.topic.work')}
						</h3>
						<p class="mt-4 text-base text-gray-500">
							{$_('minHagak.landing.sections.who_are_we.text')}
						</p>
					</div>
					<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
						<a
							href="#"
							class="text-base font-medium text-kabdi-primary hover:text-kabdi-light"
							>{$_('minHagak.read_more')}<span aria-hidden="true"
								>&nbsp;{@html $locale === 'ar' ? '&larr;' : '&rarr;'}</span
							></a
						>
					</div>
				</div>

				<div class="flex flex-col bg-white rounded-2xl shadow-xl">
					<div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
						<div
							class="absolute top-0 p-5 inline-block bg-kabdi-secondary rounded-xl shadow-lg transform -translate-y-1/2"
						>
							<!-- Heroicon name: outline/support -->
							<svg
								class="h-6 w-6 text-white"
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
									d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-medium text-gray-900">
							{$_('minHagak.topic.marriage')}
						</h3>
						<p class="mt-4 text-base text-gray-500">
							{$_('minHagak.landing.sections.who_are_we.text')}
						</p>
					</div>
					<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
						<a
							href="#"
							class="text-base font-medium text-kabdi-primary hover:text-kabdi-light"
							>{$_('minHagak.read_more')}<span aria-hidden="true"
								>&nbsp;{@html $locale === 'ar' ? '&larr;' : '&rarr;'}</span
							></a
						>
					</div>
				</div>

				<div class="flex flex-col bg-white rounded-2xl shadow-xl">
					<div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
						<div
							class="absolute top-0 p-5 inline-block bg-kabdi-secondary rounded-xl shadow-lg transform -translate-y-1/2"
						>
							<!-- Heroicon name: outline/newspaper -->
							<svg
								class="h-6 w-6 text-white"
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
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-medium text-gray-900">
							{$_('minHagak.topic.children')}
						</h3>
						<p class="mt-4 text-base text-gray-500">
							{$_('minHagak.landing.sections.who_are_we.text')}
						</p>
					</div>
					<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
						<a
							href="#"
							class="text-base font-medium text-kabdi-primary hover:text-kabdi-light"
							>{$_('minHagak.read_more')}<span aria-hidden="true"
								>&nbsp;{@html $locale === 'ar' ? '&larr;' : '&rarr;'}</span
							></a
						>
					</div>
				</div>
			</div>
		</section>
	</div>

	<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
-->
	<div class="relative bg-white">
		<div class="lg:absolute lg:inset-0">
			<div
				class="lg:absolute lg:inset-y-0 {$locale === 'ar'
					? 'lg:right-0'
					: 'lg:left-0'} lg:w-1/2"
			>
				<img
					class="h-56 w-full object-cover lg:absolute lg:h-full"
					src="/mohamed-tohami-uj9jnMnaaUw-unsplash.jpeg"
					alt=""
				/>
			</div>
		</div>
		<div
			class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
		>
			<div class="lg:col-start-2 lg:pl-8">
				<div
					class="text-base max-w-prose mx-auto lg:max-w-lg {$locale === 'ar'
						? 'lg:mr-auto lg:ml-0'
						: 'lg:ml-auto lg:mr-0'}"
				>
					<h2
						class="leading-6 text-kabdi-primary font-semibold tracking-wide uppercase"
					>
						{$_('minHagak.work_with_us')}
					</h2>
					<h3
						class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>
						{$_('minHagak.what_is_it')}
					</h3>
					<p class="mt-8 text-lg text-gray-500">
						Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
						urna sed consectetur neque tristique pellentesque. Blandit amet, sed
						aenean erat arcu morbi.
					</p>
					<div class="mt-5 prose prose-indigo text-gray-500">
						<p>
							Sollicitudin tristique eros erat odio sed vitae, consequat turpis
							elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
							viverra donec ut volutpat donec laoreet quam urna.
						</p>
						<p>
							Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
							nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
							sit. Faucibus sed non gravida lectus dignissim imperdiet a.
						</p>
						<p>
							Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem
							arcu, metus, egestas netus cursus. In.
						</p>
						<ul role="list">
							<li>Quis elit egestas venenatis mattis dignissim.</li>
							<li>
								Cras cras lobortis vitae vivamus ultricies facilisis tempus.
							</li>
							<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
						</ul>
						<p>
							Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt
							vel ultricies. Vulputate aliquet velit faucibus semper.
							Pellentesque in venenatis vestibulum consectetur nibh id. In id ut
							tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum
							lacus in. Viverra.
						</p>
						<h3>How we’re different</h3>
						<p>
							Tincidunt integer commodo, cursus etiam aliquam neque, et.
							Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
							feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
							proin massa, lectus. Diam rutrum posuere donec ultricies non
							morbi. Mi a platea auctor mi.
						</p>
						<p>
							Mauris ullamcorper imperdiet nec egestas mi quis quam ante
							vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum id
							tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi
							neque, ornare suspendisse amet, nibh. Facilisi volutpat lectus id
							sapien dis mauris rhoncus. Est rhoncus, interdum imperdiet ac
							eros, diam mauris, tortor. Risus id sit molestie magna.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
