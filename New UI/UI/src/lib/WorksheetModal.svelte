<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
  
    import Modal from "./Modal.svelte";
    import Tab from "./Tab.svelte";
    import { link } from "svelte-routing";
    import { Router, Route } from "svelte-routing";
    import Tree from './Tree.svelte'
    import Worksheet from './Worksheet.svelte';
    export const location: any = {};
    import Treeview from './Treeview1.svelte'
    import Editor from './Editor.svelte'




    const tree = {
		label: "USA", children: [
			{label: "Florida", children: [
				{label: "Jacksonville"},
				{label: "Orlando", children: [
					{label: "Disney World"},
					{label: "Universal Studio"},
					{label: "Sea World"},
				]},
				{label: "Miami"},
			]},
			{label: "California", children: [
				{label: "San Francisco"},
				{label: "Los Angeles"},
				{label: "Sacramento"},
			]},
		],
	}
  
    export let open = false;
    let tabItems = [
        { label: "Worksheets", value: 1 },
    { label: "Database", value: 2 }
  ];
  let currentTab;
  let currentTab1;
  let current = 'dashboard';
  export let url = "";
  let numberOfQueries = 1;

  let queryIndex = 1;
  let editors = [Editor];
  let editor = editors[0];

  </script>
  
  <Modal
    title=""
    {open}
    on:close={() => {
      dispatch("close");
    }}
  >
  <div>
    <i class='bx bx-play icon'></i>
    </div>
  <!-- <div> -->
    <div class='tabs'>
      <Tab bind:activeTabValue={currentTab} items={tabItems} />
      {#if 1 === currentTab}
      {#each { length: numberOfQueries } as _, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li class='nav-link' on:click={() => {editor = editors[i]}}  
      >
      <!-- <a href="/" use:link> -->
      <i class='bx bx-spreadsheet icon'  ></i>
      <span class="text nav-text"
          >Query - {i+1}</span>
      <!-- </a> -->
    </li>
    {/each}
    <button on:click={() => {numberOfQueries++ ; editors.push(Editor);editors=editors;  console.log(editors)   } }>+</button>
    {/if}

    {#if 2 === currentTab}
    <Treeview {tree} />
    <Treeview {tree} />
    <Treeview {tree} />
    {/if}
  </div>
  <div class="query">
    {#each editors as editor}
    {editor}
    {/each}
    <svelte:component this={editor} />
                <!-- <textarea name="select" id="code" rows="20">SELECT * FROM stock_prices;</textarea> -->
          </div>
        <!-- </div> -->
        </Modal>
  <style>
    .tabs{
      border: 2px solid #efefef;
      width: 25em;
      height: 100%;
    }
    .query{
      border: 2px solid #efefef;
      width: 100%;
      height: 100%;
    }

  li{
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.icon{
    min-width: 60px;
    border-radius: 6px;
}

.icon{
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

 .text, .icon{
    color: var(--primary-color);
    transition: var(--tran-03);
}

 .text{
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}
 li a{
    list-style: none;
    /* height: 100%; */
    background-color: transparent;
    display: flex;
    align-items: center;
    /* height: 100%; */
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
}
li:hover {
  background-color: var(--primary-background-light)
}
li:not(.active) a:hover {
  background-color: var(--primary-background-light);
}
::selection{
  background-color: var(--secondary-background);
    border-radius: 6px;
}
.query > textarea{
  resize: none;
  font-size: 1em;
  width: 100%;
}
  </style>