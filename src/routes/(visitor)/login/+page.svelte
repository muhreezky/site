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
	import { toast } from 'svelte-sonner';

	const fields = [
		{ name: 'email', label: 'E-mail', placeholder: 'email@example.com' },
		{ name: 'password', label: 'Password', placeholder: '********' },
	];
  let loading = false;
</script>

<Card>
	<form method="post" use:enhance={() => {
    loading = true;
    return ({ result, update }) => {
      const isSuccess = result.type !== 'error' && result.type !== 'failure';
      const message = isSuccess ? toast.success : toast.error;
      message(`Login ${isSuccess ? 'Berhasil' : 'Gagal'}`);
      update({ invalidateAll: true }).finally(() => loading = false);
    }
  }}>
		<CardHeader>
			<CardTitle tag="h1">Login</CardTitle>
			<CardDescription>Entering the admin dashboard</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-3">
			{#each fields as { name, label, placeholder }}
				<div class="flex flex-col gap-1">
					<label for={name}>{label}</label>
					<Input {name} {placeholder} id={name} type={name} required />
				</div>
			{/each}
		</CardContent>
		<CardFooter>
			<Button class="w-full" type="submit">Login</Button>
		</CardFooter>
	</form>
</Card>
