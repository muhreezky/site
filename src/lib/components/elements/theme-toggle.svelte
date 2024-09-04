<script lang="ts">
	import { mode, toggleMode } from "mode-watcher";
	import { Switch } from "../ui/switch";
	import { Moon, Sun } from "svelte-radix";
  $: checked = $mode === 'dark';
</script>
<div class="flex gap-1 items-center">
  <label for="dark-switcher" class="hover:cursor-pointer">
    <Sun size={16}/>
  </label>
  <Switch id="dark-switcher" onCheckedChange={toggleMode} {checked} />
  <label for="dark-switcher" class="hover:cursor-pointer">
    <Moon size={16} />
  </label>
</div>