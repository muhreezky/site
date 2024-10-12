<script lang="ts">
	import { enhance } from '$app/forms';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import type { Category } from '$lib/server/db/models';
	export let category: Category | undefined = undefined;
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants()}>{category ? 'Edit' : 'Create New'}</Dialog.Trigger>
	<Dialog.Content>
		<form method="post" action="?/update" class="flex flex-col gap-4" use:enhance>
			{#if category}
				<input hidden name="id" value={category?.id} />
			{/if}
			<Dialog.Header>
				<Dialog.Title>{category ? 'Edit' : 'Create'} Category</Dialog.Title>
				<Dialog.Description
					>{category
						? "You're going to edit this category"
						: 'Create New Category'}</Dialog.Description
				>
			</Dialog.Header>
			<div class="flex flex-col gap-2 rounded-md border p-3">
				<section class="flex flex-col gap-1">
					<label for="name">Category Title</label>
					<Input
						name="name"
						id="name"
						value={category?.name}
						placeholder="Enter Category Name Here..."
					/>
				</section>
			</div>
			<Dialog.Footer>
				<Dialog.Close class={buttonVariants()} type="submit">Submit</Dialog.Close>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
