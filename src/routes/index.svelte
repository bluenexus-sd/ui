<script context="module">
	export async function load({ params, fetch }) {
		const url = `/topics.json`;
		const res = await fetch(url);

		if (res.ok) {
			const { topics } = await res.json();
			return {
				props: { topics },
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		};
	}
</script>

<script>
	import { _, locale } from 'svelte-i18n';

	export let topics;
	console.log(topics);
</script>

<main>
	<div
		class="pt-4 bg-kabdi-secondary sm:pt-16 lg:pt-8 pb-14 lg:overflow-hidden"
	>
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="flex flex-col">
				<div class="flex flex-col items-center">
					<img
						class="w-auto h-[25vh] max-w-none inline"
						src="/mallet.svg"
						alt=""
					/>
					<h1
						class="text-white inline text-4xl font-semibold tracking-tightest"
					>
						Min Hagak
					</h1>
				</div>
			</div>
		</div>
	</div>

	<div
		class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
	>
		<div class="absolute inset-0">
			<div class="bg-white h-1/3 sm:h-2/3" />
		</div>
		<div class="relative max-w-7xl mx-auto">
			<div class="text-center">
				<h2
					class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
				>
					{$_('minHagak.topics.title')}
				</h2>
				<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
					{$_('minHagak.landing.sections.who_are_we.text')}
				</p>
			</div>
			<div
				class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
			>
				{#each Object.entries(topics) as [key, topic]}
					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<img
								class="h-48 w-full object-cover"
								src="{topic.cover}"
								alt=""
							/>
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<p class="text-sm font-medium text-indigo-600">
									<a href="#" class="hover:underline"
										>{$_('minHagak.summary')}</a
									>
								</p>
								<a href="/topics/{key}" class="block mt-2">
									<p class="text-xl font-semibold text-gray-900">
										{topic.title}
									</p>
									<p class="mt-3 text-base text-gray-500">
										{topic.summary?.length > 160 ? `${topic.summary.slice(0, 160)}...` : topic.summary}
										<a
											href="/topics/{key}"
											class="text-base font-medium text-kabdi-primary hover:text-kabdi-light"
											>{$_('minHagak.read_more')}<span aria-hidden="true"
												>&nbsp;{@html $locale === 'ar'
													? '&larr;'
													: '&rarr;'}</span
											></a
										>
									</p>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
