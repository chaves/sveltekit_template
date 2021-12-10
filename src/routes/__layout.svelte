<script>
	import '../app.css';
	import Nav from '$lib/ui/nav.svelte';
	import NavMobile from '$lib/ui/nav_mobile.svelte';
	import Footer from '$lib/ui/footer.svelte';
</script>

<!--Header-->
<header class="bg-white sticky-bar py-2">
	<div class="container bg-white">
		<Nav />
		<NavMobile />
	</div>
</header>

<slot />

<Footer />