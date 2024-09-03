<script lang="ts">
	import { page } from '$app/stores';
	import { buttonVariants } from '../ui/button';
	const links = [
		{ url: '/about', label: 'About' },
		{ url: '/projects', label: 'Projects' },
		{ url: '/connect', label: 'Contact' }
	];
</script>

<nav class="flex justify-between px-4 py-3">
	<a href="/" class={buttonVariants({ variant: 'ghost', class: 'text-xl font-bold' })}>
		Rizkiansyah
	</a>
	<ul class="flex list-none gap-2">
		{#each links as { url: href, label }}
			<li>
				<a
					{href}
					class={buttonVariants({ variant: href === $page.url.pathname ? 'default' : 'ghost' })}
				>
					{label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
