<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import type { PageData } from "./$types";
	import CardItem from "./card-item.svelte";

  export let data: PageData;
</script>
<article>
  <Card>
    <CardHeader>
      <CardTitle tag="h1">My Projects</CardTitle>
      <CardDescription>Here are some projects I'm working on</CardDescription>
    </CardHeader>
    <CardContent>
      {#if data?.data}
        {#each data.data as project}
          <CardItem {project} />
        {/each}
      {/if}
    </CardContent>
  </Card>
</article>