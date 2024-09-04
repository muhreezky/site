<script lang="ts">
	import { page } from '$app/stores';
	import { buttonVariants } from '../ui/button';
	import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
	import ThemeToggle from './theme-toggle.svelte';

	export let links: { url: string; label: string }[] = [];
</script>

<Sheet>
	<SheetTrigger class={buttonVariants({ variant: 'ghost' })}>
		<div class="rotate-90">|||</div>
	</SheetTrigger>
	<SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
		<div class="px-2 py-4">
			<ul class="flex list-none flex-col gap-2">
				{#each links as { url: href, label }}
					<li>
						<a
							{href}
							class={buttonVariants({
								variant: $page.url.pathname === href ? 'default' : 'outline',
                class: 'w-full'
							})}
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
    <SheetFooter>
      <div class="flex justify-end">
        <ThemeToggle />
      </div>
    </SheetFooter>
	</SheetContent>
</Sheet>
