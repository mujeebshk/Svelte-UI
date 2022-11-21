
<script lang="ts">
    import { onMount } from "svelte";
  
    export let items = [];
    export let activeTabValue;
  
    onMount(() => {
      // Set default tab value
      if (Array.isArray(items) && items.length && items[0].value) {
        activeTabValue = items[0].value;
      }
    });
  
    const handleClick = tabValue => () => (activeTabValue = tabValue);
  </script>
  
  <ul>
    {#if Array.isArray(items)}
      {#each items as item}
        <li class={activeTabValue === item.value ? 'active' : ''}>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
              <span class="mr" on:click={handleClick(item.value)}>{item.label}</span>
        </li>
      {/each}
    {/if}
  </ul>
  
  <style>
      ul {
          display: flex;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
          /* border-bottom: 1px solid #dee2e6; */
        }
        
        span {
            border: 1px solid transparent;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      display: block;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: .9em;
    }
    
    span:hover {
        /* border-color: #e9ecef #e9ecef #dee2e6; */
        color: var(--secondary-colors);
    }
    
    li.active > span {
        color: var(--primary-color);
        /* background-color: var(--secondary-background); */

        /* border-color: #dee2e6 #dee2e6 #fff; */
    }
    li.active > span {
        color: var(--primary-color);
        border-bottom: 2px solid var(--secondary-colors);
    }
    .mr{
    /* margin-right: 1.5em; */
    margin: 0 1em;
}
  </style>