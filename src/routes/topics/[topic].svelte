<script context="module">
	export async function load({ params, fetch }) {
		const { topics } = await fetch('/topics.json').then(res => res.json());
		return {
			props: { topics, topicKey: params.topic },
		};
	}
</script>

<script>
	import { _, locale } from 'svelte-i18n';

	export let topics;
	export let topicKey;
	const topic = topics[topicKey];

	const { title, summary, image, imageCaption, content } = topic;

	function getNestingClass(nested) {
		switch (nested) {
			case 2:
				return $locale === 'ar' ? 'pr-12' : 'pl-12';
			default:
				return $locale === 'ar' ? 'pr-6' : 'pl-6';
		}
	}

	function renderContent(content, nested = false) {
		if (Array.isArray(content)) {
			return content.map(c => renderContent(c, nested)).join('\n');
		} else if (typeof content === 'object') {
			if (content.hasOwnProperty('nested')) {
				nested = content.nested;
			}
			const nestingClass = nested ? getNestingClass(nested) : '';
			switch (content?.tag) {
				case 'h2':
					return `<h2 class="${nestingClass}">${content?.text}</h2>`;
				case 'h3':
					return `<h2 class="${nestingClass}">${content?.text}</h2>`;
				case 'ol':
					return `<ol start="${
						content?.start || 1
					}" class="${nestingClass}">${content?.items
						?.map(i =>
							typeof i === 'object'
								? renderContent(i, nested ? 2 : true)
								: `<li>${renderContent(i, nested ? 2 : true)}</li>`,
						)
						.join('\n')}</ol>`;
				case 'ul':
					return `<ul start="${
						content?.start || 1
					}" class="${nestingClass}">${content?.items
						?.map(i =>
							typeof i === 'object'
								? renderContent(i, nested ? 2 : true)
								: `<li>${renderContent(i, nested ? 2 : true)}</li>`,
						)
						.join('\n')}</ul>`;
				default:
					return `<p class="${nestingClass}">${content?.text || content}</p>`;
			}
		}
		return `<p>${content}</p>`;
	}
</script>

<div class="relative py-16 bg-white overflow-hidden">
	<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
		<div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
			<svg
				class="absolute top-12 left-full transform translate-x-32"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width="404"
					height="384"
					fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
				/>
			</svg>
			<svg
				class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="f210dbf6-a58d-4871-961e-36d5016a0f49"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width="404"
					height="384"
					fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
				/>
			</svg>
			<svg
				class="absolute bottom-12 left-full transform translate-x-32"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="d3eb07ae-5182-43e6-857d-35c643af9034"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width="404"
					height="384"
					fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
				/>
			</svg>
		</div>
	</div>
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="text-lg max-w-prose mx-auto">
			<h1>
				<span
					class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
					>{$_('minHagak.summary')}</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>{title}</span
				>
			</h1>
			<p class="mt-8 text-xl text-gray-500 leading-8">
				{summary}
			</p>
		</div>
		<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
			{#if image}
				<figure>
					<img
						class="w-full rounded-lg"
						src={image}
						alt=""
						width="1310"
						height="573"
					/>
					<figcaption>
						{imageCaption}
					</figcaption>
				</figure>
			{/if}
			{@html renderContent(content)}
		</div>
	</div>
</div>

<div class="my-12 px-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-4xl">
	{#each Object.entries(topics).filter(([k, t]) => t.title !== title) as [key, topic]}
		<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
			<div class="flex-shrink-0">
				<img class="h-48 w-full object-cover" src={topic.cover} alt="" />
			</div>
			<div class="flex-1 bg-white p-6 flex flex-col justify-between">
				<div class="flex-1">
					<p class="text-sm font-medium text-indigo-600">
						<span>{$_('minHagak.summary')}</span>
					</p>
					<a rel="external" href="/topics/{key}" class="block mt-2">
						<p class="text-xl font-semibold text-gray-900">
							{topic.title}
						</p>
						<p class="mt-3 text-base text-gray-500">
							{topic.summary?.length > 160
								? `${topic.summary.slice(0, 160)}...`
								: topic.summary}
							<a rel="external"
								href="/topics/{key}"
								class="text-base font-medium text-kabdi-primary hover:text-kabdi-light"
								>{$_('minHagak.read_more')}<span aria-hidden="true"
									>&nbsp;{@html $locale === 'ar' ? '&larr;' : '&rarr;'}</span
								></a
							>
						</p>
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>
