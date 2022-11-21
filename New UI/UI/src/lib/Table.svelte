<script lang="ts" >
    // @ts-nocheck
    
        import { flip } from 'svelte/animate';
        import { text } from 'svelte/internal';
        // import Button from "../buttons/Button.svelte"
    // 	import Spinner from './spinner.svelte';
        
        
        /**
         * @type {any[]}
         */
        let things = [];
        /**
         * @type {any[]}
         */
        let colNames = [];
        let rowkeys = [];
        let sourceJson = "users";
        
        async function getThings(){
            
        console.log(sourceJson);
            
        const res = await 
            fetch(`https://jsonplaceholder.typicode.com/`+sourceJson);
            const json = await res.json();
    
            if (res.ok) {
                
                setTimeout(() => {
                    things = json;				
                    //grab column names
                    colNames = Object.keys(things[0])
                    
                    return true;
                }, 0 * Math.random())
                
            } else {
                // @ts-ignore
                throw new Error(text);
            }
            
        }
        
        
        let promise = getThings();
        
        /**
         * @param {any} id
         */
        function onDelete(id) {
            things = things.filter(t => t.id != id)
        }
    
        /**
         * @param {string} newSource
         */
        function reload(newSource){
            sourceJson = newSource
            promise = getThings();
        }
        
        let sortBy = {col: "name", ascending: true};
        
        $: sort = (column) => {
            
            if (sortBy.col == column) {
                sortBy.ascending = !sortBy.ascending
            } else {
                sortBy.col = column
                sortBy.ascending = true
            }
            
            // Modifier to sorting function for ascending or descending
            let sortModifier = (sortBy.ascending) ? 1 : -1;
            
            let sort = (a, b) => 
                (a[column] < b[column]) 
                ? -1 * sortModifier 
                : (a[column] > b[column]) 
                ? 1 * sortModifier 
                : 0;
            
            things = things.sort(sort);
        }
        export let alternatingRows = true;
    
        function omit(obj, ...keysToOmit) {
      return Object.keys(obj).reduce((acc, key) => {
        if (keysToOmit.indexOf(key) === -1) acc[key] = obj[key];
        return acc;
      }, {});
    }
    export let size = ''
    export let type = ''
    export let hover = false;
    export let striped = false;
    export let nativeType = 'table';
    // export let color = ''
    
    $: props = {
        ...omit($$props, 'hover','striped','nativeType', 'type'),
        class: `tr ${type} ${size} ${$$props.class || ''}`,
      }
    // $: props = {
    //     ...omit($$props, 'color'),
    //     class: `table ${color} ${$$props.class || ''}`,
    //   }
      export const color:  'white'  | 'alternative' | 'yellow'
        | 'blue'
        | 'cyan'
        | 'dark'= 'dark' ? 'yellow' : 'blue';
        // export let size: 'sm' | 'lg' | 'xl' | 'xs' | 'md' = group ? 'sm' : 'md';
        let buttonProps = {
        class:[$$restProps.class]
        }
    </script>
    
    <!-- <div class='buttons'>
        <button  class="dark md green-shadow" on:click={sort("name")}>Name &varr;</button>
        <button  class="dark md green-shadow" on:click={reload(sourceJson)}>Reload</button>
        <button  class="dark md green-shadow" on:click={sort("email")}>email &varr;</button>
        <button  class="dark md green-shadow">
            <select on:change={() => reload(document.getElementById('jsonSelector').value)} id="jsonSelector">
                <option value="users">Users</option>
                <option value="photos">Photos</option>
                <option value="comments">Comments</option>
            </select>
        </button>
    </div> -->
    
    {#await promise}
    <!-- 	<Spinner/> -->
    {:then getThings}
    
    <table class='table' {...$$restProps} {...buttonProps}>
        <thead>
            <tr
            {...props}
        type={nativeType} 
        class:is-hover={hover}
        class:is-striped={striped}
            >
            {#each colNames as col}
            <th
            class:center={col.align === 'center'}
            class:end={col.align === 'end'}
            on:click={sort(col)}
            >
            <slot name="header-item" {col}>
                {col} &varr;
            </slot>
        </th>
        {/each}
    </tr>
    </thead>
    <tbody>
        {#each things as thing, index (thing.id)}
        
        <tr
        {...props}
        type={nativeType} 
        class:is-hover={hover}
        class:is-striped={striped}
        on:click
            
             class:alternating={alternatingRows}>
                {#each colNames as col, index}
                <td
                class:center={col.align === 'center'}
                class:end={col.align === 'end'}
              >
              <slot name="item" {col} {thing}>
                    {thing[col]}
                    </slot>
                </td>
                {/each}
            </tr>
            {/each}
        </tbody>
    </table>
    
    
    
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    
    <style>
        .buttons {
            margin: 1em;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        table {
            max-width: 100%;
        border: 0;
        white-space: nowrap;
        border-collapse: collapse;
            border: 1px solid rgba(0,0,0,.12);
            border-radius: 4px;
        }
        
        th {
            height: 3em;
            font-family: Roboto,sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: .875rem;
        line-height: 1.375rem;
        font-weight: 500;
        letter-spacing: .00714em;
        text-decoration: inherit;
        text-transform: inherit;
        text-align: left;
            padding-right: 16px;
        padding-left: 16px;
        }
        
        tbody {
            font-family: Roboto,sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: .01786em;
        text-decoration: inherit;
        text-transform: inherit;
        }
        tr {
            height: 2em;
            border-top-color: rgba(0,0,0,.12);
        border-top-width: 1px;
        border-top-style: solid;
        }
        /* tr:hover{
            background-color: rgba(0,0,0,.04);
            background-color: #61dafb;
        } */
        
        td {
            padding-right: 16px;
        padding-left: 16px;
        }
        table {
         border-collapse: separate;
         border-spacing: 0;
         display: block;
         margin-bottom: 1em;
         overflow-x: auto;
        }
         th {
             padding: 0.5em 1em;
             text-align: start;
        }
         th.center {
             text-align: center;
        }
         th.end {
             text-align: end;
        }
         /* tr.alternating:nth-child(even) {
             background: #dfd7ed;
        } */
         tr:first-child > td:first-child {
             border-top-left-radius: 0.5em;
        }
         tr:first-child > td:last-child {
             border-top-right-radius: 0.5em;
        }
         tr:last-child > td {
             border-bottom-width: 1px;
        }
         tr:last-child > td:first-child {
             border-bottom-left-radius: 0.5em;
        }
         tr:last-child > td:last-child {
             border-bottom-right-radius: 0.5em;
        }
         td {
             border: 0 solid #faf8fd;
             border-width: 1px 0 0 1px;
             line-height: 1.3em;
             padding: 1em;
             text-align: start;
        }
         td.center {
             text-align: center;
        }
         td.end {
             text-align: end;
        }
         td:last-child {
             border-right-width: 1px;
        }
        .is-striped:nth-child(even){
        background-color: #dddddd;
        color: #1F2937;
    }
    .is-hover:hover{
        background-color: #61dafb;
        color: #faf8fd;
    }
    .blue{
            background-color: #1D4ED8; 
    color: #ffffff; 
    }
    .blue:hover {
        background-color: #1E40AF; 
     }
     .alternative{
        background-color: #ffffff; 
    color: #111827; 
    border-width: 1px; 
    border-color: #E5E7EB; 
     }
     .alternative:hover{
        background-color: #F3F4F6; 
    color: #1D4ED8; 
     }
     .dark{
        background-color: #1F2937; 
    color: #ffffff; 
     }
     .dark:hover{
        background-color: #111827; 
     }
    </style>
    