<script lang="ts">
	import { enhance } from '$app/forms';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import type { Category } from '$lib/server/db/models';

	export let category: Category;
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'destructive' })}>Delete</Dialog.Trigger>
	<Dialog.Content>
		<form method="post" use:enhance action="?/remove">
      <input hidden name="id" value={category.id} />
			<Dialog.Header class="mb-4">
				<Dialog.Title>Delete Category</Dialog.Title>
				<Dialog.Description>Are you sure to delete '{category.name}'?</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Dialog.Close type="submit" class={buttonVariants({ variant: 'destructive' })}
					>Delete</Dialog.Close
				>
				<Dialog.Close type="button" class={buttonVariants({ variant: 'secondary' })}
					>Cancel</Dialog.Close
				>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
