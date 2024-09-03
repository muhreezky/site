<script>
	import { ModeWatcher } from 'mode-watcher';
import '../app.css';
	import Navbar from '$lib/components/elements/navbar.svelte';
</script>

<svelte:head>
	<title>Muhammad Rizkiansyah</title>
</svelte:head>

<ModeWatcher />
<header>
	<Navbar />
</header>
<main class="px-5 py-3">
	<slot />
</main>