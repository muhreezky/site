<script lang="ts">
	import { enhance } from '$app/forms';
	import FileInput from '$lib/components/elements/file-input.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import type { Project } from '$lib/server/db/models';
	import { Textarea } from '$lib/components/ui/textarea';
	export let project: Project | undefined = undefined;

	type K = keyof Project;
	const inputs = [
		{ label: 'Project Title', name: 'title' as K },
		{ label: 'Thumbnail', name: 'thumbnail' as K, type: 'file' },
		{ label: 'Project URL', name: 'url' as K },
		{ label: 'Project Description', name: 'description' as K, type: 'textarea' },
		{ label: 'Status', name: 'status' as K, options: ['Live', 'WIP', 'Discontinued'] },
		{ label: 'Platform', name: 'platform' as K, options: ['Desktop', 'Mobile', 'Website'] }
	];
</script>

<Sheet.Root>
	<Sheet.Trigger class={buttonVariants()}>{project ? 'Edit' : 'Add New'}</Sheet.Trigger>
	<Sheet.Content side="bottom" class="max-h-screen overflow-auto">
		<form method="post" action="?/update" use:enhance>
			<Sheet.Header>
				<Sheet.Title>{project ? 'Edit' : 'Add'} Project</Sheet.Title>
				<Sheet.Description
					>{project ? "You're going to edit this project" : 'Add New Project'}</Sheet.Description
				>
			</Sheet.Header>
			<div class="flex flex-col gap-4">
				{#if project}
					<input hidden name="id" value={project?.id} />
				{/if}
				<div class="p-3">
					{#each inputs as { label, name, type, options }, i}
						<section class="mb-3 flex flex-col gap-1">
							{#if type === 'file'}
								<FileInput {label} {name} id={name} accept="image/*" />
							{:else}
								<label for={name}>{label}</label>
								{#if options}
									<Select.Root>
										<Select.Trigger>
											<Select.Value placeholder="Choose here..."></Select.Value>
										</Select.Trigger>
										<Select.Content>
											{#each options as option}
												<Select.Item value={option}>{option}</Select.Item>
											{/each}
										</Select.Content>
									</Select.Root>
								{:else if type === 'textarea'}
									<Textarea {name} id={name} value={String(project?.[name] || '')} />
								{:else}
									<Input {name} id={name} value={project?.[name]} />
								{/if}
							{/if}
						</section>
					{/each}
				</div>
			</div>
			<Sheet.Footer>
				<Sheet.Close class={buttonVariants()} type="submit">Submit</Sheet.Close>
			</Sheet.Footer>
		</form>
	</Sheet.Content>
</Sheet.Root>
