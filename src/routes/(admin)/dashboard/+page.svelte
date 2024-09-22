<script>
	import { enhance } from "$app/forms";
	import { Button } from "$lib/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";

</script>
<article>
	<Card>
		<CardHeader class="flex flex-row justify-between items-center">
			<CardTitle>Admin Dashboard</CardTitle>
			<form method="post" action="?/logout" use:enhance>
				<Button type="submit" variant="destructive">Logout</Button>
			</form>
		</CardHeader>
		<CardContent>
			
		</CardContent>
	</Card>
</article>