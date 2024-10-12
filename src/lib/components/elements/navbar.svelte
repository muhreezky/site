<script lang="ts">
	import { page } from '$app/stores';
	import { buttonVariants } from '../ui/button';
	import Navsheet from './navsheet.svelte';
	import ThemeToggle from './theme-toggle.svelte';
	const links = [
		{ url: '/', label: 'Home' },
		{ url: '/projects', label: 'Projects' },
		{ url: '/contact', label: 'Contact' }
	];
	let innerWidth: number;
	let innerHeight: number;
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<nav class="flex justify-between px-4 py-3">
	<a href="/" class={buttonVariants({ variant: 'ghost', class: 'text-xl font-bold' })}>
		Rizkiansyah
	</a>
	{#if innerWidth >= 768}
		<ul class="flex list-none gap-2">
			{#each links as { url: href, label }}
				<li>
					<a
						{href}
						class={buttonVariants({
							variant:
								(href.length > 1 && $page.url.pathname.startsWith(href)) || $page.url.pathname === href
									? 'default'
									: 'ghost'
						})}
					>
						{label}
					</a>
				</li>
			{/each}
			{#if $page.data.token}
				<li>
					<a
						href="/dashboard"
						class={buttonVariants({
							variant: $page.url.pathname.startsWith('/dashboard') ? 'default' : 'outline'
						})}>Dashboard</a
					>
				</li>
			{/if}
			<ThemeToggle />
		</ul>
	{:else}
		<Navsheet {links} />
	{/if}
</nav>
