<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import type { PageData } from './$types';
	import Create from './create.svelte';
	import { formatDate } from '$lib/date';
	import Remove from './remove.svelte';
	export let data: PageData;
	const heads = ['No','Name','Created at', 'Updated at', 'Action'];
</script>

<Card>
	<CardHeader>
		<CardTitle>Project Categories</CardTitle>
		<CardDescription>Add or edit categories for your project</CardDescription>
	</CardHeader>
	<CardContent class="flex flex-col gap-4">
		<div class="flex justify-end gap-3">
			<Create />
		</div>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					{#each heads as head,i}
						<Table.Head class={i === 0 ? 'text-center':''}>{head}</Table.Head>
					{/each}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.categories as category,i}
					<Table.Row>
						<Table.Cell class="text-center">{i+1}</Table.Cell>
						<Table.Cell>{category.name}</Table.Cell>
						<Table.Cell>{formatDate(category.createdAt)}</Table.Cell>
						<Table.Cell>{formatDate(category.updatedAt)}</Table.Cell>
						<Table.Cell class="flex gap-2">
							<Create {category} />
							<Remove {category} />
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</CardContent>
</Card>
