<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";

  export let title = '';
</script>
<article>
  <Card>
    <CardHeader class="text-center">
      <CardTitle tag="h1">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      
    </CardContent>
  </Card>
</article>