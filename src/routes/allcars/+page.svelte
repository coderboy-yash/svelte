<script>
  import { data } from "../../lib/store/carData";
  import Content from "../../lib/components/content/Content.svelte";
  let open = true;
</script>

<div>
  <Content bind:open />
</div>
