<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import * as Card from '../ui/card';

	export let title = '';
	export let count = 0;

	const dispatch = createEventDispatcher();

	function click(event: MouseEvent) {
		dispatch('click');
	}
</script>

<Card.Root
	on:click={click}
	class="transition-all hover:cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-lg"
>
	<Card.Header>
		<Card.Title tag="h1" class="text-lg">{title}</Card.Title>
		<Card.Description class="text-xl font-bold text-inherit">{count}</Card.Description>
	</Card.Header>
</Card.Root>
