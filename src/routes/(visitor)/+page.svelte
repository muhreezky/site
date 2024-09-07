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
<article class="flex items-center justify-center">
	<Card class="lg:w-4/6">
		<CardHeader>
			<CardTitle tag="h1">Muhammad Rizkiansyah</CardTitle>
			<CardDescription>Software Developer</CardDescription>
		</CardHeader>
		<CardContent class="flex flex-col gap-4 md:flex-row">
      <div class="flex items-center">
        <img
          loading="eager"
          src={me}
          alt={"Muhammad Rizkiansyah's Photo"}
          class="mb-3 max-w-[200px] aspect-square rounded-full transition-shadow ease-in-out hover:cursor-pointer hover:shadow-md dark:hover:shadow-gray-400"
        />
      </div>
			<Separator orientation={innerWidth >= 768 ? 'vertical' : 'horizontal'} />
			<article class="break-words text-left">
				A junior software developer, focusing on website development. I've been worked on some projects,
				including freelance, personal, and professional projects. I can build websites using some of
				frameworks such as SvelteKit, Next.js, Laravel, or even plain stack (HTML, CSS, JS, and PHP).
				With my familiarity with some best practices, I can deliver apps with better quality to the clients.
			</article>
		</CardContent>
	</Card>
</article>
