<script lang="ts">
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  
    export let size: number = 20;
    export let icon: string;
  
    let color = "black";
  </script>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    style="cursor: pointer; width:{size}px; height:{size}px; color: var(--onbackground); display: flex; justify-content: center; align-items: center;"
    on:mouseover={() => {
      color = "gray";
    }}
    on:focus={() => {
      color = "gray";
    }}
    on:mouseout={() => {
      color = "black";
    }}
    on:blur={() => {
      color = "black";
    }}
    on:click={() => {
      dispatch("click");
    }}
  >
    <i class="bx {icon}" aria-hidden="true" style="font-size:1.5em;" />
  </div>
  
  <style>
  </style>
  