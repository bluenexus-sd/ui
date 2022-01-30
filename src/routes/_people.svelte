<script context="module">
	export const prerender = true;
</script>

<script>
	let mobileMenuOpen = false;
	const navLinks = [
		{ text: 'Mission', href: '/mission' },
		{ text: 'People', href: '/people' },
		{ text: 'Contact', href: '/contact' },
		// { text: 'Dontate', href: '', primary: true },
	];
</script>

<svelte:head>
	<title>People | YASudan</title>
</svelte:head>


<div class="relative bg-white max-w-7xl mx-auto">

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
							<img class="text-white h-8" src="/full-logo.svg" alt="YASudan" />
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
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
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
								? 'text-sky-600 hover:text-sky-500'
								: 'text-gray-500 hover:text-gray-900'}"
							>{navLink.text}</a
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
							<img class="h-8 w-auto" src="/logo.svg" alt="" />
						</div>
						<div class="-mr-2">
							<button
								on:click={() => {
									mobileMenuOpen = false;
								}}
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
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
							class="block w-full px-5 py-3 text-center font-medium text-sky-600 bg-gray-50 hover:bg-gray-100"
						>
							{navLinks.find(l => !!l.primary).text}
						</a>
					{/if}
				</div>
			</div>
		{/if}
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
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our leadership</h2>

      <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
        <li>
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img class="object-cover shadow-lg rounded-lg" src="/1622211315246.jpeg" alt="">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Shaheen AlSharif</h3>
                  <p class="text-sky-600">Executive Director</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                </div>
                <ul role="list" class="flex space-x-5">
                  <li>
                    <a href="https://twitter.com/SheenAlSharif" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shaheen-al-sharif-631112206/" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img class="object-cover shadow-lg rounded-lg" src="/29453e8095bf556c3972f48396976f08-large.jpeg" alt="">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Musaab Elfaqih</h3>
                  <p class="text-sky-600">General Project Manager</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                </div>
                <ul role="list" class="flex space-x-5">
                  <li>
                    <a href="https://twitter.com/eensabby" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/melfaqih/" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img class="object-cover shadow-lg rounded-lg" src="/5UHLa2Zr_400x400.jpeg" alt="">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Awab Osman</h3>
                  <p class="text-sky-600">General Financial Manager</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                </div>
                <ul role="list" class="flex space-x-5">
                  <li>
                    <a href="https://twitter.com/awabhabiballa" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/awab-osman-06621b175/" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img class="object-cover shadow-lg rounded-lg" src="/alaa_lawyer.jpeg" alt="">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Alaa Busati</h3>
                  <p class="text-sky-600">General Secretary</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img class="object-cover shadow-lg rounded-lg" src="/doa_picture.jpeg" alt="">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Doaa Mawhoub</h3>
                  <p class="text-sky-600">Program Assistant</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img class="object-cover shadow-lg rounded-lg" src="/Capture.png" alt="">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>Mohammed El-Mujtaba</h3>
                  <p class="text-sky-600">Director of Monitoring & Evaluation</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>


</div>	

<footer class="bg-gray-800 flex-1" aria-labelledby="footerHeading">
	<h2 id="footerHeading" class="sr-only">Footer</h2>
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
	<div
		class="mt-8 pt-8 md:flex md:items-center md:justify-between"
	>
		<div class="flex space-x-6 md:order-2">
			<a href="#" class="text-gray-400 hover:text-gray-300">
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
			</a>
		</div>
		<p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
			&copy; 2021 YASudan. Supported by BlueNexus.
		</p>
	</div>
	</div>
</footer>	