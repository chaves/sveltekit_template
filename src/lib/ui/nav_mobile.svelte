<script>
	import Links from '$data/menu.json';
	const links = Links
</script>

<!--Mobile menu-->
<div class="hidden navbar-menu relative z-50 transition duration-300">
	<div class="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25" />
	<nav
		class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300"
	>
		<div class="flex items-center mb-8">
			<a class="mr-auto text-3xl font-semibold leading-none" href="/">
				<!-- <img class="h-16" src="/logo.svg" alt="logo" /> -->
			</a>
			<button class="navbar-close">
				<svg
					class="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewbox="0 0 24 24"
					stroke="currentColor"
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
		<div>
			<ul class="mobile-menu">
				{#each links as link}
					{#if link.children === undefined}
						<li class="mb-1 rounded-xl">
							<a href="{link.path}" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">{link.title}</a>
						</li>
					{:else}
						<li class="mb-1 menu-item-has-children rounded-xl">
							<a href="{link.path}" class="block p-3 text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 rounded-xl">{link.title}</a>
							<ul class="dropdown pl-5">
								{#each link.children as child}
									<li class="mb-1 rounded-xl">
										<a href="{child.path}" class="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">{child.title}</a>
									</li>
								{/each}
							</ul>
						</li>
					{/if}
				{/each}
			</ul>

		</div>
	</nav>
</div>
