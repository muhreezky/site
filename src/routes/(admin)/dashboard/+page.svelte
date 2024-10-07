<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import CountCard from '$lib/components/elements/count-card.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import type { PageData } from './$types';

	export let data: PageData;
	const counts: [keyof typeof data.counts, string][] = [
		['projects', 'Projects'],
		['stacks', 'Tech Stacks'],
		['categories', 'Categories'],
		['messages', 'Messages']
	];
</script>

<article>
	<Card>
		<CardHeader class="flex flex-row items-center justify-between">
			<CardTitle>Admin Dashboard</CardTitle>
			<form method="post" action="?/logout" use:enhance>
				<Button type="submit" variant="destructive">Logout</Button>
			</form>
		</CardHeader>
		<CardContent>
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
				{#each counts as [key, title]}
					{@const count = data.counts[key]}
					<CountCard on:click={() => goto(`/dashboard/${key}`)} {count} {title} />
				{/each}
			</div>
		</CardContent>
	</Card>
</article>
