<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';

	let mobileMenuOpen = false;
	let subscribedToNewsletter = false;

	const navLinks = [
		// { text: 'Contact', href: '/contact' },
		// { text: 'Dontate', href: '', primary: true },
	];

	onMount(() => {
		const subscribedToNewsletterAt = Number(localStorage.getItem('subscribedToNewsletterAt'));
    if(!Number.isNaN(subscribedToNewsletterAt) && Date.now() - subscribedToNewsletterAt < 120000) {
      subscribedToNewsletter = true;
    }

		const form = document.getElementById('newsletter');
		if (form) {
			form.addEventListener('submit', e => {
				e.preventDefault();
				const formData = new FormData(form);
				fetch('/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: new URLSearchParams(formData).toString(),
				})
					.then(() => {
						console.log('newsletter subscription successful');
						subscribedToNewsletter = true;
            localStorage.setItem('subscribedToNewsletterAt', Date.now());
					})
					.catch(err => console.error(err));
			});
		}
	});
</script>

<svelte:head>
	<title>Home | Youth in Action - Sudan</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<div class="relative bg-white overflow-hidden">
		<div class="max-w-7xl mx-auto">
			<div
				class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
			>
				<svg
					class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
					fill="currentColor"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<polygon points="50,0 100,0 50,100 0,100" />
				</svg>

				<div>
					<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
						<nav
							class="relative flex items-center justify-between sm:h-10 lg:justify-start"
							aria-label="Global"
						>
							<div
								class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
							>
								<div class="flex items-center justify-between w-full md:w-auto">
									<a class="font-bold tracking-tighter" href="/">
										<h1 class="text-2xl md:text-3xl md:mt-2">YAS</h1>
										<p class="text-gray-600 -mt-2 md:text-lg">
											Youth in Action - Sudan
										</p>
									</a>
									<div
										class:hidden={!navLinks.length}
										class="-mr-2 flex items-center md:hidden"
									>
										<button
											on:click={() => {
												mobileMenuOpen = true;
											}}
											type="button"
											class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
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
							</div>
							<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
								{#each navLinks as navLink}
									<a
										href={navLink.href}
										class="font-medium {navLink.primary
											? 'text-teal-600 hover:text-teal-500'
											: 'text-gray-500 hover:text-gray-900'}">{navLink.text}</a
									>
								{/each}
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
							class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div
								class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
							>
								<div class="px-5 pt-4 flex items-center justify-between">
									<div>
										<img class="h-8 w-auto" src="/workflow-mark.svg" alt="" />
									</div>
									<div class="-mr-2">
										<button
											on:click={() => {
												mobileMenuOpen = false;
											}}
											type="button"
											class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
										>
											<span class="sr-only">Close main menu</span>
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
								<div class="px-2 pt-2 pb-3 space-y-1">
									{#each navLinks.filter(l => !l.primary) as navLink}
										<a
											href={navLink.href}
											class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
											>{navLink.text}</a
										>
									{/each}
								</div>
								{#if navLinks.find(l => !!l.primary)}
									<a
										href={navLinks.find(l => !!l.primary).href}
										class="block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100"
									>
										{navLinks.find(l => !!l.primary).text}
									</a>
								{/if}
							</div>
						</div>
					{/if}
				</div>

				<main
					class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
				>
					<div class="sm:text-center lg:text-left">
						<h1
							class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
						>
							<span class="block xl:inline">Building a better</span>
							<span class="block text-teal-600 xl:inline">Sudan, together</span>
						</h1>
						<p
							class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
						>
							We enable youth-led initiatives targeting sustainable community
							development with training, networking opportunities, and access to
							rescources.
						</p>
						<!-- <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="/contact"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
                >
                  Get involved
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/mission"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
              </div>
            </div> -->
					</div>
				</main>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
				src="/abdulaziz-mohammed-zHVKkN7vF34-unsplash.jpeg"
				alt=""
			/>
		</div>
	</div>

	<!-- <div
    class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
        >
          From the blog
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-teal-600">
                <a href="#" class="hover:underline"> Article </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Boost your conversion rate
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium praesentium eius, ut atque fuga culpa,
                  similique sequi cum eos quis dolorum.
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">Roel Aufderehar</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="#" class="hover:underline"> Roel Aufderehar </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16"> Mar 16, 2020 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-teal-600">
                <a href="#" class="hover:underline"> Video </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  How to use search engine optimization to drive sales
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  facilis asperiores porro quaerat doloribus, eveniet dolore.
                  Adipisci tempora aut inventore optio animi., tempore temporibus
                  quo laudantium.
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">Brenna Goyette</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="#" class="hover:underline"> Brenna Goyette </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 4 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-teal-600">
                <a href="#" class="hover:underline"> Case Study </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Improve your customer experience
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  harum rerum voluptatem quo recusandae magni placeat saepe
                  molestiae, sed excepturi cumque corporis perferendis hic.
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">Daniela Metz</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="#" class="hover:underline"> Daniela Metz </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-02-12"> Feb 12, 2020 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 11 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

	<!-- <div class="relative bg-gray-900">
    <div class="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
      <div class="h-full w-full xl:grid xl:grid-cols-2">
        <div class="h-full xl:relative xl:col-start-2">
          <img
            class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
            src="/yusuf-yassir--_AxNYIJRYE-unsplash.jpeg"
            alt="People working on laptops"
          />
          <div
            aria-hidden="true"
            class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
          />
        </div>
      </div>
    </div>
    <div
      class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8"
    >
      <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 class="text-sm font-semibold text-teal-300 tracking-wide uppercase">
          Valuable Metrics
        </h2>
        <p class="mt-3 text-3xl font-extrabold text-white">
          Get actionable data that will help grow your business
        </p>
        <p class="mt-5 text-lg text-gray-300">
          Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis
          in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in
          quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
          nibh integer quis. Eu vulputate diam sit tellus quis at.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-2xl font-bold text-white">8K+</span>
            <span class="mt-1 block text-base text-gray-300"
              ><span class="font-medium text-white">Companies</span> use laoreet amet
              lacus nibh integer quis.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">25K+</span>
            <span class="mt-1 block text-base text-gray-300"
              ><span class="font-medium text-white"
                >Countries around the globe</span
              > lacus nibh integer quis.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">98%</span>
            <span class="mt-1 block text-base text-gray-300"
              ><span class="font-medium text-white">Customer satisfaction</span> laoreet
              amet lacus nibh integer quis.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">12M+</span>
            <span class="mt-1 block text-base text-gray-300"
              ><span class="font-medium text-white">Issues resolved</span> lacus nibh
              integer quis.</span
            >
          </p>
        </div>
      </div>
    </div>
  </div> -->

	<!-- <div class="bg-white">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">Ready to build back better?</span>
        <span class="block text-teal-600">Join us today!</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
          >
            Get involved
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div> -->

	<!-- <div class="relative bg-white pt-16 pb-32 overflow-hidden">
    <div class="relative">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
        >
          <div>
            <div>
              <span
                class="h-12 w-12 rounded-md flex items-center justify-center bg-teal-600"
              >
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
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Stay on top of customer support
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
                sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
                Lectus viverra dui tellus ornare pharetra.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">
                  &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                  diam. Sit orci risus aenean curabitur donec aliquet. Mi
                  venenatis in euismod ut.&rdquo;
                </p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                  </div>
                  <div class="text-base font-medium text-gray-700">
                    Marcia Hill, Digital Marketing Manager
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/mohamed-tohami-uj9jnMnaaUw-unsplash.jpeg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
        >
          <div>
            <div>
              <span
                class="h-12 w-12 rounded-md flex items-center justify-center bg-teal-600"
              >
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Better understand your customers
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
                sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
                Lectus viverra dui tellus ornare pharetra.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div
            class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/abdulaziz-mohammed-MikIBd2ptzA-unsplash.jpeg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div> -->

	<footer class="bg-gray-800 flex-1" aria-labelledby="footerHeading">
		<h2 id="footerHeading" class="sr-only">Footer</h2>
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div class="xl:grid xl:grid-cols-2 xl:gap-8">
				<!-- <div class="grid grid-cols-2 gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              Organization
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="/contact" class="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              Legal
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="/privacy" class="text-base text-gray-300 hover:text-white">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-300 hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div> -->
				<!-- <div class="mt-8 xl:mt-0"> -->
				<div class="xl:mt-0">
					{#if subscribedToNewsletter}
						<h3
							class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
						>
							Thanks for subscribing!
						</h3>
						<p class="mt-4 text-base text-gray-300">
							You can change your mind at any time by clicking the 'Unsubscribe'
							link at the bottom of the emails you receive.
						</p>
					{:else}
						<h3
							class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
						>
							Subscribe to stay up to date
						</h3>
						<p class="mt-4 text-base text-gray-300">
							The latest news sent directly to your inbox.
						</p>
						<form
							id="newsletter"
							name="newsletter"
							class="mt-4 sm:flex sm:max-w-md"
							netlify
							method="POST"
						>
							<label for="email" class="sr-only">Email address</label>
							<input
								type="email"
								name="email"
								id="email"
								autocomplete="email"
								required
								class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
								placeholder="Enter your email"
							/>
							<div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
								<button
									type="submit"
									class="w-full bg-teal-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500"
								>
									Subscribe
								</button>
							</div>
						</form>
					{/if}
				</div>
			</div>
			<div
				class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
			>
				<div class="flex space-x-6 md:order-2">
					<!-- <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Facebook</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Instagram</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Twitter</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a> -->
				</div>
				<p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
					&copy; 2021 Youth in Action - Sudan.
				</p>
			</div>
		</div>
	</footer>
</div>
