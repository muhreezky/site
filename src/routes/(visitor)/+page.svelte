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
	import { buttonVariants } from '$lib/components/ui/button';
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
					class="mb-3 aspect-square max-w-[200px] rounded-full transition-shadow ease-in-out hover:cursor-pointer hover:shadow-md dark:hover:shadow-gray-400"
				/>
			</div>
			<Separator orientation={innerWidth >= 768 ? 'vertical' : 'horizontal'} />
			<article class="break-words text-left">
				A junior software developer, focusing on website development. I've been worked on some
				projects, including freelance, personal, and professional projects. I can build websites
				using some of frameworks such as SvelteKit, Next.js, Laravel, or even plain stack (HTML,
				CSS, JS, and PHP). With my familiarity with some best practices, I can deliver apps with
				better quality to the clients.
				<div class="grid grid-cols-1 gap-3 md:grid-cols-2 mt-4">
					<a href="/contact" class={buttonVariants({ variant: 'default' })}>Contact Me</a>
					<a href="/projects" class={buttonVariants({ variant: 'secondary' })}>View Projects</a>
				</div>
			</article>
		</CardContent>
	</Card>
</article>
