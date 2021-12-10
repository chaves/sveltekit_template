<script>
	import Breadcrumb from '$lib/ui/breadcrumb_solo.svelte'
	import CallForm from '$lib/forms/call_form.svelte'

</script>

<svelte:head>
	<title>Tite</title>
	<meta name="description" content="description details" />
</svelte:head>

<Breadcrumb title="My title" />

<section class="py-6 bg-blueGray-50">
	<div class="container">
		<div class="mx-auto mb-6 text-justify">
			<CallForm />
		</div>
	</div>
</section>


