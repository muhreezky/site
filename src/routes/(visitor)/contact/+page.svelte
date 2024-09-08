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
	type Fields = { id: string, label: string, placeholder: string, type?: string };
	const [name1, name2, ...fields]: Fields[] = [
		{ id: 'firstname', label: 'First Name', placeholder: 'Write your first name (ex: John)' },
		{ id: 'lastname', label: 'Last Name', placeholder: 'Write your last name (ex: Doe)' },
		{ id: 'company', label: 'Company', placeholder: 'The place where you work (ex: ACME Corp)' },
		{
			id: 'email',
			label: 'E-mail',
			placeholder: 'Your valid e-mail address (ex: mail@domain.com)'
		},
		{ id: 'phone', label: 'Phone', placeholder: 'Your active phone number (ex: +6281234567890)' },
		{
			id: 'message',
			label: 'Message',
			placeholder: 'Tell anything about your brilliant ideas, let me help to make them come true',
			type: 'textarea'
		}
	];
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
							<Textarea name={name.id} id={name.id} placeholder={name.placeholder} />
						{:else}
							<Input name={name.id} id={name.id} placeholder={name.placeholder} />
						{/if}
					</div>
				{/each}
			</div>
			{#each fields as field}
				<div class="flex flex-col gap-1">
					<label for={field.id}>{field.label}</label>
					{#if field.type === 'textarea'}
						<Textarea name={field.id} id={field.id} placeholder={field.placeholder} />
					{:else}
						<Input name={field.id} id={field.id} placeholder={field.placeholder} />
					{/if}
				</div>
			{/each}
		</CardContent>
		<CardFooter>
			<Button type="submit" class="w-full">Send</Button>
		</CardFooter>
	</form>
</Card>
