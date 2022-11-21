<script lang="ts">
    export let col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
    export let container = null;
  
    $: className = "col" + col;
  </script>
  
  {#if container}
    <div class="grid"><slot /></div>
  {:else}
    <div class={className}><slot /></div>
  {/if}
  
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-column-gap: 1em;
      grid-row-gap: 1em;
    }
  
    .col1 {
      grid-column: span 1;
    }
  
    .col2 {
      grid-column: span 2;
    }
  
    .col3 {
      grid-column: span 3;
    }
  
    .col4 {
      grid-column: span 4;
    }
  
    .col5 {
      grid-column: span 5;
    }
  
    .col6 {
      grid-column: span 6;
    }
  
    .col7 {
      grid-column: span 7;
    }
  
    .col8 {
      grid-column: span 8;
    }
  
    .col9 {
      grid-column: span 9;
    }
  
    .col10 {
      grid-column: span 10;
    }
  
    .col11 {
      grid-column: span 11;
    }
  
    .col12 {
      grid-column: span 12;
      width: 90%;
    }
    @media (min-width: 1135px) {
      .grid {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-column-gap: 1em;
        grid-row-gap: 1em;
      }
    }
    @media (max-width: 775px) {
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 1em;
        grid-row-gap: 1em;
      }
    }
  </style>
  