<script lang="ts">
    import { Router, Route } from "svelte-routing";

  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Sidebar from './lib/Sidebar.svelte'
  import Navbar from './lib/Navbar.svelte'
  import Tree from './lib/Tree.svelte'
  export const admin ='';
  export let url = "";
  export let location;
  import Skeleton from './lib/Skeleton.svelte'
  import Layout from './lib/Layout.svelte';
import Headerstats from './lib/HeaderStat.svelte'
import Dashboard from './lib/Dashboard.svelte';
import Worksheet from './lib/Worksheet.svelte';
const html = document.querySelector('html');
    html.dataset.theme = `theme-light`;
    function switchTheme(theme) {
    html.dataset.theme = `theme-${theme}`;
    }

</script>

<main>
<!-- <Layout row> -->
<Sidebar location={location}> 
  <!-- <div slot='name'>Worksheet</div>  -->
  <!-- <Layout> -->
    <div class="container">
      <!-- <Headerstats /> -->
      <Router url="{url}">
        <!-- <Route path="skeleton" component="{Skeleton}"/> -->
        <Route path="/" component="{Worksheet}">
          <div slot='name'>Work</div> 
        </Route>
        <Route path="tree" component="{Tree}"/>
        <!-- <Router path="/" component="{Sidebar}"/> -->
      </Router>
    </div>
  <!-- </Layout> -->
  </Sidebar>
<!-- </Layout> -->

</main>

<style>
  main{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .container
  {position: relative; 
    margin-top: 0em;
    /* background-color: #872080; */
    /* background-color:var(--background); */
    color: var(--primary-color);
  }
@media (min-width: 768px) { 
  .container{
  margin-left: 0rem; 
  }
 }
</style>
<!-- <style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->
