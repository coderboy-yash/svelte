<script>
  export let open = false;
</script>

<div class="relative h-screen w-[4rem] bg-[#363740]">
  <button
    class="absolute left-[1rem] top-[2rem] mr-4 cursor-pointer border-none text-gray-200 hover:text-gray-500 focus:outline-none"
    class:open
    on:click={() => (open = !open)}
  >
    <div />
    <svg width="32" height="24">
      <line id="top" x1="0" y1="2" x2="32" y2="2" />
      <line id="middle" x1="0" y1="12" x2="24" y2="12" />
      <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
    </svg>
  </button>
</div>

<style>
  .open {
    left: 14rem;
    transition: left 0.3s ease-in-out;
  }
  svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    stroke: currentColor;
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }

  button {
    z-index: 20;
  }

  .open svg {
    transform: scale(0.9);
  }

  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  .open #middle {
    opacity: 0;
  }

  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
</style>
