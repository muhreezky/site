<script lang="ts">
	import * as Card from "../ui/card";

  export let title = '';
  export let count = 0;
</script>
<Card.Root class="hover:cursor-pointer hover:bg-gray-800 hover:text-white transition-all hover:shadow-lg">
  <Card.Header>
    <Card.Title tag="h1" class="text-lg">{title}</Card.Title>
    <Card.Description class="text-xl font-bold text-inherit">{count}</Card.Description>
  </Card.Header>
</Card.Root>