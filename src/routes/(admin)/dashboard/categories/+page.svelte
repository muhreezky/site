<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
</script>

<Card>
	<CardHeader>
		<CardTitle>Project Categories</CardTitle>
		<CardDescription>Add or edit categories for your project</CardDescription>
	</CardHeader>
	<CardContent>
		<div class="flex justify-end gap-3">
			<Button type="button">+ New</Button>
		</div>
	</CardContent>
</Card>
