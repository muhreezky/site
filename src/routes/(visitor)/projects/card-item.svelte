<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { getFileUrl } from '$lib/file';
	import type { DataItem } from './types';

	export let project: DataItem;
</script>

<Card>
	<CardHeader>
		<CardTitle>{project.name}</CardTitle>
		<CardDescription>{project.description}</CardDescription>
	</CardHeader>
	<CardContent>
		<img src={getFileUrl(project.thumbnail)} alt={project.name} class="max-w-full rounded-lg" />
  </CardContent>
</Card>
