<script>
	export let title;
    import { fadeIn, fadeOut } from "$utilities/fadeEffects.js";
</script>

<section class="py-6 bg-blueGray-100">
	<div class="container text-center">
        <h1
        class="text-2xl lg:text-3xl font-bold mb-5 mt-5"
        in:fadeIn out:fadeOut
    >
        {@html title }
    </h1>
	</div>
</section>