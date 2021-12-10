<script>
	import NavRight from '$lib/ui/nav_right.svelte'
	import Links from '$data/menu.json';
	const links = Links
</script>

<nav class="bg-transparent flex justify-between items-center pb-3">
	<a class="font-semibold leading-none" href="/">
		<!--<img class="h-16" src="/logo.svg" alt="logo" />-->
	</a>
	<ul class="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6 pt-6">
		{#each links as link}
			{#if link.children === undefined}
				<li class="group relative pt-4 pb-4">
					<a href="{link.path}" class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">{link.title}</a>
				</li>
			{:else}
				<li class="group relative pt-4 pb-4 has-child">
					<a href="{link.path}" class="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">{link.title}</a>
					<ul class="drop-down-menu min-w-200">
						{#each link.children as child}
							<a href="{child.path}" class="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">{child.title}</a>
						{/each}
					</ul>
				</li>
			{/if}
		{/each}
	</ul>


	<!-- right links -->
	<div class="hidden lg:block text-center">
		<NavRight />
	</div>

	<!-- navbar-burger -->
	<div class="lg:hidden">
		<button
			class="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
		>
			<svg class="fill-current h-4 w-4" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<title>Mobile menu</title>
				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
			</svg>
		</button>
	</div>
</nav>

<p class="text-gray-400 text-sm lg:-mt-4">
	text
</p>