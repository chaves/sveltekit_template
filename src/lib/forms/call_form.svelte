<script>

	import Error from '$lib/forms/error.svelte'

	import { createForm } from 'felte';
	import { validator } from '@felte/validator-vest'
	import { create, enforce, test } from 'vest'

    import { onMount } from 'svelte';

	import fileSize from "filesize";
	import {filedrop} from 'filedrop-svelte'
	let files
	let options = {}


	const suite = create('form', (data) => {
		test('first_name', 'First name is required', () => {
			enforce(data.first_name).isNotEmpty();
		})
		test('last_name', 'Last name  is required', () => {
			enforce(data.last_name).isNotEmpty()
		})
	})

	const { form, data, errors } = createForm({
		extend: validator, // or `extend: [validator],`
		validateSuite: suite,
		onSubmit: async (values) => {
			/* call to an api */
		}
	})

</script>


<form use:form class="dropzone" id="call-form">
    <div class="form-item">
        <label for="first_name">First name</label>
        <input type="text" name="first_name" />
        <Error error={$errors.first_name} />
    </div>

    <div class="form-item mt-3">
        <label for="last_name">Last name</label>
        <input type="password" name="last_name" />
        <Error error={$errors.last_name} />
    </div>


    <div use:filedrop={options} on:filedrop={(e) => {files = e.detail.files}} class="filedrop">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"
			><path fill="none" d="M0 0h24v24H0z" /><path
				d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 13v4h-2v-4H8l4-5 4 5h-3z"
			/></svg>
	<p>Drag &amp; drop files</p>
</div>

    <button type="submit">submit</button>
</form>


<p class="mt-6">dfqfqf: {$data.first_name}</p>


{#if files}
	<h2>Accepted files</h2>
	<ul>
		{#each files.accepted as file}
			<li>{file.name} - {fileSize(file.size)}</li>
		{/each}
	</ul>
	<h2>Rejected files</h2>
	<ul>
		{#each files.rejected as rejected}
			<li>{rejected.file.name} - {rejected.error.message}</li>
		{/each}
	</ul>
{/if}


<style>
	input, textarea {
		@apply mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
	}
	input:focus, textarea:focus {
		border-color: #5be2a9;
		box-shadow: 0 0 0 5px #5be2a9;
	}

	button {
		@apply mt-6 bg-blue-500 shadow-md shadow-blue-500/50 p-3 rounded-xl hover:shadow-none hover:bg-blue-600 text-white;
	}
</style>