<script>
    export let error

</script>

{#if error}
<div>{error}</div>
{/if}


<style>
	div {
		@apply my-6 bg-red-500 shadow-md shadow-red-500/50 p-3 rounded-xl hover:shadow-none hover:bg-red-600 text-white;
	}
</style>