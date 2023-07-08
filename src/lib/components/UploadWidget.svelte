<script>
  import { env } from "$env/dynamic/public";
  import { onMount } from "svelte";

  let widget;

  export let onUpload = (error, result, widget) => {
    console.log("upload done", error, result, widget);
  };

  const cldOptions = {
    cloudName: "yash-911-cloud",
    uploadPreset: "jh3pc02z",
  };

  function cldCallback(error, result) {
    if (error || result.event === "success") {
      onUpload && onUpload(error, result, widget);
    }
  }

  onMount(() => {
    function onIdle() {
      if (!widget) {
        widget = window.cloudinary.createUploadWidget(cldOptions, cldCallback);
      }
    }

    "requestIdleCallback" in window
      ? requestIdleCallback(onIdle)
      : setTimeout(onIdle, 1);
  });

  function handleClick() {
    if (widget) {
      widget.open();
    }
  }
</script>

<button on:click|preventDefault={handleClick}> Upload an image </button>
