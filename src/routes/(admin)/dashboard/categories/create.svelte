<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';
  export let id: number | undefined = undefined;
</script>
<Dialog.Root>
  <Dialog.Trigger>+ New</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>{id ? 'Edit' : 'Create'} Category</Dialog.Title>
      <Dialog.Description></Dialog.Description>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>