<script>
  import Sidebar from "../lib/components/sidebar/Sidebar.svelte";
  import Content from "../lib/components/content/Content.svelte";
  import Hamburger from "../lib/components/Hamburger.svelte";
  let open = false;
</script>

<div class="flex">
  <Sidebar bind:open />
  <Hamburger bind:open />
  <div class="mx-auto flex">
    <Content bind:open />
  </div>
</div>
