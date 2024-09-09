<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { fields, name1, name2 } from './fields';

</script>

<Card>
	<form method="post" use:enhance>
		<CardHeader>
			<CardTitle tag="h1" class="text-lg">Let's Step Closer</CardTitle>
			<CardDescription>
				Do you have any idea or something to tell? Feel free to fill this form
			</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-3">
			<div class="grid grid-cols-2 gap-3">
				{#each [name1, name2] as name}
					<div class="flex flex-col gap-1">
						<label for={name.id}>{name.label}</label>
						{#if name.type === 'textarea'}
							<Textarea
								required={!name.optional}
								name={name.id}
								id={name.id}
								placeholder={name.placeholder}
							/>
						{:else}
							<Input
								name={name.id}
								id={name.id}
								placeholder={name.placeholder}
								required={!name.optional}
							/>
						{/if}
					</div>
				{/each}
			</div>
			{#each fields as field}
				<div class="flex flex-col gap-1">
					<label for={field.id}>{field.label}</label>
					{#if field.type === 'textarea'}
						<Textarea
							required={!field.optional}
							name={field.id}
							id={field.id}
							placeholder={field.placeholder}
						/>
					{:else}
						<Input
							required={!field.optional}
							name={field.id}
							id={field.id}
							placeholder={field.placeholder}
						/>
					{/if}
				</div>
			{/each}
		</CardContent>
		<CardFooter>
			<Button type="submit" class="w-full">Send</Button>
		</CardFooter>
	</form>
</Card>
