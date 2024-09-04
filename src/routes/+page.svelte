<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import me from '$lib/assets/cv-photo.jpg';
	import { Separator } from '$lib/components/ui/separator';
  let innerWidth: number;
</script>
<svelte:window bind:innerWidth />
<article class="flex justify-center items-center">
  <Card class="lg:w-4/6">
    <CardHeader>
      <CardTitle tag="h1">Muhammad Rizkiansyah</CardTitle>
      <CardDescription>Software Developer</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col lg:flex-row gap-4">
      <img
        loading="eager"
        src={me}
        alt={"Muhammad Rizkiansyah's Photo"}
        class="max-h[200px] max-w-[200px] rounded-full mb-3 hover:shadow-md hover:cursor-pointer dark:hover:shadow-gray-400 transition-shadow ease-in-out"
      />
      <Separator orientation={innerWidth >= 768 ? 'vertical' : 'horizontal'} />
      <article class="text-left">
        <h2 class="font-bold">About Me</h2>
        A junior software developer
      </article>
    </CardContent>
  </Card>
</article>
