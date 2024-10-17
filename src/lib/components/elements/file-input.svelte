<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	export let url = '';
	export let label = 'File';
	type $$Props = HTMLInputAttributes & { class?: string; url?: string; label?: string };
	let input: HTMLInputElement;
	let src = url;
</script>

<fieldset class="rounded-lg border px-5 py-3">
	<legend>{label}</legend>
	{#if src}
		<div class="w-full max-h-[90px]">
			<img {src} class="object-scale-down max-h-[90px]" alt="{label} image" />
		</div>
	{/if}
	<input
		type="file"
		bind:this={input}
		on:change={({ currentTarget }) =>
			(src = currentTarget.files ? URL.createObjectURL(currentTarget.files[0]) : url)}
		{...$$restProps}
	/>
</fieldset>
